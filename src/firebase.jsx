import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA_m9QAyy9ZztExfOK99CB7FeS9z_FknCw",
  authDomain: "aditya-react-portfolio.firebaseapp.com",
  projectId: "aditya-react-portfolio",
  storageBucket: "aditya-react-portfolio.appspot.com",
  messagingSenderId: "316762925841",
  appId: "1:316762925841:web:99bf2c1755357d9d777ab0"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();