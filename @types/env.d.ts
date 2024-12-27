declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_API_KEY: string
        NEXT_PUBLIC_API_QUESTIONS_URL: string
        NEXT_PUBLIC_API_QUESTIONS_KEY: string
      }
    }
}

export {}