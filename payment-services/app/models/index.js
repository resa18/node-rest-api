const dbConfig = require("../config/db.config.js");
const { Sequelize } = require("sequelize");
const mysql2 = require("mysql2");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  dialectModule: mysql2,
  port: dbConfig.PORT,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.warehouses = require("./warehouses.model.js")(sequelize, Sequelize);
db.carts = require("./carts.model.js")(sequelize, Sequelize);
db.items = require("./items.model.js")(sequelize, Sequelize);
db.transactions = require("./transactions.model.js")(sequelize, Sequelize);
db.outlets = require("./outlets.model.js")(sequelize, Sequelize);
db.detail_transactions = require("./detail_transactions.model.js")(
  sequelize,
  Sequelize
);
db.stocks = require("./stocks.model.js")(sequelize, Sequelize);

module.exports = db;
