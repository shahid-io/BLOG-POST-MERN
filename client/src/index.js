import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CreatePost from "./components/CreatePost";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Posts from "./components/Posts";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
