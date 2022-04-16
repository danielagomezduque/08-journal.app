import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAgKP3_HWc622mMu4d1PeiwwZQlYQsRVvg",
    authDomain: "react-app-curso-d1046.firebaseapp.com",
    projectId: "react-app-curso-d1046",
    storageBucket: "react-app-curso-d1046.appspot.com",
    messagingSenderId: "209951905827",
    appId: "1:209951905827:web:233687358cd11c1c25f996"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}