import React from "react";
import Pizzas from "../../components/Pizzas";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPizzaDataAction } from "../../action/pizzaAction";
import { otherStuffsAction } from "../../action/otherStuffAction";
//import Success from "../components/Success";
import Filter from "../../components/Filter";
import CartIcon from "../../components/CartIcon";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const pizzadata = useSelector((state) => state.getAllPizzaDataReducers);
  const { pizzas, loading, error } = pizzadata;
  const otherdata = useSelector((state) => state.otherReducers);
  //const cartdata = useSelector((state) => state.addToCartReducers);
  //const { success } = cartdata;
  const { others } = otherdata;
  useEffect(() => {
    dispatch(getAllPizzaDataAction());
    dispatch(otherStuffsAction());
  }, [dispatch]);
  return (
    <div>
      <Filter />
      <div className="row justify-content-center">
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
        {pizzas &&
          pizzas.map((pizza) => (
            <div className="col-md-4" key={pizza._id}>
              <div>
                <Pizzas pizza={pizza} />
              </div>
            </div>
          ))}
        <hr className="heading-line" />
        {others &&
          others.map((item) => (
            <div className="col-md-4" key={item._id}>
              <div>
                <Pizzas pizza={item} />
              </div>
            </div>
          ))}
      </div>
      <CartIcon />
    </div>
  );
}
