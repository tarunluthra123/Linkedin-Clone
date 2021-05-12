import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDkivpQszJqjrlLNIVj3Og3uPA7hOAOspI",
    authDomain: "linkedin-clone-8266f.firebaseapp.com",
    projectId: "linkedin-clone-8266f",
    storageBucket: "linkedin-clone-8266f.appspot.com",
    messagingSenderId: "923249803060",
    appId: "1:923249803060:web:0bb02a96ce8d9c57ac2f61",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export function googleSignIn() {
    return auth.signInWithPopup(googleAuthProvider);
}
