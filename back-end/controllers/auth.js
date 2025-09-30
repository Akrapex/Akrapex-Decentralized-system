import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userdb } from "../demodb.js";
import dotenv from "dotenv";
import pool from '../config/dbConfig.js'
dotenv.config();





async function findUser(email, db) {
  if (process.env.DATABASE == "postgres") {
    // let database;
    let user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    console.log(user.rows);
    if (user.rows.length <= 0) {
      return [];
    } else {
      return user.rows;
    }
  } else {

    //this section is for the demodb

    let findUser = db.find((user) => {
      return user.email == email;
    });
    if (findUser) {
      console.log(findUser, "user found");
      let details = [findUser];
      return details;
    } else {
      return [];
    }
  }
}

export default async function login(req, res) {
  // console.log(req.url)
  if (req.url == "/login") {
    let secretKey = process.env.JWT_SECRET_STRING;

    let { email, password } = req.body;

    if (
      email == null ||
      email == undefined ||
      password == null ||
      password == undefined
    ) {
      // console.log("pls provide login details");
      res.json({ success: false, msg: "pls provide login details" });
      return;
    }

    let user = await findUser(email, userdb);

    //first we check if the user with this email exists
    let verifyPassword;

    // console.log(user,"user array");

    if (user.length > 0) {
      // console.log(user[0].password);

      verifyPassword = await bcrypt.compare(password, user[0].password);

      if (verifyPassword) {
        let token = jwt.sign(
          { id: user[0].id, email: user[0].email },
          secretKey
        );

        res.cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
          maxAge: 1000 * 60 * 60,
        });

        res
          .status(200)
          .json({ success: true, msg: "user signed in successfully" });
        // console.log("signed in successfully");
        return;
      } else {
        // console.log("password mismatch");

        res.json({ success: false, msg: "wrong password" });

        return;
      }
    } else {
      res.json({ success: false, msg: "invalid credentials" });
      // console.log("failed to sign in");
      return;
    }
  } else {
    try {
      let { fullname, email, account_role, password } = req.body;
      let hash = await bcrypt.hash(password, 10);
      //check if email exits already i will replace with actual database values
      let findUser = userdb.find((user) => {
        return user.email == email;
      });
      console.log(findUser);
      if (findUser) {
        res.status(200).json({
          success: false,
          message: "this email has been registered already",
        });

        // console.log("user already exists");

        return;
      } else {
        let uid = new Date();
         let newUser;
        // replace this with actual database
        //---- demo----
        if (process.env.DATABASE == 'postgres') {
          let result = await database.query('INSERT INTO users (email,password,name,user_role) VALUES ($1,$2,$3,$4) RETURNING *', [email, hash, fullname, account_role]);
          newUser = result.rows[0]

        }else{
        userdb.push({
          id: uid,
          email: email,
          password: hash,
          name: fullname,
          user_type: account_role,
          email_status: false,
        });
        newUser = userdb[userdb.length - 1];
        }

        // --- demo ---


        // console.log(userdb);

        let token = jwt.sign(
          { id: newUser.id, email: newUser.email },
          process.env.JWT_SECRET_STRING
        );

        res.cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
          maxAge: 1000 * 60 * 60,
        });

        res
          .status(200)
          .json({ success: true, msg: " new user registered successfully" });
        // console.log("signed in successfully");
      }
    } catch (err) {
      console.log("someting went wrong", err);

      res.json({ success: false, msg: "email already exists" });
    }
  }
}

