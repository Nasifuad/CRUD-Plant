import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    userEmail: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
      default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
    coverImage: {
      type: String,
      required: false,
      default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
