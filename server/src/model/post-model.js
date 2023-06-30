import mongoose from "mongoose";

export const PostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default mongoose.model("Post", PostSchema);
