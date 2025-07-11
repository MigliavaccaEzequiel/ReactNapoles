import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyB4lHJTTNz5BulG52vBaivDwFx9OPCMy6k",
  authDomain: "napoles-db.firebaseapp.com",
  projectId: "napoles-db",
  storageBucket: "napoles-db.firebasestorage.app",
  messagingSenderId: "156454216972",
  appId: "1:156454216972:web:4b24fe23462b809e1d5529"
};

export const app = initializeApp(firebaseConfig)