import * as mongoose from "mongoose";

export const PortfolioSchema = new mongoose.Schema({
  name: String,
  description: String,
  thumbnail: String
});
