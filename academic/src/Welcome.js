import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container>
      <Row>
        <Col sm={4}>          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi praesentium quisquam adipisci possimus non eius quo, repellendus ab rerum aspernatur ipsa illo. Eos fugiat hic labore dolores quaerat expedita!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi praesentium quisquam adipisci possimus non eius quo, repellendus ab rerum aspernatur ipsa illo. Eos fugiat hic labore dolores quaerat expedita!</p>
        </Col>
        <Col sm={4}>
          <img src="https://www.shutterstock.com/image-illustration/illustration-boy-writing-on-white-260nw-127560335.jpg" />
          
        </Col>
        <Col sm={4}>
         <div className="quick-access">Quick Access</div>
         <div className="check">Check Student Life</div>
         <div className="admission">Apply for Admission</div>
         <div className="job">Apply for Job</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome