import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import {Col, Container, Card, Row} from 'react-bootstrap';
const UserProfile = () => {
  const [infoUsuario, setInfoUsuario] = useState({});

  useEffect(() => {
    const storedInfo = JSON.parse(localStorage.getItem('infoUsuario'));
    setInfoUsuario(storedInfo);

    console.log("testerino")
    console.log(infoUsuario.link_portfolio)
  }, []);

  return (
    <div>
      {Object.keys(infoUsuario).length > 0 && (
      <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={10} md={6}>
          <Card className="text-center">
            <Card.Img variant="top" src={infoUsuario.avatar} roundedCircle />
            <Card.Body>
              <Card.Title>User ID: {infoUsuario.id}</Card.Title>
              <Card.Text>User Name: {infoUsuario.name}</Card.Text>
              <Card.Text>User Email: {infoUsuario.email}</Card.Text>
              <Card.Text>Link de github: {infoUsuario.link_portfolio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      )}
    </div>
  );
};

export default UserProfile;