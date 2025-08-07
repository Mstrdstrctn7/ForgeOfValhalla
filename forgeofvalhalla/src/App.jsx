import React from 'react'

export default function App() {
  const handleLogin = () => {
    window.location.href = '/login'
  }

  const handleSignup = () => {
    window.location.href = '/signup'
  }

  return (
    <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
      <h1>🛡️ Welcome to Forge of Valhalla</h1>
      <p>Prepare for battle. Your legend begins now.</p>

      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={handleLogin}
          style={{
            margin: '1rem',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#9b59b6',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Login
        </button>

        <button
          onClick={handleSignup}
          style={{
            margin: '1rem',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#2ecc71',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}
