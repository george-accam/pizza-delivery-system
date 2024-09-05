import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allOrderAction } from "../../action/orderAction";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Orders from "../../components/Orders";

export default function OrderScreen() {
  AOS.init();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const order = useSelector((state) => state.allOrderReducers);
  const { loading, userorders } = order;
  useEffect(() => {
    dispatch(allOrderAction());
    if (localStorage.getItem("user") === null) navigate("/");
  }, [dispatch, navigate]);
  return (
    <div>
      <h3>My Orders</h3>
      {loading && (
        <img
          src="https://i0.wp.com/codemyui.com/wp-content/uploads/2019/01/Rotating-Pizza-Slice-Preloader.gif?w=880&ssl=1"
          alt="loading"
          style={{ width: "100%", height: "100%" }}
        />
      )}
      <div className="row justify-content-center">
        {userorders &&
          userorders.map((items) => {
            return <Orders order={items} />;
          })}
      </div>
    </div>
  );
}
