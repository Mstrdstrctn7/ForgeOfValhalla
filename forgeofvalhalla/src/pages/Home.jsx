import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#000',
      minHeight: '100vh',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ marginBottom: '2rem' }}>🛡️</h1>
      <div>
        <Link to="/login">
          <button style={{
            marginRight: '1rem',
            padding: '0.75rem 2rem',
            backgroundColor: '#8e44ad',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '1rem'
          }}>
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button style={{
            padding: '0.75rem 2rem',
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '1rem'
          }}>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  )
}
