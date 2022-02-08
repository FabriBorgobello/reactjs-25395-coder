import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlViJPkGSTPWeM893GMfnn3PzSpbNFuHE",
  authDomain: "coder-react-25395-hola.firebaseapp.com",
  projectId: "coder-react-25395-hola",
  storageBucket: "coder-react-25395-hola.appspot.com",
  messagingSenderId: "933204800373",
  appId: "1:933204800373:web:1bf36a3482cf718573193c",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
