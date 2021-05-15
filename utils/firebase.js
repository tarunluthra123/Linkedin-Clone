import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderID: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const storage = firebase.storage();
export const storageRef = storage.ref();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export function googleSignIn() {
    return auth.signInWithPopup(googleAuthProvider);
}
