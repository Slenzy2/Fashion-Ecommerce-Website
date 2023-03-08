
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFiretore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"

 export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATA_BASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER ,
  appId: process.env.REACT_APP_APP_ID,
  measurementId:process.env.REACT_APP_MEASUREMENT_ID,
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db =  getFiretore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)

export default app