import { combineReducers } from "redux";
import {reducer} from "./reducer";
import { SignupReducer } from "./SignupReducer";

const rootReducer = combineReducers({
    reducer, 
    SignupReducer
 })
 
 export default rootReducer;