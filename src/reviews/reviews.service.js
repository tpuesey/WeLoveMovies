const knex = require("../db/connection");
const tableName = "reviews";

async function destroy(review_id) {
    return knex(tableName).where({ review_id }).del();
}