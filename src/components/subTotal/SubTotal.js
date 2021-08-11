import React from 'react'
import './SubTotal.css'
import {useSelector } from 'react-redux';
import {connect} from 'react-redux';



const SubTotal = (props) => {

    const cart = useSelector(state => state.cart)
    return (
        <>
            <div className="subtotal">

                <p className="para">
                    Subtotal of ({cart?.length} items) :<strong> $ {props.totalPrice}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" />
                    This order contains a gift.
                </small>
                <button>Proceed to Checkout</button>
            </div>
        </>
    )
}

const mapStateToProps = state => {

    return {
        cartItems: state.cart,
        cartItemCount: state.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
}


export default connect(mapStateToProps, null) (SubTotal);
