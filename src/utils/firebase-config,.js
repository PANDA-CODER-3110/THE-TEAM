
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDcU8d27vx2FmJwfum01qsEqnL6HWuYmV8",
  authDomain: "react-netflix-ui.firebaseapp.com",
  projectId: "react-netflix-ui",
  storageBucket: "react-netflix-ui.appspot.com",
  messagingSenderId: "853843546881",
  appId: "1:853843546881:web:ac784b8f0d2af2a6028100",
  measurementId: "G-2E8GWEJ4V1"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)