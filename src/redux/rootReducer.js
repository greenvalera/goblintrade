import {combineReducers} from "redux";
import appReducer from "../components/app/redux/appReducer";

export const rootReducer = combineReducers({
    app: appReducer,
});