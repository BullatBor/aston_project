import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAbPYPgiIxG7E_x0a_izCBT4lR-uycAMuc",
    authDomain: "aston-react-93b87.firebaseapp.com",
    databaseURL: "https://aston-react-93b87-default-rtdb.firebaseio.com",
    projectId: "aston-react-93b87",
    storageBucket: "aston-react-93b87.appspot.com",
    messagingSenderId: "451658867684",
    appId: "1:451658867684:web:e2231b80ba0efab2549df1",
    measurementId: "G-KR1FEVLRCV"
};

const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app); 
export const fireStore = getFirestore(app);