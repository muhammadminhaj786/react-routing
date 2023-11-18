import React, { useState } from 'react'

const Login = () => {

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = (e) =>{
        e.preventDefault()
        localStorage.setItem("usertoken",password)
        console.log(password)
    }

  return (
    <div>Login
        <form onSubmit={handleLogin}>
            <div><input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} /></div>
            <div><input type="text" placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} /></div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Login