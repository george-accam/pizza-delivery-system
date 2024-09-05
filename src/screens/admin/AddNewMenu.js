import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOtherStuffAction } from "../../action/otherStuffAction";
import { addNewPizza } from "../../action/pizzaAction";

export default function AddNewMenu() {
  const [type, setType] = useState("pizza");
  const [name, setName] = useState("");
  const [sprice, setSprice] = useState("");
  const [lprice, setLprice] = useState("");
  const [mprice, setMprice] = useState("");
  const [des, setDes] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const userdata = useSelector((state) => state.userLoginReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = userdata;
  function add() {
    const item = {
      name: name,
      small: sprice,
      medium: mprice,
      large: lprice,
      description: des,
      imageurl: url,
      category: category,
    };
    console.log(item);
    console.log(type);
    if (type === "pizza") dispatch(addNewPizza(item));
    else dispatch(addOtherStuffAction(item));
  }
  useEffect(() => {
    if (user.isAdmin === false) navigate("/");
  }, [navigate, user.isAdmin]);
  return (
    <div className="row justify-content-center">
      <h1>Add new Menu</h1>
      <div className="col-md-5">
        <div className="shadow-lg p-4 m-3 bg-white rounded">
          <select
            className="form-select w-100 mb-3"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="pizza">Pizza</option>
            <option value="others">Others</option>
          </select>
          <input
            type="text"
            placeholder="Name"
            className="form-control mb-3"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="small varient price"
            className="form-control mb-3"
            required
            value={sprice}
            onChange={(e) => setSprice(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="medium varient price"
            className="form-control mb-3"
            required
            value={mprice}
            onChange={(e) => setMprice(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="large varient price"
            className="form-control mb-3"
            required
            value={lprice}
            onChange={(e) => setLprice(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Description"
            className="form-control mb-3"
            required
            value={des}
            onChange={(e) => setDes(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="image url"
            className="form-control mb-3"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Category"
            className="form-control mb-3"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></input>
          <Button variant="danger" onClick={add}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
