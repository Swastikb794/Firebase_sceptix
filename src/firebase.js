import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA-3zWA3_Cuq0nKADdXPt5m1JDuTEqYQf8",
  authDomain: "fir-sceptix.firebaseapp.com",
  projectId: "fir-sceptix",
  storageBucket: "fir-sceptix.appspot.com",
  messagingSenderId: "446908602970",
  appId: "1:446908602970:web:23c09e1b66a6ddae0ad663",
  measurementId: "G-57TJ7GVT2P"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };