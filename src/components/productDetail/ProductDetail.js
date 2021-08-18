import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { selectedProducts, removeSelectedProducts } from '../../Redux/actions/actions'
import axios from 'axios'
import { useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import './ProductDetail.css'


const ProductDetail = ({ rating }) => {

    const { productId } = useParams();
    console.log('Product is is', productId)

    let singleProduct = useSelector((state) => state.singleProduct);
    const { image, title, price, category, description } = singleProduct;

    const dispatch = useDispatch();

    const fetchProductDetail = async (id) => {

        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("Err: ", err);
            });

        dispatch(selectedProducts(response.data));
        // console.log('selected product is', response.data)
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail(productId);
        return () => {
            dispatch(removeSelectedProducts());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId]);


    return (
        <>

            <div className="productdetail__main__container">
                <h1>Product Detail</h1>

                {
<<<<<<< HEAD
                    Object.keys(singleProduct)?.length === 0 ? (
=======
                    Object.keys(singleProduct).length === 0 ? (
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
                        <div>...Loading <CircularProgress /> </div>
                    ) : (

                        <div className="product__detail__container">
                            <div className="product__detail_leftside">
                                <img src={image} alt="" />
                            </div>
                            <div className="product__detail_rightside">

                                <div className="product__detail__description">
                                    <div className="product__detail__title">
                                        Title :  {title}
                                    </div>
                                    <div className="product__detail__price">
                                       Price: <small>$</small> {price}
                                    </div>
                                    <div className="product__detail__rating">
                                        {rating}
                                    </div>
                                    <div className="product__detail__category">
                                        Category : {category}
                                    </div>
                                    <div className="product__detail__desc">
                                        Description :{description}
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}

            </div>
        </>
    )
}

export default ProductDetail;
