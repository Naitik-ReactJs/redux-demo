import { DELETE_USER } from "../../constants";
export const deleteUserData = (id) => ({
  type: DELETE_USER,
  payload: id,
});
