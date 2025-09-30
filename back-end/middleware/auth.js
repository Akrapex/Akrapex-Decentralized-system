import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export default function isAuthenticated(req, res, next) {
  try {
    let token = req.cookies.token
    console.log(req.cookies);
    console.log(req.headers.cookie);
    let decoded = jwt.verify(token, process.env.JWT_SECRET_STRING);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(req.headers.cookie);
    res.status(401).json({ success: false, msg: err.message });
  }
}
