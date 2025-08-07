import React, { useState } from 'react'
import { placeCryptoOrder } from '../utils/trading'

export default function Trade() {
  const [status, setStatus] = useState('')

  const handleTrade = async () => {
    setStatus('Placing trade...')
    const result = await placeCryptoOrder({
      instrument: 'BTC_USDT',
      side: 'BUY',
      price: '20000',
      quantity: '0.001'
    })

    if (result.error) {
      setStatus(`Error: ${result.details}`)
    } else {
      setStatus(`Trade response: ${JSON.stringify(result)}`)
    }
  }

  return (
    <div style={{ padding: '2rem', background: '#111', color: 'white' }}>
      <h2>Trade BTC/USDT</h2>
      <button onClick={handleTrade}>Place Test Buy Order</button>
      <p>{status}</p>
    </div>
  )
}
