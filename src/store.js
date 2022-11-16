import { createStore } from "redux";
import rootRecuducers from "./reducers";

const store = createStore(
  rootRecuducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
