
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
};


export const incrementCartQuantity = (id) => {
    return{
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
  