import React, { useEffect } from "react";
import Pizzas from "../../components/Pizzas";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzaDataAction } from "../../action/pizzaAction";
import { otherStuffsAction } from "../../action/otherStuffAction";
import Filter from "../../components/Filter";
import CartIcon from "../../components/CartIcon";

export default function HomeScreen() {
  const dispatch = useDispatch();

  const pizzadata = useSelector((state) => state.getAllPizzaDataReducers);
  const { pizzas, loading: pizzaLoading, error: pizzaError } = pizzadata;

  const otherdata = useSelector((state) => state.otherReducers);
  const { others, loading: othersLoading, error: othersError } = otherdata;

  useEffect(() => {
    dispatch(getAllPizzaDataAction());
    dispatch(otherStuffsAction());
  }, [dispatch]);

  return (
    <div>
      <Filter />
      <div className="row justify-content-center">
        {/* Pizza Loading and Error Handling */}
        {pizzaLoading && (
          <img
            src="https://i0.wp.com/codemyui.com/wp-content/uploads/2019/01/Rotating-Pizza-Slice-Preloader.gif?w=880&ssl=1"
            alt="loading"
            style={{ width: "100%", height: "100%" }}
          />
        )}
        {pizzaError && (
          <img
            src="https://img.freepik.com/premium-vector/pizza-empty-state-error-404_288067-295.jpg"
            alt="error"
            style={{ width: "80%", height: "100%" }}
          />
        )}
        {Array.isArray(pizzas) &&
          pizzas.length > 0 &&
          pizzas.map((pizza) => (
            <div className="col-md-4" key={pizza._id}>
              <Pizzas pizza={pizza} />
            </div>
          ))}

        {Array.isArray(others) &&
          others.length > 0 &&
          others.map((item) => (
            <div className="col-md-4" key={item._id}>
              <Pizzas pizza={item} />
            </div>
          ))}

        <hr className="heading-line" />

        {/* Others Loading and Error Handling */}
        {othersLoading && <div>Loading other items...</div>}
        {othersError && <div>Error loading other items!</div>}
        {!othersError &&
          !othersLoading &&
          others?.length > 0 &&
          others.map((item) => (
            <div className="col-md-4" key={item._id}>
              <Pizzas pizza={item} />
            </div>
          ))}

        {/* If no pizzas or others */}
        {!pizzaLoading &&
          !othersLoading &&
          pizzas?.length === 0 &&
          others?.length === 0 && <div>No data available</div>}
      </div>

      <CartIcon />
    </div>
  );
}
