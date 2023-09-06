import { getDatabase } from "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtJx2xaxGgLaUPSE2Xm0dCL6C-7bI5dvM",
  authDomain: "gymapp-74441.firebaseapp.com",
  projectId: "gymapp-74441",
  storageBucket: "gymapp-74441.appspot.com",
  messagingSenderId: "61350713697",
  appId: "1:61350713697:web:12aed17f0b22219e50cd20"
};

firebase.initializeApp(firebaseConfig);

const db = getDatabase(firebase);