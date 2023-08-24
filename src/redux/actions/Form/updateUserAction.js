import { UPDATE_USER } from "../../constants";

export const updateUserData = (updatedData) => (dispatch, getState) => {
  const  {userDataContainer}  = getState();
  const updatedUserData = userDataContainer.map((item) =>
    item.id === updatedData.id ? updatedData : item
  );
  
  dispatch({
    type: UPDATE_USER,
    payload: updatedUserData,
  });
};
