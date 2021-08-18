import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Checkout from "./pages/checkout/Checkout";
import Login from "./pages/login/Login";
import { useEffect } from "react"
import { auth } from "./firebase/firebase"
import ProductDetail from "./components/productDetail/ProductDetail";
import Footer from "./components/footer/Footer";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { setUser } from "./Redux/actions/actions";
import SignUp from "./pages/SignUp/Signup";
=======
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1

function App() {

  const dispatch = useDispatch()
<<<<<<< HEAD

=======
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
  // Piece of code which runs based on a given condition
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // The User is logged in
<<<<<<< HEAD
        dispatch(setUser(authUser))
      } else {
        // The user is logged out
        dispatch(setUser(null))
      }
    });
=======
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
<<<<<<< HEAD
          <Route path="/signup">
            <SignUp />
          </Route>
=======
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
          <Route exact path="/:productId">
            <Header />
            <ProductDetail />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
