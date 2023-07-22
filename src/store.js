import { createStore, combineReducers, applyMiddleware } from "redux";
import thank from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./redux/reducers/userReducer";

const rootReducer = combineReducers({
  userList: userReducer,
});

const initialState = {};
const middleware = [thank];



const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
