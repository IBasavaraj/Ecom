import styles from "./styles/Cart.module.scss";
import React, { useState } from 'react';
import { useContext } from 'react';
import ItemCard from '../Components/ItemCard';
import Summary from '../Components/Summary';
import { AppContext } from "../Context/AppContext"

function Cart() {
    const [cartItems] = useContext(AppContext);
    const [cartItem, setCartItem] = useState({});
    console.log(cartItems);
    function totalAmount() {
        let totalAmount = 0;
        cartItems.map((item) => totalAmount += parseInt(item.itemPrice) * parseInt(item.itemQuantity))
        return totalAmount
    }

    return (
        <div className={styles.container}>
            <div className={styles.cartItems}>
            {cartItems?.map((item) => <div key={item.itemId}>
                <ItemCard
                    item={item} currentComponent="cart" cartItem={cartItem} setCartItem={setCartItem} />
            </div>)}
            </div>          
            <div className={styles.summaryContainer}>
            <h1>Items Summary</h1>
            {cartItems?.map((item) =>
                <Summary key={item.itemId} item={item} />)}
            <h1>Total:{totalAmount()}</h1>
            <button className={`${styles.checkOutButton} button`}>Check out</button>
            </div>          
        </div>
    )
}

export default React.memo(Cart);