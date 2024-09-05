import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import HomeScreen from "./screens/user/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartScreen from "./screens/user/CartScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import OrderScreen from "./screens/user/OrderScreen";
import UserList from "./screens/admin/UserList";
import MenuList from "./screens/admin/MenuList";
import AddNewMenu from "./screens/admin/AddNewMenu";
import OrderList from "./screens/admin/OrderList";
import Logout from "./screens/auth/Logout";
import RegToLogin from "./screens/auth/RegToLogin";
import AddDeliveryPartner from "./screens/admin/AddDeliveryPartner";
import OrderPage from "./screens/delivery/OrderPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />

          <Route path="/cart" exact element={<CartScreen />} />

          <Route path="/register" exact element={<RegisterScreen />} />
          <Route path="/regtologin" exact element={<RegToLogin />} />
          <Route path="/login" exact element={<LoginScreen />} />
          <Route path="/logout" exact element={<Logout />} />

          <Route path="/order" exact element={<OrderScreen />} />

          <Route path="/userList" exact element={<UserList />} />
          <Route path="/menuList" exact element={<MenuList />} />
          <Route path="/addNewMenu" exact element={<AddNewMenu />} />
          <Route path="/orderList" exact element={<OrderList />} />
          <Route
            path="/deliverypartner"
            exact
            element={<AddDeliveryPartner />}
          />
          <Route path="/delivery/landingpage" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
