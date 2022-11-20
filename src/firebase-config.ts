import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0S0-OFofRJR0mZMctWrMgMbpk18x6mlI",

  authDomain: "to-do-list-7a9e5.firebaseapp.com",

  projectId: "to-do-list-7a9e5",

  storageBucket: "to-do-list-7a9e5.appspot.com",

  messagingSenderId: "578977216403",

  appId: "1:578977216403:web:9bbaa0d2df66a6eff71a66",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
