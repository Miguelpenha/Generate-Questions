import axios from 'axios'

const apiQuestions = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_QUESTIONS_URL,
    headers: {
        authorization: `key ${process.env.NEXT_PUBLIC_API_QUESTIONS_KEY}`
    }
})

export default apiQuestions