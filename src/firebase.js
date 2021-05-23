import firebase from 'firebase'
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBc2PyTfNmToHHHGOKfGpQ3PFlw0cN9bTs",
  authDomain: "slack2-bd4af.firebaseapp.com",
  projectId: "slack2-bd4af",
  storageBucket: "slack2-bd4af.appspot.com",
  messagingSenderId: "224255928462",
  appId: "1:224255928462:web:0a0d43afadcd382fa381df"
};  
const firebaseApp =firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();

export {auth, provider, db, firebaseApp};    // so that we can use them anywhere we need to 
export const firestore = firebase.firestore();
export const storageRef = firebase.storage();
export default firebase;