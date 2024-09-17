import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizzas from "../../components/Pizzas";
import Filter from "../../components/Filter";
import CartIcon from "../../components/CartIcon";
import { getAllPizzaDataAction } from "../../action/pizzaAction";
import { otherStuffsAction } from "../../action/otherStuffAction";

export default function HomeScreen() {
  const dispatch = useDispatch();

  const pizzadata = useSelector((state) => state.getAllPizzaDataReducers);
  const { pizzas = [], loading, error } = pizzadata; // Default to empty array

  const otherdata = useSelector((state) => state.otherReducers);
  const { others = [] } = otherdata; // Default to empty array

  useEffect(() => {
    dispatch(getAllPizzaDataAction());
    dispatch(otherStuffsAction());
  }, [dispatch]);

  // Log the data to check its structure
  console.log("Pizzas:", pizzas);
  console.log("Others:", others);

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

        {Array.isArray(pizzas) && pizzas.length > 0
          ? pizzas.map((pizza) => (
              <div className="col-md-4" key={pizza._id}>
                <Pizzas pizza={pizza} />
              </div>
            ))
          : !loading && <div>No pizzas available</div>}

        <hr className="heading-line" />

        {Array.isArray(others) && others.length > 0
          ? others.map((item) => (
              <div className="col-md-4" key={item._id}>
                <Pizzas pizza={item} />
              </div>
            ))
          : !loading && <div>No other items available</div>}
      </div>

      <CartIcon />
    </div>
  );
}
