import { SIGN_UP } from "../types/actionTypes";


const getLocalStorage = () => {
    let data = localStorage.getItem("userdata");
    if (data) {
        return JSON.parse(localStorage.getItem("userdata"));
    } else {
        return [];
    }
};

const initialState = {
    signUpData:
        getLocalStorage({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
}

export const SignupReducer = (state = initialState, action) => {

    if (action.type === SIGN_UP) {
        return { ...state,  signUpData: action.payload };
    }
    return state;
}

