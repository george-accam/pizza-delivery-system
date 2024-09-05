import React, { useEffect, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../action/userAction";
import { useNavigate } from "react-router-dom";
import Error from "../../components/Error";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LoginScreen() {
  AOS.init();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userdata = useSelector((state) => state.userLoginReducer);
  const { loading, error, user } = userdata;
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  function login() {
    const userinfo = {
      email: email,
      password: password,
    };
    dispatch(userLoginAction(userinfo));
  }
  function redirect() {
    alert("Logged In Successfully!!");
    navigate("/");
  }
  return (
    <div className="row justify-content-center register">
      <div className="col-md-5" data-aos="fade-up">
        <div className="userlogin shadow-lg p-3 mb-5 bg-white rounded">
          {loading && (
            <img
              src="https://i0.wp.com/codemyui.com/wp-content/uploads/2019/01/Rotating-Pizza-Slice-Preloader.gif?w=880&ssl=1"
              alt="loading"
              style={{ width: "100px", height: "100px" }}
            />
          )}
          {error && (
            <Error
              heading="Oops,Wrong credentials"
              content="There is some error in the credentials. Kindly go through it and Login again.."
            />
          )}
          {user && redirect()}
          <h1 className="mb-3">
            <i>Login to place the order</i>
          </h1>
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="danger" onClick={login}>
            Login
          </Button>
          <h1>
            <Nav.Link href="/register" style={{ color: "black" }}>
              Register here
            </Nav.Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
