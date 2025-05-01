// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1EO3I9m037GMZU5L2_UHFf23bKUlG_H0",
  authDomain: "messages-storage-4fbf4.firebaseapp.com",
  databaseURL: "https://messages-storage-4fbf4-default-rtdb.firebaseio.com",
  projectId: "messages-storage-4fbf4",
  storageBucket: "messages-storage-4fbf4.firebasestorage.app",
  messagingSenderId: "327489063740",
  appId: "1:327489063740:web:6e2e0f4e56d3a316002c39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };