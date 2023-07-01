import React from "react";
import "../styles/CreatePost.css";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import Button from "react-bootstrap/Button";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const res = await axios.post("/create", values);
      console.log(res);
      navigate("/posts");
    } catch (err) {
      console.log(err);
    }
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <div className="post-wrapper">
      <h1>Blog Page</h1>
      <Formik
        initialValues={{ title: "", description: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="title">Title</label>
              <Field
                type="text"
                id="title"
                name="title"
                className="form-control"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description">Description</label>
              <Field
                as="textarea"
                id="description"
                name="description"
                className="form-control"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-danger"
              />
            </div>

            <Button
              variant="outline-success"
              type="submit"
              className="mb-2 w-100"
            >
              Create
            </Button>
          </Form>
        )}
      </Formik>

      <Button
        type="submit"
        variant="outline-dark"
        className="w-100"
        onClick={() => navigate(-1)}
      >
        Home
      </Button>
      <Button
        variant="outline-dark"
        className="w-100 mt-2"
        onClick={() => navigate("/posts")}
      >
        See Posts
      </Button>
    </div>
  );
};

export default CreatePost;
