const crypto = require('crypto')
const axios = require('axios')

exports.handler = async (event) => {
  const { method, path } = event.queryStringParameters
  const body = event.body ? JSON.parse(event.body) : {}

  const apiKey = process.env.CRYPTOCOM_API_KEY
  const apiSecret = process.env.CRYPTOCOM_API_SECRET
  const apiUrl = 'https://api.crypto.com/v2'

  if (!apiKey || !apiSecret) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing API credentials' })
    }
  }

  const timestamp = Math.floor(Date.now() / 1000)
  const requestPath = `/v2/${path}`
  const payload = {
    id: timestamp,
    method,
    api_key: apiKey,
    params: body,
    nonce: timestamp
  }

  const signature = crypto
    .createHmac('sha256', apiSecret)
    .update(JSON.stringify(payload))
    .digest('hex')

  payload.sig = signature

  try {
    const response = await axios.post(`${apiUrl}/${path}`, payload)
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message, details: err.response?.data })
    }
  }
}
