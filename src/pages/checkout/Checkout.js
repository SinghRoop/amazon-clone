import React from 'react'
import adImg from '../../assests/images/ad.jpg'
import './Checkout.css'
import CheckoutBasket from '../../components/checkoutbasket/CheckoutBasket'
import SubTotal from '../../components/subTotal/SubTotal'
import { useSelector } from 'react-redux';
<<<<<<< HEAD
import { useEffect } from 'react'
=======
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1


const Checkout = () => {

    const cart = useSelector(state => state.cart)

<<<<<<< HEAD
    // Set data to LocalStorage when anything changed in cart
    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(cart));
    }, [cart]);

=======
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
    return (
        <>
            <div className="checkout">
                <div className="checkout__left">
                    <div className="checkout__ad">
                        <img src={adImg} alt="imgs" />

                    </div>
                    {
                        cart?.length === 0 ? (
                            <div>
                                <h2>Your Shopping Basket is empty. <br /> </h2>
                                <h5>There is no items in your basket.</h5>
                            </div>
                        ) : (
                            <div>
<<<<<<< HEAD
                                <h2 className="checkout__basket">Your Shopping Basket has {cart?.length} items</h2>
=======
                                <h2 className="checkout__basket">Your Shopping Basket has {cart.length} items</h2>
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
                                {
                                    cart.map((item, index) => {
                                        return (
                                            <CheckoutBasket key={index}
                                                id={item.id}
                                                title={item.title}
                                                image={item.image}
                                                price={item.price}
                                                rating={item.rating}
                                                quantity={item.quantity}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
                {
<<<<<<< HEAD
                    cart?.length > 0 && (
=======
                    cart.length > 0 && (
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
                        <div className="checkout__right">
                            <SubTotal />
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Checkout;
