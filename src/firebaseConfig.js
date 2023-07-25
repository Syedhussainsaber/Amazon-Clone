// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBswk7TaIz4d1_YQrsNkufj_xbgYuOdRfM",
  authDomain: "fir-bc0ee.firebaseapp.com",
  projectId: "fir-bc0ee",
  storageBucket: "fir-bc0ee.appspot.com",
  messagingSenderId: "460515927282",
  appId: "1:460515927282:web:44b4d37687afd200f0dc6b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)