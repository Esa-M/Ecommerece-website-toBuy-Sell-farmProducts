import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD1z4Gs0zPcBYSUjfA20f37zcii-qDKkYs",
  authDomain: "aqua-bf4fc.firebaseapp.com",
  projectId: "aqua-bf4fc",
  storageBucket: "aqua-bf4fc.appspot.com",
  messagingSenderId: "469533666604",
  appId: "1:469533666604:web:44f13ff737c0af2860d089",
  measurementId: "G-TCQRT70DNM"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export const db = getFirestore(app)
export const storage = getStorage(app)

export let productList = []
export let dist =[]