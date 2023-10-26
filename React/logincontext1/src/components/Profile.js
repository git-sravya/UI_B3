import React, { useState } from 'react'
import { LoginContext } from '../context/LoginContext'
import { useContext } from 'react'

function Profile() {
    const {username}=useContext(LoginContext)
  return (
    <div>
        <h1>Profile</h1>
        <h3>Welcome {username}</h3>

    </div>
  )
}

export default Profile