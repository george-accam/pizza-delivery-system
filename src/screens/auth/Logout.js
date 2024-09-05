import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogoutAction } from "../../action/userAction";

export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("deliveryPartner");
    dispatch(userLogoutAction());
    alert("Logged out successfully");
    navigate("/");
  }, [navigate, dispatch]);

  return <div>Logging out</div>;
}
