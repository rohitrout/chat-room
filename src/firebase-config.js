// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9UXQR08SoxfFBt1xmwzXGxmYokQ-7ymA",
  authDomain: "chat-room-a0c1f.firebaseapp.com",
  projectId: "chat-room-a0c1f",
  storageBucket: "chat-room-a0c1f.appspot.com",
  messagingSenderId: "775757802976",
  appId: "1:775757802976:web:2c6cb7e8be62581ccecf85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)