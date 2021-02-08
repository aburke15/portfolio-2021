import '../styles/globals.css'
import type { AppProps, /* AppContent */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
