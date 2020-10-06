import { combineReducers } from "redux";
import HackerNewsSearchReducer from "./HackerNewsSearchReducer";

const RootReducer = combineReducers({
  HackerNewsSearch: HackerNewsSearchReducer,
});

export default RootReducer;
