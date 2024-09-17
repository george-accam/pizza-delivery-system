import axios from "axios";
const baseurl = process.env.REACT_APP_SERVER_URL;

export const getAllPizzaDataAction = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZA_REQUEST" });

  try {
    const pizza = await axios.get(`${baseurl}/api/pizza/pizzadata`);
    dispatch({ type: "GET_PIZZA_SUCCESS", payload: pizza.data });
  } catch (error) {
    console.error(error); // Log error
    dispatch({ type: "GET_PIZZA_FAILED", payload: error });
  }
};

export const filterPizzaDataAction =
  (searchkey, category) => async (dispatch) => {
    dispatch({ type: "GET_PIZZA_REQUEST" });

    try {
      const pizza = await axios.get(`${baseurl}/api/pizza/pizzadata`);
      let filtered = pizza.data.filter((item) =>
        item.name.toLowerCase().includes(searchkey.toLowerCase())
      );

      if (category !== "all") {
        filtered = filtered.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );
      }

      dispatch({ type: "GET_PIZZA_SUCCESS", payload: filtered });
    } catch (error) {
      console.error(error); // Log error
      dispatch({ type: "GET_PIZZA_FAILED", payload: error });
    }
  };

export const addNewPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_NEW_PIZZA_REQUEST" });

  try {
    const response = await axios.post(`${baseurl}/api/pizza/addnew`, pizza);
    alert("Pizza added successfully");
    dispatch({ type: "ADD_NEW_PIZZA_SUCCESS" });
  } catch (error) {
    console.error(error); // Log error
    alert("Failed to add pizza");
    dispatch({ type: "ADD_NEW_PIZZA_FAILED", payload: error });
  }
};

export const deletePizzaAction = (item) => async (dispatch) => {
  dispatch({ type: "DELETE_PIZZA_REQUEST" });

  try {
    const response = await axios.post(`${baseurl}/api/pizza/deletepizza`, item);
    dispatch({ type: "DELETE_PIZZA_SUCCESS" });
  } catch (error) {
    console.error(error); // Log error
    alert("Failed to delete pizza");
    dispatch({ type: "DELETE_PIZZA_FAILED", payload: error });
  }
};
