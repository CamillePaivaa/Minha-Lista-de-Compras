import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAplVtnbHP4ZtMMDrXoL0-aOvUt5YBZotM",
  authDomain: "lista-de-compras-7b44e.firebaseapp.com",
  databaseURL: "https://lista-de-compras-7b44e-default-rtdb.firebaseio.com",
  projectId: "lista-de-compras-7b44e",
  storageBucket: "lista-de-compras-7b44e.firebasestorage.app",
  messagingSenderId: "296864814433",
  appId: "1:296864814433:web:f830ba429ee75de7886120",
  measurementId: "G-PDMDFGZE2J",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword, db, signInWithEmailAndPassword };
