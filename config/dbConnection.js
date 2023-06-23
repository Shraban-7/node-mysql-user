const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD, DIALECT } =
  process.env;

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect:
    DIALECT /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});





  const connectToDB = async()=>{ try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports= {sequelize,connectToDB}