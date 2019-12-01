import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import eventsReducer from "../reducers/eventsReducer";

const store = createStore(
  combineReducers({
    events: eventsReducer
  }),
  applyMiddleware(thunk)
);

export default store;
