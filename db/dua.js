const knex = require("./knex");

function getAllCategory () {
    return knex("category").select("*");
}

function getSpecificCategory (id) {
    return knex("category").where("id", id).select("*");
}

function getAllSubcategory (catid) {
    return knex("sub_category").where("cat_id", catid).select("*");
}

function getCategoryWiseDua (catid) {
    return knex("dua").where("cat_id", catid).select("*");
}

module.exports = {
    getAllCategory,
    getSpecificCategory,
    getAllSubcategory,
    getCategoryWiseDua,
}