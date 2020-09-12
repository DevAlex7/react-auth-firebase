import React, {useState} from 'react'
import LogoGoogle from '../assets/logo-google.png'
import LogoGitHub from '../assets/logo-github.png'
import {
    signIn, 
    signInWithGoogle, signInWithGitHub
} from '../helpers/auth'
import ButtonLogin from '../components/buttonSession'
import SocialMediaButton from '../components/socialMediaButton'

const LoginScreen = () => {
    
    //state data
    const [form, setState] = useState({
        error: '',
        email : '',
        password : ''
    })
    
    //sign in with google popup
    const googleSignIn = async () =>{
        console.log('hoal')
        try {
            await signInWithGoogle()
            window.location.href= '/'
        } catch (error) {
            setState({
                error : error.message
            })
        }
    }
    
    //sign in with github popup
    const gitHubSignIn = async () => {
        try {
            await signInWithGitHub()
            window.location.href= '/'
        } catch (error) {
            setState({
                error : error.message
            })
        }
    }

    //normal login email password
    const login = async ({email, password}) => {
        try {
            await signIn(email, password) 
            window.location.href= '/'
        } catch (error) {
            setState({
                error : error.message
            })
        }
    }
    
    //set values
    const setValueByName = e => {
        setState({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    return <>
        <div className="h-screen bg-indigo-700">
            <div className="container mx-auto h-full flex justify-center items-center">
                <div className="w-full md:w-1/3">
                    <h1 className="font-hairline text-white mb-2 text-center text-4xl">Welcome!</h1>
                    <h1 className="font-hairline text-white mb-6 text-center">test your user with us!</h1>
                    <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label className="font-bold text-grey-darker block mb-2">Email</label>
                            <input 
                            type="text" 
                            name="email"
                            className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" 
                            placeholder="Your Email"
                            onChange={setValueByName}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="font-bold text-grey-darker block mb-2">Password</label>
                            <input 
                            type="password" 
                            name="password"
                            className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" 
                            placeholder="Your Password"
                            onChange={setValueByName}
                            />
                        </div>

                        <ButtonLogin title="login" event={ ()=>login({email: form.email, password:form.password}) }/>
                        <div>
                            <div className="my-3">
                                <span className="text-xs text-gray-600 mt">You can also login with google and others social medias...</span>
                            </div>
                            <div className="w-full md:w-1/3">
                                <SocialMediaButton image={LogoGoogle} event={ googleSignIn }/>
                                <SocialMediaButton image={LogoGitHub} event={ gitHubSignIn } className="ml-3"/>
                            </div>
                        </div>
                        {
                            form.error ? 
                            <h1>{form.error}</h1> : ''
                        }
                    </div>
                    <div className="text-center">
                        <p className="text-white text-sm">Do not have an account yet? <a href="/signup" className="no-underline text-blue font-bold">Sign up</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default LoginScreen