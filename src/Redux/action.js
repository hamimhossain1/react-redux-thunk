import axios from "axios";
import { TO_REQUEST, TO_SUCCESS, TO_FAILURE } from "./actionType";

export const getTodoData = () => async (dispatch) => {
  dispatch({ type: TO_REQUEST });
  try {
    let res = await axios.get("http://localhost:8080/todos");
  } catch (err) {
    dispatch({ type: TO_FAILURE });
  }
};
