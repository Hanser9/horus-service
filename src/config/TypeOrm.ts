import { createConnection } from "typeorm";
import path from "path";

export async function connect() {
  console.log("Connecting to database 👾");
  if (
    !process.env.MYSQL_HOST ||
    !process.env.MYSQL_USER ||
    !process.env.MYSQL_PASSWORD ||
    !process.env.MYSQL_DATABASE
  ) {
    throw new Error("MYSQL_* env variables are not defined");
  }
  await createConnection({
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [path.join(__dirname, "../entity/**/*.ts")],
    synchronize: true,
  });
  console.log("Connected to database 🤖");
}
