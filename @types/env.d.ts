declare global {
    namespace NodeJS {
      interface ProcessEnv {
        API_QUESTIONS_URL: string
        API_QUESTIONS_KEY: string
        NEXT_PUBLIC_API_KEY: string
      }
    }
}

export {}