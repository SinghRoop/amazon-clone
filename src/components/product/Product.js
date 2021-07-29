/* eslint-disable no-empty-pattern */
import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './Product.css'
import { useDispatch} from 'react-redux';
import { addProductToCart } from '../../Redux/actions/actions';
import { Link } from 'react-router-dom';

const Product = ({ rating, quantity, id, title, image, price }) => {

    // const mainApi = useSelector(state => state.mainApi)

    const dispatch = useDispatch()
    
    const addToBasket = () => {
        //add item to basket
        dispatch(addProductToCart({
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
            quantity: quantity,
        }));
    }
    // console.log("All products are", mainApi)
    return (
        <>

            <div className="product">

                <div className="product__info">
                    <Link to={`/${id}`} className="product__link" >
                        <p className="product__title">{title}</p>
                    </Link>
                    <p className="product__price"><small>$</small> <strong>{price}</strong></p>
                    <div className="product__rating">
                        {
                            Array(rating).fill().map((_, id) => (
                                <p key={id} className="rating__icon" > <StarIcon /></p>
                            ))
                        }
                    </div>
                </div>
                <img src={image} alt="pic" />
                <button onClick={() => addToBasket()}>Add to Basket</button>

            </div>
        </>
    )
}

export default Product;





