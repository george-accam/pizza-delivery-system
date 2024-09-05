import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allAdminOrdersAction } from "../../action/orderAction";
import Assign from "../../components/Assign";

export default function OrderList() {
  const userdata = useSelector((state) => state.userLoginReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderdata = useSelector((state) => state.allAdminOrderReducers);
  const { loading, error, orders } = orderdata;
  const { user } = userdata;
  useEffect(() => {
    if (user.isAdmin === false) navigate("/");
    else {
      dispatch(allAdminOrdersAction());
    }
  }, [navigate, user.isAdmin, dispatch]);
  return (
    <div>
      <h1>Order List</h1>
      {loading && (
        <img
          src="https://i0.wp.com/codemyui.com/wp-content/uploads/2019/01/Rotating-Pizza-Slice-Preloader.gif?w=880&ssl=1"
          alt="loading"
          style={{ width: "100%", height: "100%" }}
        />
      )}
      {error && (
        <img
          src="https://img.freepik.com/premium-vector/pizza-empty-state-error-404_288067-295.jpg"
          alt="error"
          style={{ width: "80%", height: "100%" }}
        />
      )}
      <div className="row justify-content center m-5">
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Email</th>
              <th>User Id</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "left" }}>
            {orders &&
              orders.map((order) => {
                return (
                  <tr>
                    <td>{order._id}</td>
                    <td>{order.email}</td>
                    <td>{order.userid}</td>
                    <td>{order.orderAmount}</td>
                    <td>{order.createdAt}</td>
                    <td>
                      {order.isDelivered !== "Delivered" && (
                        <p style={{ color: "red" }}>
                          {order.isDelivered}
                          <Assign order={order} />
                        </p>
                      )}
                      {order.isDelivered === "Delivered" && (
                        <p style={{ color: "green" }}>Delivered</p>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
