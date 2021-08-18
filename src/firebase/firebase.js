import firebase from "firebase";

const fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD-aBd5u3dhELw5qO3KPaGYTl08XvnTAPQ",
    authDomain: "e-clone-1a60a.firebaseapp.com",
<<<<<<< HEAD
    databaseURL: "https://e-clone-1a60a-default-rtdb.asia-southeast1.firebasedatabase.app",
=======
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
    projectId: "e-clone-1a60a",
    storageBucket: "e-clone-1a60a.appspot.com",
    messagingSenderId: "882258855432",
    appId: "1:882258855432:web:4a0ffc4b1944ae69ca73bd",
    measurementId: "G-C9GKVX7CWF"
});

const auth = firebase.auth();
<<<<<<< HEAD
const storage = firebase.storage();
const database = firebase.database()

export {auth, storage, database};
=======

export {auth};
>>>>>>> 261efeafd672ace095244e9416f6bfceab89cdc1
