import axios from 'axios'

const api = axios.create({
    baseURL: '/api',
    headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    }
})

export default api