import { LOGIN_TYPE } from "../action/types";

const initialState = {
    loginData: {},
    allData: {}
}

export default loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_TYPE:
            return {
                ...state,
                loginData: payload
            }

        case "ALL_DATA":
            return {
                ...state,
                allData: payload.slice(1,20)
            }
        default:
            return state;
    }
};