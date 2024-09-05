import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
//import { userLogoutAction } from "../action/userAction";
//import { useNavigate } from "react-router-dom";
function Header() {
  const cartstate = useSelector((state) => state.addToCartReducers);
  const userdata = useSelector((state) => state.userLoginReducer);
  const deliveryPartnerData = useSelector(
    (state) => state.deliveryPartnerLoginReducers
  );
  const { user } = userdata;
  const { deliveryPartner } = deliveryPartnerData;
  //const dispatch = useDispatch();
  //const navigate = useNavigate();
  /*function logout() {
    localStorage.removeItem("user");
    dispatch(userLogoutAction());
    alert("Logout successfully!");
    //navigate("/");
  }*/
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <Container>
        <Navbar.Brand href="/">
          <i>PizzaTeam</i>
        </Navbar.Brand>
        <Navbar.Text>
          <i>For pizza lovers</i>
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {deliveryPartner && (
              <>
                <Nav.Link href="/delivery/landingpage">OrderPage</Nav.Link>
                <Nav.Link href="/logout">Logout</Nav.Link>
              </>
            )}
            {user && (
              <NavDropdown title={user.username} id="basic-nav-dropdown">
                <NavDropdown.Item href="/order">My Orders</NavDropdown.Item>
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            )}
            {!user && !deliveryPartner && (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/cart">
                  Cart <span class="cart">{cartstate.cartItem.length}</span>
                </Nav.Link>
              </>
            )}
            {user && user.isAdmin && (
              <>
                <Nav.Link href="/userList">User List</Nav.Link>
                <Nav.Link href="/menuList">Menu List</Nav.Link>
                <Nav.Link href="/addNewMenu">Add new Menu</Nav.Link>
                <Nav.Link href="/orderList">Order List</Nav.Link>
                <Nav.Link href="/deliverypartner">Delivery Partners</Nav.Link>
              </>
            )}
            {user && user.isAdmin === false && (
              <Nav.Link href="/cart">
                Cart <span class="cart">{cartstate.cartItem.length}</span>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
