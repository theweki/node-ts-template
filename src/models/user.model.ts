import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
});

const userModel = model("User", userSchema);

export { userModel };
