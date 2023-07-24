import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const FIREBASE_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "talking-with-characters.firebaseapp.com",
  projectId: "talking-with-characters",
  storageBucket: "talking-with-characters.appspot.com",
  messagingSenderId: "1054470239585",
  appId: "1:1054470239585:web:14d5081ba440d35a518120"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db