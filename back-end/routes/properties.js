import express from "express";
import pool from "../config/dbConfig.js";
let router = express.Router();
import properties from "../controllers/properties.js";

// router.get("/properties", async (req, res) => {
//   console.log(req.query);
//   let properties = await pool.query(
//     "SELECT * FROM properties LIMIT 20 OFFSET 20"
//   );
//   res.json({ success: true, data: properties.rows });
// });

router.get("/properties/search", properties);

export default router;
