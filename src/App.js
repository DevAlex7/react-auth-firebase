import React, { useState, useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import Home from './pages/home'
import SignUp from './pages/signUp'
import Login from './pages/login'

import {PrivateRoute, PublicRoute} from './components/sessionComponents'

import {auth} from './services/firebase'

const App = () => {
    
    const [user, setUserAuth] = useState('')
    const [provider, setProvider] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isAuthenticated, setAuthenticated] = useState(true)

    useEffect(()=>{
      auth.onAuthStateChanged((user)=> {
        
        if(user){
          var company = ''
          user.providerData.map((prov) => {
            company = prov.providerId
          })
          setUserAuth(user)
          setAuthenticated(true)
          setProvider(company)
          setIsLoading(false)
        }
        else{
          setAuthenticated(false)
          setIsLoading(false)
        }
      })
    },[])

    return isLoading ===  true ? 
    <div className="flex items-center justify-center h-screen">
      <h1>loading ... </h1>
    </div>
    :
    (
      <>
      <Router>
        <Switch>
          <PublicRoute exact path="/signup" authenticated={isAuthenticated} component={SignUp}/>
          <PublicRoute exact path="/login" authenticated={isAuthenticated} component={Login}/>
          <PrivateRoute exact path="/" authenticated={isAuthenticated} user={user} component={ ()=> <Home provider={provider}  user={user} /> } />
        </Switch>
      </Router>
    </>
    )
}

export default App;
