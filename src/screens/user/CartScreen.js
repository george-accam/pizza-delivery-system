import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAction,
  deleteFromCart,
  emptyTheCart,
} from "../../action/cartAction";
import Checkout from "../../components/Checkout";
import Success from "../../components/Success";
import Error from "../../components/Error";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export default function CartScreen() {
  AOS.init();
  const cartstate = useSelector((state) => state.addToCartReducers);
  const { cartItem, empty } = cartstate;
  const { user } = useSelector((state) => state.userLoginReducer);
  const dispatch = useDispatch();
  var total = cartItem.reduce((x, item) => x + item.cartItemPrice, 0);
  const payment = useSelector((state) => state.orderReducers);
  const { success, error, loading } = payment;
  const navigate = useNavigate();
  useEffect(() => {
    const admin = user !== null ? user.isAdmin : false;
    if (admin) navigate("/");
  }, [user, navigate]);
  function emptycart() {
    dispatch(emptyTheCart());
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6" data-aos="fade-down">
          <h2 style={{ fontSize: "35px" }}>My Cart</h2>
          {empty && (
            <Success
              heading="Removed successfully!"
              content="The pizza or snacks is/are removed successfully in the cart"
            />
          )}
          {success && (
            <Success
              heading="Payment successfull"
              content="The order is placed successfully!! Check the status of the order in the order page"
            />
          )}
          {error && (
            <Error
              heading="Oops payment failed"
              content="Payment failed due to some problem. Please Make the next try after some time"
            />
          )}
          {loading && (
            <img
              src="https://i0.wp.com/codemyui.com/wp-content/uploads/2019/01/Rotating-Pizza-Slice-Preloader.gif?w=880&ssl=1"
              alt="loading"
              style={{ width: "100px", height: "100px" }}
            />
          )}
          <br />
          <Button variant="danger" style={{ margin: "10px" }} href="/">
            Back to Menu
          </Button>
          {cartItem.length > 0 ? (
            cartItem.map((items) => (
              <div className="flex-container m-1">
                <div className="cart-left m-1 w-100">
                  <h1>
                    {items.name} [{items.varient}]
                  </h1>
                  <h1>
                    Price : {items.quantity} * {items.prices[0][items.varient]}{" "}
                    = {items.cartItemPrice}{" "}
                  </h1>
                  <h1 style={{ display: "inline" }}>Quantity : </h1>
                  <i
                    className="fa fa-minus"
                    aria-hidden="true"
                    onClick={() => {
                      items.quantity = items.quantity - 1;
                      if (items.quantity === 0) {
                        dispatch(deleteFromCart(items));
                      } else {
                        dispatch(
                          addToCartAction(items, items.quantity, items.varient)
                        );
                      }
                    }}
                  ></i>
                  <b>{items.quantity}</b>
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => {
                      items.quantity = items.quantity + 1;
                      if (items.quantity > 10) {
                        alert("Items can't be added");
                        items.quantity = items.quantity - 1;
                      } else {
                        dispatch(
                          addToCartAction(items, items.quantity, items.varient)
                        );
                      }
                    }}
                  ></i>
                  <hr />
                </div>
                <div className="m-1 w-100">
                  <img
                    src={items.image}
                    style={{ height: "80px", width: "80px" }}
                    alt="pizza"
                  />
                </div>
                <div className="m-1 w-50">
                  <i
                    className="fa fa-trash"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteFromCart(items));
                    }}
                  ></i>
                </div>
              </div>
            ))
          ) : (
            <>
              <h1>Cart is empty &#128531;</h1>
            </>
          )}
        </div>
        <div className="col-md-4 m-5" data-aos="fade-down">
          <h2 style={{ fontSize: "35px" }}>Grand Total : {total} /-</h2>
          {total !== 0 && (
            <div className="flex-container m-4">
              <div className="w-100">
                <Button variant="danger" onClick={emptycart}>
                  Empty the cart
                </Button>
              </div>
              <div className="w-100">
                {localStorage.getItem("user") && !success ? (
                  <Checkout amount={total} />
                ) : (
                  <Button variant="danger" disabled>
                    Pay now
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
