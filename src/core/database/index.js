// src/core/database/index.ts
import { Sequelize } from "sequelize";
import { getRuntimeConfig } from "./runtimeConfig";

export async function createSequelize() {
  const cfg = await getRuntimeConfig();
  // cfg can be passed either as (db, user, pass, cfg) or as new Sequelize(cfg)
  const sequelize = new Sequelize(
    cfg.database,
    cfg.username,
    cfg.password,
    cfg
  );
  return sequelize;
}
