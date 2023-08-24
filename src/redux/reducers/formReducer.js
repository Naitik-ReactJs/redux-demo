
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
        return {
          ...state,
          userDataContainer: action.payload,
        };
      
    case DELETE_USER:
 
      return {
        ...state,
        userDataContainer: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
