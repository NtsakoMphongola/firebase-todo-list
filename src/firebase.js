// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB084zrhAwSj6HcbpkFrmkcq2Hd-DABSvE",
  authDomain: "todo-firebase-9bc17.firebaseapp.com",
  databaseURL: "https://todo-firebase-9bc17-default-rtdb.firebaseio.com",
  projectId: "todo-firebase-9bc17",
  storageBucket: "todo-firebase-9bc17.appspot.com",
  messagingSenderId: "696477060864",
  appId: "1:696477060864:web:dd3778993f579a27276de5",
  measurementId: "G-9HWV17XMQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();