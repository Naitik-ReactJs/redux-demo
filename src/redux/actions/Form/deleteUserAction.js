import { DELETE_USER } from "../../constants";

export const deleteUserData = (id) => (dispatch, getState) => {
  const { userDataContainer } = getState();
  const filteredData = userDataContainer.filter((item) => item.id !== id);

  dispatch({
    type: DELETE_USER,
    payload: filteredData,
  });
};
