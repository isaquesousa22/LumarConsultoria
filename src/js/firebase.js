import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
   apiKey: "AIzaSyDg6SEUwq788jVF9cW8ykrRY64mrALuNnA",
  authDomain: "lumarconsultoria-f315d.firebaseapp.com",
  projectId: "lumarconsultoria-f315d",
  storageBucket: "lumarconsultoria-f315d.firebasestorage.app",
  messagingSenderId: "13038947611",
  appId: "1:13038947611:web:53e9df2e96e1a2c34cd7be",
  measurementId: "G-38KZH91BWR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);