import React, { useState } from "react";
import { Container, Form, Button, Alert, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form Values: ", values);
  // Add logic here to handle form submission (e.g., API calls)
};

const validationSchema = Yup.object({
  name: Yup.string().required("*Please Enter Your Name"),
  email: Yup.string()
    .email("*Invalid Email Format")
    .required("*Please Enter Your Email"),
  channel: Yup.string().required("*Please Enter Your Channel"),
});

const NewYoutubeForm = () => {
  const [showAlert, setShowAlert] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
      setShowAlert(true);
    },
  });

  return (
    <Container className="my-3">
      <h1 className="my-3">Form 2</h1>
      <Col md={6} className="m-auto">
        {showAlert && (
          <Alert
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            Form submitted successfully!
          </Alert>
        )}
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              {...formik.getFieldProps("name")}
              isInvalid={formik.touched.name && formik.errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              {...formik.getFieldProps("email")}
              isInvalid={formik.touched.email && formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="channel">
            <Form.Label>Channel</Form.Label>
            <Form.Control
              type="text"
              name="channel"
              {...formik.getFieldProps("channel")}
              isInvalid={formik.touched.channel && formik.errors.channel}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.channel}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
  );
};

export default NewYoutubeForm;
