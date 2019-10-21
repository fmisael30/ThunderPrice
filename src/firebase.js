import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'





const config = {
    apiKey: "AIzaSyDcPYAF6xuCB5U6fVni4v2SUO3H2mOYPyE",
    authDomain: "thunderpriceapp.firebaseapp.com",
    databaseURL: "https://thunderpriceapp.firebaseio.com",
    projectId: "thunderpriceapp",
    storageBucket: "thunderpriceapp.appspot.com",
    messagingSenderId: "469876983589",
    appId: "1:469876983589:web:838f2194b56422af507ccc"
}
firebase.initializeApp(config);






const db = firebase.firestore()
const ref = firebase.storage().ref();

export {
    db,
    ref,
    firebase,
}

export default firebase