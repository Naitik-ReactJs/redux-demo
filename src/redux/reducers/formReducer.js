import { ADD_USER } from "../constants";
import { DELETE_USER } from "../constants";
import { UPDATE_USER } from "../constants";
const initialState = {
  userDataContainer: [{ id: 1692273892964, name: "Demo name", email: "n@tg.co" , age: "23", password: "Naitik@Bhavsar17"}],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userDataContainer: [...state.userDataContainer, action.payload],
      };
    case UPDATE_USER:
      const updatedData = state.userDataContainer.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return {
        ...state,
        userDataContainer: updatedData,
      };
    case DELETE_USER:
      const filteredData = state.userDataContainer.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        userDataContainer: filteredData,
      };
    default:
      return state;
  }
};
export default reducer;
