import React from 'react'
import './SubTotal.css'
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
// import { storage, database } from '../../firebase/firebase';
import firebase from 'firebase';
=======
import {useSelector } from 'react-redux';
import {connect} from 'react-redux';
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1



const SubTotal = (props) => {

    const cart = useSelector(state => state.cart)
<<<<<<< HEAD

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

=======
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
    return (
        <>
            <div className="subtotal">

                <p className="para">
<<<<<<< HEAD
                    Subtotal of ({cart?.length} items) :<strong> $ {props.totalPrice}</strong>
=======
                    {/* Subtotal of ({basket.length} items) :<strong> $ {getBasketTotal(basket)}</strong> */}
                    Subtotal of ({cart.length} items) :<strong> $ {props.totalPrice}</strong>
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" />
                    This order contains a gift.
                </small>
<<<<<<< HEAD
                <button onClick={handleCheckout}>Proceed to Checkout</button>
=======
                <button>Proceed to Checkout</button>
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
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


<<<<<<< HEAD
export default connect(mapStateToProps, null)(SubTotal);
=======
export default connect(mapStateToProps, null) (SubTotal);
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
