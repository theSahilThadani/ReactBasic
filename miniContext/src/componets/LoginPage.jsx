import React from 'react'
import {useContext,useState} from 'react'
import UserContext from '../contextApi/UserContext'
import ProfilePage from './ProfilePage'

function LoginPage() {
    const {setUser,user} = useContext(UserContext)
    if(user){
        return <ProfilePage />
    }
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
    const handleLogin = (e) => {
        //context api data fecthing
        e.preventDefault()
        setUser({userName, password})
    }

  return (
    <div >
        
        <h1>Login</h1>
        <input type="text" 
            placeholder='username'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
        />
        <input type="password" 
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        <button onClick={handleLogin}>Submit</button>
    </div>
  )
}

export default LoginPage