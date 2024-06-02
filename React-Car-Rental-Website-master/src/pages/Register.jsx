// src/pages/Register.jsx
import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const Register = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg="4" md="6" sm="8" className="mx-auto">
          <h2 className="text-center">Registruj se</h2>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Enter your email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Enter your password" />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password" />
            </FormGroup>
            <Button color="primary" block>Register</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
