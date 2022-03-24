import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import SignupForm from '../components/SignupForm.jsx';

const Signup = () => {
  const authUser = useSelector((state) => state.authUser);
  if (authUser.status === 'login') return <Navigate to="/" />;

  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col xs="12" md="8" xxl="6">
          <Card className="shadow">
            <Card.Body className="p-5">
              <SignupForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
