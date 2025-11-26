// prisma/prisma.config.ts
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  // path to your schema
  schema: "prisma/schema.prisma",

  // where migrations will be stored (optional but recommended)
  migrations: {
    path: "prisma/migrations",
  },

  // move DATABASE_URL here
  datasource: {
    url: env("DATABASE_URL"),
  },
});
