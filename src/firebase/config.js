import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCmytwYOqEjW9h8AJ24P3BCgt9kbSvszY4",
  authDomain: "reactjs-noel.firebaseapp.com",
  projectId: "reactjs-noel",
  storageBucket: "reactjs-noel.firebasestorage.app",
  messagingSenderId: "182581300701",
  appId: "1:182581300701:web:274347bca16cbcced47a34"
};


const app = initializeApp(firebaseConfig);

export { app };