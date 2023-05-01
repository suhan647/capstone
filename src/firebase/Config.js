import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


export const firebaseConfig = {
  apiKey: "AIzaSyBQsfIu4Ct8mozWlSpCUjX1D6ga0EGzJIs",
  authDomain: "city-shop-5e631.firebaseapp.com",
  projectId: "city-shop-5e631",
  storageBucket: "city-shop-5e631.appspot.com",
  messagingSenderId: "32168686939",
  appId: "1:32168686939:web:32cda07604f2200508567e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app