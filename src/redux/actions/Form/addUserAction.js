import { ADD_USER } from "../../constants";
export const addUserData = (newUSerData) => ({
  type: ADD_USER,
  payload: newUSerData,
});
