import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyAj6sHqdVYvPsqnUBv8NX-tNcwBFx7NoxY',
  authDomain: 'chat-ef90e.firebaseapp.com',
  projectId: 'chat-ef90e',
  storageBucket: 'chat-ef90e.appspot.com',
  messagingSenderId: '656396623723',
  appId: '1:656396623723:web:8d2d310f90a7cd68d9f62e',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
