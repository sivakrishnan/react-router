import React, { useState } from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        auth.Login(user)
        navigate('/')
    }
    return (
        <div>
            <label>
                Username:{' '}
                <input type='text' onChange={(e) => setUser(e.target.value)}></input>
            </label>
            <button onClick={handleLogin}></button>
        </div>
    )
}

export default Login