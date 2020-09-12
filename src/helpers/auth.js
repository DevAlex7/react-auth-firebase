import { auth } from "../services/firebase";
import firebase from 'firebase'

export function signUp (email, password){
    return auth.createUserWithEmailAndPassword(email, password)
}

export function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider()
    return auth.signInWithPopup(provider)
}

export function signInWithGitHub() {
    var provider = new firebase.auth.GithubAuthProvider()
    return auth.signInWithPopup(provider);
}

export function signIn (email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}