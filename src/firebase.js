import firebase from 'firebase';
  

const firebaseConfig = {
    apiKey: "AIzaSyBCMBND7XH7fZwA2HMK-khf8JFAWFcMYOc",
    authDomain: "deepracer-a209f.firebaseapp.com",
    projectId: "deepracer-a209f",
    storageBucket: "deepracer-a209f.appspot.com",
    messagingSenderId: "258476250636",
    appId: "1:258476250636:web:7e89fe17dd79e3da3b0029"
  };
    
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;