import "reflect-metadata";
import { connect } from "./config/TypeOrm";
import { startServer } from "./app";

async function main() {
  const dotenv = require("dotenv");
  await dotenv.config();
  await connect();
  console.log("Your server is inicializing...🚀");
  const app = await startServer();
  const PORT = process.env.PORT;
  if (!PORT) throw new Error("PORT is not defined");
  app.listen(PORT);
  console.log("Server on port:", PORT);
}

main();
