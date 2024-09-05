import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function OrderDes(props) {
  const { dp } = useSelector((state) => state.deliveryPartnerSingleReducer);
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-center"
        centered
        {...props}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>{props.order.isDelivered}</h4>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <h2 style={{ fontSize: "25px" }}>Items</h2>
                <hr />
                {props.order.orderItem.map((item) => {
                  return (
                    <div>
                      <p>
                        {item.name} [{item.varient}] * {item.quantity} ={" "}
                        {item.prices[0][item.varient]}
                      </p>
                    </div>
                  );
                })}
              </Col>
              <Col xs={6} md={4}>
                <h2 style={{ fontSize: "25px" }}>Address</h2>
                <hr />
                <p>Street : {props.order.shippingAddress.street}</p>
                <p>City : {props.order.shippingAddress.city}</p>
                <p>Country : {props.order.shippingAddress.country}</p>
                <p>Pincode : {props.order.shippingAddress.pincode}</p>
              </Col>
              <Col xs={6} md={4}>
                <h2 style={{ fontSize: "25px" }}>Order Info</h2>
                <hr />
                <p>Order Amount : {props.order.orderAmount}</p>
                <p>Date : {props.order.createdAt.substring(0, 10)}</p>
                <p>Transaction Id : {props.order.transactionId}</p>
                <p>Order Id : {props.order._id}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <h1>
            Delivery person Contact:{props.order.dp} {dp}
          </h1>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
