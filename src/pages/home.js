import React from 'react'
import {auth} from '../services/firebase'
import noProfile from '../assets/noprofile.jpg'

const HomeScreen = ({provider ,user}) => {

    //sign out firebase current user
    const signOut = async () => {
        try {
            await auth.signOut()
            window.location.href = '/login'
        } catch (error) {
            
        }
    }

    const isLoggedWithSocialMediaOrFirebase = (user) => {
        if(user.displayName){
            return user.displayName
        }

        return user.email
    }

    const isFirebaseOrSocialMedia = (user,provider) => {
        if(provider){
            return provider
        }

        return user.providerId
    }
 
    return <h1 className="h-screen w-full">
        
        <div className="flex flex-col justify-center items-center mt-32">
            <div>
                <img className="rounded shadow-sm h-48" src={ user.photoURL ? user.photoURL : noProfile }/>
            </div>
            <div className="py-2">
            <p> you are signed as: {isLoggedWithSocialMediaOrFirebase(user)}</p>
            <p> you are signed with: {isFirebaseOrSocialMedia(user, provider)}</p>
            <p>{}</p>
            </div>
            <button className="mt-5 bg-indigo-500 text-white px-5 py-2 rounded" onClick={()=>signOut()}>sign out</button>
        </div>
    </h1>
}

export default HomeScreen