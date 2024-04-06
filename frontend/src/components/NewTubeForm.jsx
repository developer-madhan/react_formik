import React from "react";
import { Container } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comment: "",
  social:{
    facebook:"",
    twitter:""
  },
};

const onSubmit = (values) => {
  console.log("Form Values: ", values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("*Please Enter Your Name"),
  email: Yup.string()
    .email("*Invalid Email Format")
    .required("*Please Enter Your Email"),
  channel: Yup.string().required("*Please Enter Your channel"),
  comment: Yup.string().required("*Please Enter Your comment"),
});

const NewYoutubeForm = () => {
  return (
    <div>
      <Container className="my-3">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
              <ErrorMessage name="name" component={"div"} className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                className="form-control"
                id="email"
                name="email"
              />
              <ErrorMessage name="email" component={"div"} className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                className="form-control"
                id="channel"
                name="channel"
              />
              <ErrorMessage name="channel" component={"div"} className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="comment">comment</label>
              <Field
                as="textarea"
                className="form-control"
                name="comment"
                id="comment"
              />
              <ErrorMessage name="comment" component={"div"} className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="channel">Facebook</label>
              <Field
                type="text"
                className="form-control"
                id="facebook"
                name="social.facebook"
              />
            </div>

            <div className="form-group">
              <label htmlFor="channel">Twitter</label>
              <Field
                type="text"
                className="form-control"
                id="twitter"
                name="social.twitter"
              />
            </div>

            <button className="my-3" type="submit">Submit</button>
          </Form>
        </Formik>
      </Container>
    </div>
  );
};

export default NewYoutubeForm;
