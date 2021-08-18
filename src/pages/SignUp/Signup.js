import React from 'react'
import { Formik } from "formik";
import { useDispatch } from 'react-redux';
import { signUpData } from '../../Redux/actions/actions';
import './Signup.css'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            }}

            validate={values => {

                const errors = {};

                // Simple validation without Yup
                //Firstname
                if (!values.firstName) {
                    errors.firstName = "Sorry this is required";
                } else if (values.firstName.length < 4) {
                    errors.firstName = 'First name needs to be min of 4 characters';
                }

                //LastName
                if (!values.lastName) {
                    errors.lastName = "Sorry this is required";
                }

                //Email
                if (!values.email) {
                    errors.email = 'Sorry, this is required';
                } else if (
                    // eslint-disable-next-line no-useless-escape
                    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)
                ) {
                    errors.email = 'Invalid email';
                }

                //Password
                if (!values.password) {
                    errors.password = 'Password is required';
                } else if (values.password.length < 6) {
                    errors.password = 'Password needs to be 6 characters or more';
                }

                //Confirm Password
                if (!values.confirmPassword) {
                    errors.confirmPassword = 'Password is required';
                } else if (values.confirmPassword !== values.password) {
                    errors.confirmPassword = 'Passwords do not match';
                }
                return errors;
            }}

            onSubmit={(values) => {
                dispatch(signUpData(values))
                // localStorage.setItem("userdata", JSON.stringify(values));
            }}
        >
            {({
                values, errors, touched, handleChange, handleBlur, handleSubmit
            }) => (

                <div className="signup">
                    <div className="signup_title">
                        <h1>Sign Up</h1>
                    </div>

                    <div className="signup_container">
                        <form onSubmit={handleSubmit}>
                            <label className="form_label">First Name</label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.firstName && touched.firstName ? (
                                <span> {errors.firstName} </span>
                            ) : null}

                            <label className="form_label">Last Name</label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.lastName && touched.lastName ? (
                                <span> {errors.lastName} </span>
                            ) : null}

                            <label className="form_label">Email</label>
                            <input
                                placeholder="Enter your email"
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            {errors.email && touched.email ? (
                                <span> {errors.email} </span>
                            ) : null}

                            <label className="form_label">Password</label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            {errors.password && touched.password ? (
                                <span> {errors.password} </span>
                            ) : null}

                            <label className="form_label">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm password"
                                name="confirmPassword"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.confirmPassword && touched.confirmPassword ? (
                                <span> {errors.confirmPassword} </span>
                            ) : null}

                            <div className="signup_terms">

                                <input type="checkbox" />
                                <p className="signup_terms_text">
                                    I accept the{" "}
                                    <span className="signup_terms_highlight"> Terms of Use </span> &
                                    <span className="signup_terms_highlight"> Privacy Policy </span>
                                </p>
                            </div>

                            <button type="submit" className="signup_submit_btn">Sign Up</button>
                            <Link to='/' >Back to Home</Link>

                        </form>
                    </div>
                </div>
            )}
        </Formik >
    );
};

export default SignUp








