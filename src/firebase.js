// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4CtRHXehhxYkGRYHagLadK0LksldI2QY",
  authDomain: "linkedin-clone-f8df5.firebaseapp.com",
  projectId: "linkedin-clone-f8df5",
  storageBucket: "linkedin-clone-f8df5.appspot.com",
  messagingSenderId: "298370001190",
  appId: "1:298370001190:web:c188ab40e65bb234cfb9e7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
