import {combineReducers} from "redux";
import fetchTech from "../reducers/fetch_tech";

const reducers= combineReducers({
    FetchTech: fetchTech,
    
});

export default reducers;