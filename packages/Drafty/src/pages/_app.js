import Header from '../components/Header'
import '../styles/globals.css'
import '../styles/header.scss'
import '../styles/custom.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
