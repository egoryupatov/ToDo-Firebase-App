import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_x0nrQyug1-NB9al15Vv4awspCQJCq7I",

  authDomain: "to-do-app-3350a.firebaseapp.com",

  projectId: "to-do-app-3350a",

  storageBucket: "to-do-app-3350a.appspot.com",

  messagingSenderId: "965712108641",

  appId: "1:965712108641:web:d6a20c1c443a0e2d4b5e20",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
