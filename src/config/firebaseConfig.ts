import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKK4W2VUXFetzsXRzH60Fot5FmRbD5KNw",
  authDomain: "clone-3785d.firebaseapp.com",
  databaseURL: "https://clone-3785d-default-rtdb.firebaseio.com",
  projectId: "clone-3785d",
  storageBucket: "clone-3785d.appspot.com",
  messagingSenderId: "262158269734",
  appId: "1:262158269734:web:d8a0e660ac6fae4c2615e7",
  measurementId: "G-T5N2LRBMG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app