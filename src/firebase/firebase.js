import firebase from "firebase";

const fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD-aBd5u3dhELw5qO3KPaGYTl08XvnTAPQ",
    authDomain: "e-clone-1a60a.firebaseapp.com",
    projectId: "e-clone-1a60a",
    storageBucket: "e-clone-1a60a.appspot.com",
    messagingSenderId: "882258855432",
    appId: "1:882258855432:web:4a0ffc4b1944ae69ca73bd",
    measurementId: "G-C9GKVX7CWF"
});

const auth = firebase.auth();

export {auth};