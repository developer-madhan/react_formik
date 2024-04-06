import React from "react";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from 'yup';

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form Values: ", values);
};
const validationSchema = Yup.object({
    name:Yup.string().required('*Please Enter Your Name'),
    email:Yup.string().email('*Invalid Email Format').required('*Please Enter Your Email'),
    channel:Yup.string().required('*Please Enter Your channel')
})

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
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
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            {...formik.getFieldProps('channel')}
          />
          {formik.touched.channel && formik.errors.channel ? <div>{formik.errors.channel}</div> : null}

          <button type="submit">Submit</button>
        </form>
      </Container>
    </div>
  );
};

export default YoutubeForm;
