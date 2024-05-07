import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "123icaro",
  port: 5432,
});
// const pool = new Pool({
//   user: process.env.DATABASE_USER,
//   host: process.env.DATABASE_HOST,
//   database: process.env.DATABASE_NAME,
//   password: process.env.DATABASE_PASSWORD,
//   port: 5432,
// });

export default pool;
