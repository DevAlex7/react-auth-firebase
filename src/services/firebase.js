import firebase from 'firebase'
import config from '../config'
var firebaseConfig = {
    //your firebase console web app 
};
// Initialize Firebase
firebase.initializeApp(config);


export const auth = firebase.auth()
export const db = firebase.database()