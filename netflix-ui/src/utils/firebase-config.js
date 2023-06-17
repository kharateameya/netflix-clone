import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZrpVgxu5giXcq_h8Soukyn-_9vhimC4c",
  authDomain: "netflix-clone-b98a6.firebaseapp.com",
  projectId: "netflix-clone-b98a6",
  storageBucket: "netflix-clone-b98a6.appspot.com",
  messagingSenderId: "133599972617",
  appId: "1:133599972617:web:8f30620a5d3bcbfe74d7d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);