import { connect } from "mongoose";
import { config } from "dotenv";

config();

const connection = async () => {
  try {
    await connect(process.env.mongo_url);
    console.log("Database connected");
  } catch (error) {
    console.log(error, "Error connecting to database");
  }
};
