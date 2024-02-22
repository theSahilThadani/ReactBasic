import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}= useParams()
    console.log(userid)
  return (
    <div className='bg-zinc-800 h-[400px] text-white flex items-center justify-center text-8xl font-bold'>User :{userid}</div>
  )
}

export default User