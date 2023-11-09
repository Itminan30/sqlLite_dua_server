const express = require('express');
const cors = require('cors');
const db = require("./db/dua");
const app = express();
const port = 1660;

app.use(cors());

app.get("/duas/:catId", async(req, res) => {
    const categoryId = req.params.catId || 1;
    const subcategories = await db.getAllSubcategory(categoryId);
    const categories = await db.getAllCategory();
    const duas = await db.getCategoryWiseDua(categoryId);
    res.status(200).json({categories, subcategories, duas});
})



app.listen(port, () => {
    console.log("server is running on port:", port);
})