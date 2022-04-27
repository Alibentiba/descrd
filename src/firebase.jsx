// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from './firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAhr8zQq7RPvvz6lrFtvNAe6NV5QTeUJfM",
    authDomain: "ecom-5267d.firebaseapp.com",
    projectId: "ecom-5267d",
    storageBucket: "ecom-5267d.appspot.com",
    messagingSenderId: "564032441617",
    appId: "1:564032441617:web:ea1d3afac2ad72dc82d0b0",
    measurementId: "G-C78V4S4BK6"
  };
  const firebaseApp =firebase.initializApp(firebaseConfig)
  const db =firebaseApp.firestore()
  const auth =firebase.auth()
  const Provider =new firebase.auth.googleAuthProvider()
  export {auth,Provider}
  export default db