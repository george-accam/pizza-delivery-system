import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteOtherStuffAction,
  otherStuffsAction,
} from "../../action/otherStuffAction";
import {
  deletePizzaAction,
  getAllPizzaDataAction,
} from "../../action/pizzaAction";

export default function MenuList() {
  const userdata = useSelector((state) => state.userLoginReducer);
  const pizza = useSelector((state) => state.getAllPizzaDataReducers);
  const other = useSelector((state) => state.otherReducers);
  const { loading, pizzas, error } = pizza;
  const { oloading, others, oerror } = other;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.deletePizzaReducers);
  const { user } = userdata;
  useEffect(() => {
    if (user.isAdmin === false) navigate("/");
    dispatch(getAllPizzaDataAction());
    dispatch(otherStuffsAction());
  }, [navigate, user.isAdmin, navigate]);
  return (
    <div>
      <h1>Menu List</h1>
      <hr />
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
      <h1>Pizza List</h1>
      <div className="row justify-content center m-5">
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "left" }}>
            {pizzas &&
              pizzas.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>
                      Small : {item.prices[0]["small"]}
                      <br />
                      Medium : {item.prices[0]["medium"]}
                      <br />
                      Large : {item.prices[0]["large"]}
                    </td>
                    <td>{item.category}</td>
                    <td>
                      <i
                        className="fa fa-trash m-3"
                        onClick={() => {
                          dispatch(deletePizzaAction(item));
                          alert(
                            "Deleted successfully! Please refresh the page"
                          );
                        }}
                      ></i>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <hr />
        <h1>Others Stuff</h1>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "left" }}>
            {others &&
              others.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>
                      Small : {item.prices[0]["small"]}
                      <br />
                      Medium : {item.prices[0]["medium"]}
                      <br />
                      Large : {item.prices[0]["large"]}
                    </td>
                    <td>{item.category}</td>
                    <td>
                      <i
                        className="fa fa-trash m-3"
                        onClick={() => {
                          dispatch(deleteOtherStuffAction(item));
                        }}
                      ></i>
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
