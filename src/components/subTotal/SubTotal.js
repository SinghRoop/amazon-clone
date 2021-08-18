import React from 'react'
import './SubTotal.css'
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
// import { storage, database } from '../../firebase/firebase';
import firebase from 'firebase';



const SubTotal = (props) => {

    const cart = useSelector(state => state.cart)

    const handleCheckout = () => {
        // console.log('cart data', cart)

        var db = firebase.firestore();
        var cartItems = cart;

        db.collection("Chekout Cart Data").doc("Cart").set({
            cartItems
        }, { merge: true })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }

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
                <button onClick={handleCheckout}>Proceed to Checkout</button>
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


export default connect(mapStateToProps, null)(SubTotal);
