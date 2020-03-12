import * as mongoose from "mongoose";

export const TestimonialSchema = new mongoose.Schema({
  name: String,
  position: String,
  office: String,
  comment: String
});
