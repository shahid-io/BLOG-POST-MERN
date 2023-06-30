import mongoose from "mongoose";

async function connect() {
  const mongo = await mongoose.connect("mongodb://127.0.0.1:27017/blog-post");
  return mongo;
}
export default connect;
