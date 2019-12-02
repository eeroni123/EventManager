import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import eventsReducer from "../reducers/eventsReducer";
import authReducer from "../reducers/authReducer";

const store = createStore(
  combineReducers({
    events: eventsReducer,
    auth: authReducer
  }),
  applyMiddleware(thunk)
);

export default store;
