import pool from "../config/dbConfig.js";

let properties = async (req, res) => {
  let page = req.query.page || 0;
  let { q } = req.query;

  let offset = ((page * 20) / 20) * 20;

  if (q == undefined) {
    let totalmatch = await pool.query("SELECT COUNT(*) FROM properties");
    let properties = await pool.query(
      "SELECT * FROM properties LIMIT 20 OFFSET $1",
      [offset]
    );
    let totalpages = Math.ceil(totalmatch.rows[0].count / 20);
    console.log(totalmatch.rows[0].count);
    
    res.json({
      success: true,
      data: properties.rows,
      pages: totalpages,
      result: totalmatch.rows[0].count
    });
    return;
  }
  let totalmatch = await pool.query(
    "SELECT COUNT(*) FROM properties WHERE description ILIKE $1 OR title ILIKE $1",
    [`%${q}%`]
  );
  let properties = await pool.query(
    "SELECT * FROM properties WHERE description ILIKE $1 OR title ILIKE $1 LIMIT 20 OFFSET $2",
    [`%${q}%`, offset]
  );
  let totalpages = Math.ceil(totalmatch.rows[0].count / 20);
  console.log(totalmatch.rows[0].count);
  console.log(q, page);
  console.log(offset);

  res.json({
    success: true,
    data: properties.rows,
    pages: totalpages,
    result: totalmatch.rows[0].count,
  });
};

export default properties;
