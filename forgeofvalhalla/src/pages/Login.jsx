import React, { useState } from 'react'
import { supabase } from '../supabaseClient'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setMessage(error.message)
    else setMessage('Logged in successfully!')
  }

  return (
    <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} /><br /><br />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br /><br />
      <button onClick={handleLogin}>Log In</button>
      <p>{message}</p>
    </div>
  )
        }
