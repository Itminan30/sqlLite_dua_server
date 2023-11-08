const express = require('express');
const cors = require('cors');
const db = require("./db/dua");
const app = express();
const port = 1660;

app.use(cors());

app.get("/duas", async(req, res) => {
    const query = req.query.cat || 1;
    const subcategories = await db.getAllSubcategory(query);
    const categories = await db.getAllCategory();
    const duas = await db.getCategoryWiseDua(query);
    res.status(200).json({categories, subcategories, duas});
})



app.listen(port, () => {
    console.log("server is running on port:", port);
})