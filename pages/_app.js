import './styles/globals.css'
import { AppContext } from "../Context/AppContext"
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);
  return (
    <AppContext.Provider value={[cartItems, setCartItems]}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
