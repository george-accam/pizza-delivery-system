import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CartIcon() {
  const navigate = useNavigate();
  const cartdata = useSelector((state) => state.addToCartReducers);
  const navigateHandler = () => {
    navigate("/cart");
  };
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div style={{ position: "fixed", right: "20px", bottom: "20px" }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          borderRadius: "50%",
          padding: "20px",
          backgroundColor: isHover ? "#bb2d3b" : "#dc3545",
          cursor: "pointer",
        }}
        className="justify-content-center shadow-lg "
        onClick={navigateHandler}
      >
        <p style={{ margin: "0px", color: "white" }}>
          {cartdata.cartItem.length}
        </p>
        <i
          class="fa fa-shopping-cart"
          style={{ color: "white", fontSize: "36px" }}
        ></i>
      </div>
    </div>
  );
}
