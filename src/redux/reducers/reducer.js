const initialState = {
  data: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "UPDATE_DATA":
      const updatedData = state.data.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return {
        ...state,
        data: updatedData,
      };
    case "DELETE_DATA":
      const filteredData = state.data.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        data: filteredData,
      };
    default:
      return state;
  }
};
export default reducer;
