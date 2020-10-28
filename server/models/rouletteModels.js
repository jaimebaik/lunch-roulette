const { pool } = require('pg');

const PG_URI = 'postgres://yuioffzf:sNbtTIFQlRbAvlJNeo7sygfBuQyvhjvI@salt.db.elephantsql.com:5432/yuioffzf';

//create a new pool with connection string
const pool = new Pool({
  connectionString: PG_URI
});

//export the pool object with property query, which is a function that returns pool.query()
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};