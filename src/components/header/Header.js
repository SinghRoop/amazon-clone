import React, { useEffect } from 'react'
import './Header.css'
import logoImg from '../../assests/images/img.png'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { auth } from '../../firebase/firebase'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { filterProducts } from '../../Redux/actions/actions'
import {filterSearchProducts} from '../../Redux/actions/actions'


const Header = () => {

    const [click, setClick] = useState(false)

    const cart = useSelector(state => state.cart)
    const user = useSelector(state => state.user)
    const text = useSelector(state => state.filters.text)

    const dispatch = useDispatch();

    // console.log(cart)

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => setClick(false);

    const updateFilters = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        console.log(name, value);
        dispatch(filterProducts({ name, value }));
    };

    useEffect(() => {
        dispatch(filterSearchProducts());
      }, [text]);
    
    return (
        <nav className="header">
            <div className="header__logo">
                <div className="header__logo__img">
                    <Link to="/">
                        <img src={logoImg} alt="logo" />
                    </Link>
                </div>
                <Link to="/checkout" className="header__link__top">
                    <div className="header__Basket__Top" onClick={closeMobileMenu}>
                        <ShoppingCartIcon className="header__Basket__icon__top" />
                        <span className="header__optionLineTwo header__basketCount__top">{cart?.length}</span>
                    </div>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
            </div>

            <div className={click ? "header__sidebar active" : "header__sidebar"}>
                <div className="header__search">
                    <input type="text" className="header__searchInput"
                        name="text" value={text} onChange={updateFilters}
                    />
                    <SearchIcon className="header__searchIcon" />
                </div>
                <div className="header__nav">
                    <Link to={!user && "/login"} className="header__link" onClick={closeMobileMenu}>
                        <div onClick={login} className="header__option">
                            <span className="header__optionLineOne">Hello {user?.email} </span>
                            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>
                    <Link to="/" className="header__link" onClick={closeMobileMenu}>
                        <div className="header__option">
                            <span className="header__optionLineOne">Returns</span>
                            <span className="header__optionLineTwo">& Orders</span>
                        </div>
                    </Link>
                    <Link to="/login" className="header__link" onClick={closeMobileMenu}>
                        <div className="header__option">
                            <span className="header__optionLineOne">Your</span>
                            <span className="header__optionLineTwo">Prime</span>
                        </div>
                    </Link>
                </div>
                <Link to="/checkout" className="header__link">
                    <div className="header__Basket" onClick={closeMobileMenu}>
                        <ShoppingCartIcon className="header__Basket__icon" />
                        <span className="header__optionLineTwo header__basketCount">{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
