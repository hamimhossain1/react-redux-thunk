import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer } from "./Redux/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  reducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
