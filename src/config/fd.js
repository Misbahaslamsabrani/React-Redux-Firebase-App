import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDRrOmZScs7B7WnWa5JG5QQL1FbK4iWlHY",
    authDomain: "marioplanapp.firebaseapp.com",
    databaseURL: "https://marioplanapp.firebaseio.com",
    projectId: "marioplanapp",
    storageBucket: "marioplanapp.appspot.com",
    messagingSenderId: "1028127401636"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;