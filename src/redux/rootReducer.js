import {combineReducers} from "redux";
import authReducer from "../components/auth/redux/authReducer";
import appReducer from "../components/app/redux/appReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
});