import { combineReducers } from "redux";
import crudReducer from "./crudReducer";

const rootRecuducer = combineReducers({ crudReducer });

export default rootRecuducer;
