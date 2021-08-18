import { SIGN_UP } from "../types/actionTypes";

export const addProductToCart = (product) => {
  return {
    type: "ADD_TO_BASKET",
    payload: product
  }
};

export const removeProductToCart = (productId) => {
  return {
    type: "REMOVE_FROM_BASKET",
    payload: productId
  }
};

export const setUser = (authUser) => {

  // to check what is coming from dispatch console here and check the data
  // console.log('Auth user is', authUser)
  return {
    type: "SET_USER",
    payload: authUser
  }
};


export const incrementCartQuantity = (id) => {
  return {
    type: "INCREMENT_CART_ITEM_QUANTITY",
    payload: id
  }
};

export const decrementCartQuantity = (id) => {
  return {
    type: "DECREMENT_CART_ITEM_QUANTITY",
    payload: id
  }
};


export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export const selectedProducts = (singleProduct) => {

  // console.log('Single Product', id);
  return {
    type: "SELECTED_PRODUCTS",
    payload: singleProduct,
  };
};

export const removeSelectedProducts = () => {
  return {
    type: "REMOVE_SELECTED_PRODUCTS",
  };
};

export const filterProducts = (data) => {
  // console.log("filtering", data)
  return {
    type: "UPDATE_FILTERS",
    payload: data
  };
};

export const filterSearchProducts = () => {
  return {
    type: "FILTER_PRODUCTS",
  };
};

export const signUpData = (formData) => {
  // console.log('signup data are ', data)
  return {
      type: SIGN_UP,
      payload: formData
  }
}