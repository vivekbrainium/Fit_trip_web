import { combineReducers } from 'redux';
import loginReducer from "./login_reducer"


const appReducer = combineReducers({
    loginReducer,
})

export default appReducer
