import React from 'react'
import { useAuth } from './auth'

const Profile = () => {
    const auth = useAuth()
    return (
        <div>Profile Page</div>
    )
}

export default Profile