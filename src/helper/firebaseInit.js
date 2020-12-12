import { firebase } from '@react-native-firebase/admob';

const firebaseConfig = {
    apiKey: "AIzaSyB8SWBqxmIQxbhdap7Ox3IIxYT1pDMCb8I",
    authDomain: "quoter-14119.firebaseapp.com",
    databaseURL: "https://quoter-14119.firebaseio.com",
    projectId: "quoter-14119",
    storageBucket: "quoter-14119.appspot.com",
    messagingSenderId: "quoter-14119",
    appId: "1:28203414018:android:d098d1540d6c829bb32d1b",
    //measurementId: "G-measurement-id",
  };

const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase;