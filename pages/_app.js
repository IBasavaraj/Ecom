import './styles/globals.css'
import { AppContext } from "../Context/AppContext"
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState();

  // useEffect(() => {
  //   setCartItems(JSON.parse(localStorage.getItem("cartItems")))
  // }, [])

  return (
    <AppContext.Provider value={[cartItems, setCartItems]}>
      <Component {...pageProps} />
     </AppContext.Provider>
  )
}

export default MyApp
