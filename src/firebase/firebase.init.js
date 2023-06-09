// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGEx5di2_DgiThrzm2XLilumNfxKNuojQ",
  authDomain: "my-pettu.firebaseapp.com",
  projectId: "my-pettu",
  storageBucket: "my-pettu.appspot.com",
  messagingSenderId: "765625864708",
  appId: "1:765625864708:web:3b8945110e6699ccfc5b51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
