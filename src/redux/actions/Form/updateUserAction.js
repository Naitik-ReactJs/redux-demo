import { UPDATE_USER } from "../../constants";
export const updateUserData = (updatedData) => ({
  type: UPDATE_USER,
  payload: updatedData,
});
