import React, {useState} from 'react'
import LogoGoogle from '../assets/logo-google.png'
import LogoGitHub from '../assets/logo-github.png'
import {
    signUp, 
    signInWithGoogle,
    signInWithGitHub
} from '../helpers/auth'
import ButtonSignUp from '../components/buttonSession'
import SocialMediaButton from '../components/socialMediaButton'



const SignUpScreen = () => {

    const [form, setState] = useState({
        error: '',
        email : '',
        password : ''
    })

    const githubSignUp = async () => {
        try {
            await signInWithGitHub();
            window.location.href= '/'
        } catch (error) {
            setState({ error: error.message });
        }
    }

    const googleSignUp = async () =>{
        try {
            await signInWithGoogle()
            window.location.href= '/'
        } catch (error) {
            setState({
                error : error.message
            })
        }
    }

    const signup = async ({email, password}) => {
        try {
            await signUp(email, password) 
            window.location.href= '/'
        } catch (error) {
            setState({
                error : error.message
            })
        }
    }

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
                    <h1 className="font-hairline text-white mb-2 text-center text-4xl">Welcome</h1>
                    <h1 className="font-hairline text-white mb-6 text-center">sign up with us!</h1>
                    <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label className="font-bold text-grey-darker block mb-2">Email</label>
                            <input 
                            type="text" 
                            name="email"
                            className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" 
                            placeholder="Your Username"
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
                        <ButtonSignUp title ="Sign Up" event={()=> signup({email: form.email, password:form.password})}/>
                        <div>
                            <div className="my-3">
                                <span className="text-xs text-gray-600 mt">You can also sign up with google and others social medias...</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3">
                            <SocialMediaButton image={LogoGoogle} event={ googleSignUp }/>
                            <SocialMediaButton image={LogoGitHub} event={ githubSignUp } className="ml-3"/>
                        </div>
                        {
                            form.error ? 
                            <h1>{form.error}</h1> : ''
                        }
                        
                    </div>
                    <div className="text-center">
                        <p className="text-white text-sm">Do you have an account? <a href="/login" className="no-underline text-blue font-bold">Log in</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SignUpScreen