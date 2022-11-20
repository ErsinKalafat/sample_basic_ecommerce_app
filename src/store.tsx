import { createStore, combineReducers } from "redux";
import { saveLoginUser } from "./reducers/loginReducer";

const reducers = combineReducers({ user: saveLoginUser })

export type RootState = ReturnType<typeof reducers>
const store = createStore(reducers);
export default store;
