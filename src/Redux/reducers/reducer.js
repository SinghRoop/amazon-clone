import { SIGN_UP } from "../types/actionTypes";
import firebase from "firebase";
import { auth } from "../../firebase/firebase";


// Get data from LocalStorage
const getLocalStorage = () => {
    let cart = localStorage.getItem("basket");
    if (cart) {
        return JSON.parse(localStorage.getItem("basket"));
    } else {
        return [];
    }
};

export const initialState = {
    mainApi: [],
    user: null,
    cart: getLocalStorage(),
    singleProduct: [],
    filtered_products: [],
    filters: {
        text: ""
    },
    signUpData: null
};

const reducer = (state = initialState, action, payload) => {
    console.log(action);
    // console.log(state)

    switch (action.type) {
        case "ADD_TO_BASKET":
            // Logic for adding item to basketarea

            const updatedCart = [...state.cart];
            const updatedItemIndex = updatedCart.findIndex(
                (item) => item.id === action.payload.id
            );

            if (updatedItemIndex < 0) {
                updatedCart.push({ ...action.payload, quantity: 1 });
            } else {
                const updatedItem = { ...updatedCart[updatedItemIndex] };
                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return { ...state, cart: updatedCart };

        case "REMOVE_FROM_BASKET":
            const updatedBasket = [...state.cart];

            const updatedItem = updatedBasket.findIndex(
                (item) => item.id === action.payload
            );
            updatedBasket.splice(updatedItem, 1);

            return { ...state, cart: updatedBasket };

        case "INCREMENT_CART_ITEM_QUANTITY":
            const increCart = [...state.cart];
            const updatedIndex = increCart.findIndex(
                (item) => item.id === action.payload
            );

            const incrementedItem = {
                ...increCart[updatedIndex],
            };

            incrementedItem.quantity++;

            increCart[updatedIndex] = incrementedItem;

            return { ...state, cart: increCart };

        case "DECREMENT_CART_ITEM_QUANTITY":
            const decreCart = [...state.cart];
            const updatedItemIndexs = decreCart.findIndex(
                (item) => item.id === action.payload
            );

            const decrementedItem = {
                ...decreCart[updatedItemIndexs],
            };

            decrementedItem.quantity--;

            decreCart[updatedItemIndexs] = decrementedItem;

            return { ...state, cart: decreCart };

        case "SET_USER":
            return { ...state, user: action.payload };

        case "SET_PRODUCTS":
            return { ...state, mainApi: action.payload };

        case "SELECTED_PRODUCTS":
            return { ...state, singleProduct: action.payload };

        case "REMOVE_SELECTED_PRODUCTS":
            return { ...state, singleProduct: {} };

        case "UPDATE_FILTERS":
            const { name, value } = action.payload
            return { ...state, filters: { ...state.filters, [name]: value } }

        case "FILTER_PRODUCTS":

            const { mainApi } = state;
            const { text } = state.filters;
            console.log('Text is ', text)
            let tempProducts = [...mainApi];
            console.log('Temp products are ', tempProducts)

            if (text) {
                tempProducts = tempProducts.filter((product) => {
                    return product.title.toLowerCase().startsWith(text);
                });
            }

            return { ...state, filtered_products: tempProducts }

        case SIGN_UP:
            const { firstName, lastName, email, password } = action.payload
            auth.createUserWithEmailAndPassword(email, password)
                .then(() => {
                    const data = firebase.database().ref("users")
                    const user = {
                        firstName,
                        lastName,
                        email,
                        password,
                    }
                    data.push(user);
                    localStorage.setItem("userdata", JSON.stringify(action.payload));
                })
            return { ...state, signUpData: action.payload };

        default:
            return state;
    }
};

export default reducer;
