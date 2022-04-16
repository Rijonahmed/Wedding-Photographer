// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIehn8mDTFohgj9veCsRxsR-Ljq0e7k-w",
  authDomain: "best-wedding-photographer.firebaseapp.com",
  projectId: "best-wedding-photographer",
  storageBucket: "best-wedding-photographer.appspot.com",
  messagingSenderId: "1081598259796",
  appId: "1:1081598259796:web:4d2327d3caa7d9f7b7f3c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;