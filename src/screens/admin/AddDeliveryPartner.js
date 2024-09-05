import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deliveryPartnerRegisterAction } from "../../action/deliveryPartnerAction";

export default function AddDeliveryPartner() {
  const [deliveryName, setDeliveryName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  function submitHandler() {
    if (
      deliveryName.length >= 3 &&
      !isNaN(password) &&
      !isNaN(phoneNumber) &&
      phoneNumber.length === 10
    ) {
      const deliveryPartner = {
        username: deliveryName,
        phoneNumber: phoneNumber,
        password: password,
      };
      console.log(deliveryPartner);
      dispatch(deliveryPartnerRegisterAction(deliveryPartner));
    } else {
      alert("Not corrected details");
    }
  }
  return (
    <div>
      <div className="row justify-content-center">
        <h1>Add Delivery Partner</h1>
        <div className="col-md-5">
          <div className="shadow-lg p-4 m-3 bg-white rounded">
            <input
              type="text"
              placeholder="Delivery Person name"
              className="form-control mb-3"
              value={deliveryName}
              onChange={(e) => setDeliveryName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="form-control mb-3"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button variant="danger" onClick={submitHandler}>
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
