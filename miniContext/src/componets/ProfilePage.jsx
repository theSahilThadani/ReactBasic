import React from 'react'
import { useContext } from 'react'
import UserContext from '../contextApi/UserContext'

function ProfilePage() {
    const {user} = useContext(UserContext)
  return (
    <div>
        <h1>Hello {user.userName} welcome to Profile Section</h1>
    </div>
  )
}

export default ProfilePage