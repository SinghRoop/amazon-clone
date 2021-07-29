import React from 'react'
import footerImg from '../../assests/images/img.png'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer__logo">
                    <img src={footerImg} alt="logo" />
                </div>
                <div className="footer__content">
                    <p>Conditions of Use & Sale</p>
                    <p>Privacy Notice</p>
                    <p>Interest Based Ads</p>
                    <p>© 1996-2021, Amazon.com</p>
                </div>
            </div>
        </>
    )
}

export default Footer
