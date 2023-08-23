import {
  legacy_createStore as createStore,
  // applyMiddleware,
  // compose,
} from "redux";
import reducer from "./reducers/formReducer";
// import thunk from "redux-thunk";
// const enhancers = [
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk),
// ];
const store = createStore(
  reducer,
  // compose(...enhancers)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
