import firebase from 'firebase';
var firebaseConfig = {
    //your firebase console web app 
    apiKey: "AIzaSyBZS3mckm54aC3gqJQtUepL22I0xxUXKN4",
    authDomain: "chat-test-c04d6.firebaseapp.com",
    databaseURL: "https://chat-test-c04d6.firebaseio.com",
    projectId: "chat-test-c04d6",
    storageBucket: "chat-test-c04d6.appspot.com",
    messagingSenderId: "840773939671",
    appId: "1:840773939671:web:75a34daf1c25087e47db92",
    measurementId: "G-1VTNE24T8Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth()
export const db = firebase.database()