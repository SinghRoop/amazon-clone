<<<<<<< HEAD
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
=======

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

export const setUser = () => {
    return {
        type: "SET_USER",
    }
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
};


export const incrementCartQuantity = (id) => {
<<<<<<< HEAD
  return {
    type: "INCREMENT_CART_ITEM_QUANTITY",
    payload: id
  }
=======
    return{
        type: "INCREMENT_CART_ITEM_QUANTITY",
        payload: id
    }
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
};

export const decrementCartQuantity = (id) => {
  return {
<<<<<<< HEAD
    type: "DECREMENT_CART_ITEM_QUANTITY",
    payload: id
=======
      type: "DECREMENT_CART_ITEM_QUANTITY",
      payload: id
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
  }
};


export const setProducts = (products) => {
<<<<<<< HEAD
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
=======
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
  
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
