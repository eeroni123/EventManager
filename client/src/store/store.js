import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import eventsReducer from "../reducers/eventsReducer";
import authReducer from "../reducers/authReducer";
import locationReducer from "../reducers/locationReducer";

const store = createStore(
  combineReducers({
    events: eventsReducer,
    auth: authReducer,
    locations: locationReducer
  }),
  applyMiddleware(thunk)
);

export default store;
