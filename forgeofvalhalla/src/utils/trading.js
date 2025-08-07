export async function placeCryptoOrder({ instrument, side, price, quantity }) {
  try {
    const res = await fetch('/.netlify/functions/cryptoApi?method=private/create-order&path=private/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        instrument_name: instrument,
        side, // "BUY" or "SELL"
        type: 'LIMIT',
        price,
        quantity
      })
    })

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Trade failed:', error)
    return { error: true, details: error.message }
  }
  }
