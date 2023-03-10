import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCeAwXJI6MX0T34DWPzVONVu0ZRWb9q3X4",
  authDomain: "react-firebase-36b40.firebaseapp.com",
  projectId: "react-firebase-36b40",
  storageBucket: "react-firebase-36b40.appspot.com",
  messagingSenderId: "300135618591",
  appId: "1:300135618591:web:aff266a3414f5f3a641d2a",
  measurementId: "G-3558M6JG2S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
export const storage = getStorage();

export default app;