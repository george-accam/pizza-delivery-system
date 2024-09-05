import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  orderUpdateAction,
  orderUpdateStatusAction,
} from "../action/orderAction";

export default function Assign({ order }) {
  const dispatch = useDispatch();
  const [dp, setDp] = useState(order.dp);
  const [status, setStatus] = useState(order.isDelivered);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the deliveryPartner"
        value={dp}
        onChange={(e) => setDp(e.target.value)}
      />
      <i
        className="fa fa-check m-2"
        style={{ color: "green" }}
        onClick={() => {
          console.log(order._id);
          dispatch(orderUpdateAction(order._id, dp));
        }}
      ></i>
      <input
        type="text"
        placeholder="Enter the status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <i
        className="fa fa-check m-2"
        style={{ color: "green" }}
        onClick={() => {
          dispatch(orderUpdateStatusAction(order._id, status));
        }}
      ></i>
    </div>
  );
}
