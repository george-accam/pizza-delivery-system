import React from "react";
import { Button } from "react-bootstrap";

export default function RegToLogin() {
  return (
    <div className="row justify-content-center">
      <h1>Hey Nice to have you</h1>
      <p>Registered successfully!! Go to Login page to place orders.</p>
      <div>
        <Button variant="danger" href="/login">
          Login
        </Button>
      </div>
    </div>
  );
}
