import React from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'

export default function Pizzades(props) {
  return (
    <Modal
    size="lg"
    aria-labelledby="contained-modal-title-center"
    centered  {...props}  
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>{props.pizza.name}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <img src={props.pizza.image} className="img-fluid" style={{heigth:'350px', width:'400px'}} alt='pizzades'/>
            </Col>
            <Col xs={6} md={4}>
                <h3>Description :</h3>
                <p>{props.pizza.description}</p>
                <p style={{display: 'inline'}}>Category: </p>
                {props.pizza.category==='veg' && <i className="fa-solid fa-leaf"></i>}
                {props.pizza.category==='nonveg'&&<i className='fas fa-drumstick-bite'></i>}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
