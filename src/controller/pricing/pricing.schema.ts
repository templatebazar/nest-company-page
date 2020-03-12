import * as mongoose from "mongoose";

export const PricingSchema = new mongoose.Schema({
  name: String,
  price: String,
  features: Array
});
