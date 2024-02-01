import * as dotenv from "dotenv";
dotenv.config();

export default {
  port: 1337,
  dbUri: `mongodb+srv://pastaService:${process.env.MONGODB_PWD}@cluster0.irvsezq.mongodb.net/PastaServiceDB`,
  saltWorkFactor: 10,
};
