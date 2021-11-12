import axios from "axios";
import GET_USER_LIST from "./main-page.action";


const SERV_DATA = "https://reqres.in/api/users?page=1";

export const loadUserList = () => async dispatch => {
  try {
    const response = await axios.get(SERV_DATA);
    dispatch({ type: GET_USER_LIST, payload: response.data});
  } catch (err) {
    console.log(err);
  }
};

