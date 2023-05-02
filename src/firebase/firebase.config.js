// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiZVgdIW9lstq80AUKRysZWSRxJcnT6bY",
  authDomain: "chef-recipe-of-diganto.firebaseapp.com",
  projectId: "chef-recipe-of-diganto",
  storageBucket: "chef-recipe-of-diganto.appspot.com",
  messagingSenderId: "438215105880",
  appId: "1:438215105880:web:1865ac77615e1654dc192d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
