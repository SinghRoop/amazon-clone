/* eslint-disable no-empty-pattern */
import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './CheckoutBasket.css'
import { connect } from 'react-redux';
import { removeProductToCart } from '../../Redux/actions/actions';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';
import { incrementCartQuantity, decrementCartQuantity, addProductToCart } from '../../Redux/actions/actions';

const CheckoutBasket = ({ id, rating, price, image, title, dispatch, quantity }) => {

    const [itemQuantity, setItemQuantity] = useState(quantity)

    const removeFromBasket = () => {
        //remove item from baskets
        dispatch(removeProductToCart(id));
    }

    const handleQuantityChange = (e) => {
        const value = e.target.value;
        // console.log(value)
        if (value > 0 && value <= 10) {
            setItemQuantity(value);
            dispatch(addProductToCart(id));
        }
    };

    const incrementOrDecrement = (e, type) => {
        const value = itemQuantity;
        // console.log(type, value);

        if (type === 'inc' && value < 10) {
            setItemQuantity(itemQuantity + 1);
            dispatch(incrementCartQuantity(id));
        }


        if (type === 'desc' && value > 1) {
            setItemQuantity(itemQuantity - 1);
            dispatch(decrementCartQuantity(id));
        }

    };

    return (
        <>
            <div className="checkoutProduct">
                <img src={image} alt="pics" className="checkoutProduct_image" />

                <div className="checkoutProduct_info">
                    <p className="checkoutProduct_title">{title}</p>
                    <p className="checkoutProduct_price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>

                    <div className="checkoutProduct_rating">
                        {
                            Array(rating).fill().map((_, index) => (
                                <p key={index}> <StarIcon className="rating__icon" /></p>
                            ))
                        }
                    </div>

                    <div className="checkoutProduct_quantity">
                        <input
                            onClick={(e) => { incrementOrDecrement(e, 'inc') }}
                            type="button" value="+" className="plus" />
                        <input
                            onChange={handleQuantityChange}
                            type="number" step="1" max="10" min="1" value={itemQuantity} title="Qty"
                            className="qty"
                            size="4" />
                        <input
                            onClick={(e) => { incrementOrDecrement(e, 'desc') }}
                            type="button" value="-" className="minus" />

                        <DeleteIcon className="checkoutProduct__button" onClick={removeFromBasket} />

                    </div>
                    {/* <button className="checkoutProduct__button" onClick={removeFromBasket}>Remove from Basket</button> */}
                </div>
            </div>
        </>
    )
}

export default connect()(CheckoutBasket);
