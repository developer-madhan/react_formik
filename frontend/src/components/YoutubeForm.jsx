import React from "react";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};
const onSubmit = (values) => {
  console.log("Form Values: ", values);
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

//   console.log("Form Errors: ", formik.errors);
  // console.log("Form Values: ", formik.values);

  return (
    <div>
      <Container className="my-3">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? <div>{formik.errors.channel}</div> : null}

          <button type="submit">Submit</button>
        </form>
      </Container>
    </div>
  );
};

export default YoutubeForm;
