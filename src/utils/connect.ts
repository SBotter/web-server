import mongoose from "mongoose";
import config from "config";
import logger from "../utils/logger";

function connect() {
  const dbUri = config.get<string>("dbUri");

  console.log(dbUri);

  return mongoose
    .connect(dbUri)
    .then(() => {
      logger.info("Connected to DB!");
    })
    .catch((e) => {
      logger.error(e.message, "BD Connect ERROR!");
      process.exit(1);
    });
}

export default connect;
