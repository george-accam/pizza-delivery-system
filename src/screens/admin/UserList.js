import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allUserAction, deleteUserAction } from "../../action/userAction";

export default function UserList() {
  const userdatas = useSelector((state) => state.userLoginReducer);
  const alluserdata = useSelector((state) => state.allUserReducer);
  const { loading, error, userdata } = alluserdata;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = userdatas;
  useEffect(() => {
    if (user.isAdmin === false) navigate("/");
    else dispatch(allUserAction());
  }, [navigate, user.isAdmin, dispatch]);

  return (
    <div>
      <h1>User List</h1>
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
      <div className="row justify-content center m-5">
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "left" }}>
            {userdata &&
              userdata.map((person) => {
                return (
                  <tr>
                    <td>{person._id}</td>
                    <td>{person.username}</td>
                    <td>{person.email}</td>
                    <td>
                      <i
                        className="fa fa-trash m-2"
                        onClick={() => {
                          dispatch(deleteUserAction(person));
                        }}
                      ></i>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
