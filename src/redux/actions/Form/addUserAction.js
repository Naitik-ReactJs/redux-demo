import { ADD_USER } from "../../constants";
export const addUserData = (newData) => ({
  type: ADD_USER,
  payload: newData,
});
