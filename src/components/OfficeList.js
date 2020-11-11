import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
} from 'react-bootstrap';
import ContainerLayout from './ContainerLayout';

export default function OfficeList() {
  useEffect(() => {
    getOffices();
  }, []);

  const [offices, setOffices] = useState([]);

  const getOffices = () => {
    db.collection('offices').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setOffices(docs);
    });
  };

  return (
    <>
      <ContainerLayout>
        {offices.map((office) => {
          return (
            <Container fluid id={office.id}>
              <Row>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title className="text-center">
                        {office.name}
                      </Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        Ganancias: {office.earnings}
                      </ListGroupItem>
                      <ListGroupItem>
                        Empleados: {office.employees}
                      </ListGroupItem>
                      <ListGroupItem>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                      </ListGroupItem>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </Container>
          );
        })}
      </ContainerLayout>
    </>
  );
}
