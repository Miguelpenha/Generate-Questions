import { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '../styles/global'
import { ToastContainer } from 'react-toastify'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Component {...pageProps}/>
      <ToastContainer autoClose={3000}/>
      <GlobalStyle/>
    </>
  )
}

export default App