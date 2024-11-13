import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkkFF0XhNZeWuDmOfEhsgNxyozGKvsXcc",
  authDomain: "srm-social-sphere.firebaseapp.com",
  projectId: "srm-social-sphere",
  storageBucket: "srm-social-sphere.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:1234567890"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);