import './styles/globals.css'
import { AppContext } from "../Context/AppContext"
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    if(localStorage.getItem("cartItems")!==null){
      const items = JSON.parse(localStorage.getItem("cartItems"));
      setCartItems(items);
    }   
}, []);
  return (
    <AppContext.Provider value={[cartItems, setCartItems]}>
      <Component {...pageProps} />
     </AppContext.Provider>
  )
}

export default MyApp
