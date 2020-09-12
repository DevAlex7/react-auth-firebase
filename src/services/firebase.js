import firebase from 'firebase';
var firebaseConfig = {
    //your firebase console web app 
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth()
export const db = firebase.database()