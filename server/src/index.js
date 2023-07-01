import express from "express";
import cors from "cors";
import { ServerConfig } from "./config/server-config.js";
import connect from "./database/connection.js";
import PostModel from "./model/post-model.js";
const app = express();

/** middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/** api end points */
app.get("/", (req, res) => {
  res.status(200).json({ server: "Server is up" });
});

/** create post */
app.post("/create", async (req, res) => {
  // console.log(req.body);
  const { title, description } = req.body;
  const post = new PostModel({ title, description });
  await post.save();
  return res.status(201).json({ message: "Successfully Created Post" });
});

/** get posts */
app.get("/posts", async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

/** delete post */
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await PostModel.findByIdAndDelete({ _id: id }).exec();

    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(deletedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete post" });
  }
});

/** server setup */
/** server start listening when the mongoose gets connected */
connect()
  .then(() => {
    try {
      app.listen(ServerConfig.PORT, () => {
        console.log(`DB Connected`);
        console.log(`http://localhost:${ServerConfig.PORT}`);
      });
    } catch (error) {
      console.log("Couldn't Connected to DB", error);
    }
  })
  .catch((err) => {
    console.log("Coudn't Connected to DB -- catch()", err);
  });
