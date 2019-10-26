import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBlKEND6Rt5H6TihElj-SLLKwlQSiuixoA',
  authDomain: 'blog-1ffa0.firebaseapp.com',
  databaseURL: 'https://blog-1ffa0.firebaseio.com',
  projectId: 'blog-1ffa0',
  storageBucket: 'blog-1ffa0.appspot.com',
  messagingSenderId: '389863865858',
  appId: '1:389863865858:web:c4486ed6943ac63b',
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db
