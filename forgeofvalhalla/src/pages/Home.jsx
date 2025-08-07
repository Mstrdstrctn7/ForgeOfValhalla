import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
      <h1>🛡️ Welcome to Forge of Valhalla</h1>
      <p>Prepare for battle. Your legend begins now.</p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/login">
          <button style={{ marginRight: '1rem', padding: '0.5rem 1rem', backgroundColor: '#9b59b6', color: 'white', border: 'none', borderRadius: '8px' }}>
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button style={{ padding: '0.5rem 1rem', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '8px' }}>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  )
}
