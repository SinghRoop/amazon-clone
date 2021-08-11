import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../Redux/actions/actions";
import banner from "../../assests/images/bannerImg.jpg";
import "./Home.css";
import Product from "../../components/product/Product";

const Home = () => {

  const mainApi = useSelector(state => state.mainApi)
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err)
      })
    // console.log(response.data)
    dispatch(setProducts(response.data))
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      <div className="home">
        <img src={banner} alt="banner" className="home__image" />

        <div className="home__row">

          {
            mainApi.map((product, index) => {
              return (
                <Product
                key={index}
                  {...product}
                  rating={4}
                  quantity={0}
                />
              )
            })
          }

        </div>
      </div>
    </>
  );
};

export default Home;


