// config/config.js
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const envs = process.env;

// Base DB config used by sequelize-cli (must be synchronous)
const baseConfig = {
  username: envs.DB_USERNAME || "postgres",
  password: envs.DB_PASSWORD || "",
  database: envs.DB_NAME || "postgres",
  host: envs.DB_HOST || "127.0.0.1",
  port: Number(envs.DB_PORT) || 5432,
  dialect: "postgres",
  // optional dialectOptions for SSL if DB_CERT path is provided
  dialectOptions: envs.DB_CERT
    ? {
        ssl: {
          // read PEM file containing CA cert for RDS / hosted DB
          ca: fs.readFileSync(path.resolve(envs.DB_CERT)).toString(),
          rejectUnauthorized: true,
        },
      }
    : {},
  // lowercase/underscored conventions and global model defaults (optional)
  define: {
    underscored: true,
    timestamps: true,
  },
  logging: false,
};

module.exports = {
  development: baseConfig,
  test: baseConfig,
  production: baseConfig,
};
