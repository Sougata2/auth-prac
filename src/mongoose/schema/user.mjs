import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
});

const user = model("user", userSchema);

export default user;
