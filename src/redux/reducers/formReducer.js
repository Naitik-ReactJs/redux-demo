import { ADD_USER } from "../constants";
import { DELETE_USER } from "../constants";
import { UPDATE_USER } from "../constants";
const initialState = {
  dataContainer: [{ id: 1692273892964, name: "Demo name", email: "n@tg.co" }],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        dataContainer: [...state.dataContainer, action.payload],
      };
    case UPDATE_USER:
      const updatedData = state.dataContainer.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return {
        ...state,
        dataContainer: updatedData,
      };
    case DELETE_USER:
      const filteredData = state.dataContainer.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        dataContainer: filteredData,
      };
    default:
      return state;
  }
};
export default reducer;
