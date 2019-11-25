import {LOGIN_TYPE} from "../action/types";

const initialState={
    loginData:{}
}

export default loginReducer = (state=initialState,{type,payload}) =>{
    switch (type) {
        case LOGIN_TYPE:
            return{
                ...state,
                loginData:payload
            }
        default:
            return state;
    }
};