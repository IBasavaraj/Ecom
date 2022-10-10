import styles from "../pages/styles/UpdateProductCount.module.scss"
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import {itemData} from "../Constants/productList"

function UpdateProductCount({ item, cartItem, setCartItem }) {
    // const [cartItems, setCartItems] = useContext(AppContext);
    const [cartItems, setCartItems] = useState([]);
    // const [cartItems, setCartItems] = useState([]);
    const { itemId, itemQuantity } = item;
    // const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    console.log(localStorage);
    // console.log(cartItems);
    useEffect(()=>{
        const cartItems = JSON.parse(localStorage.getItem("cartItems"));
        setCartItems(cartItems)
    },[])
    function productDecrement(itemId) {
        // setCartItems(JSON.parse(localStorage.getItem("cartItems")));


        const item = cartItems.find((item) => item.itemId === itemId);
        item.itemQuantity--;
        if (parseInt(item.itemQuantity) === 0) {
            const index = cartItems.findIndex((item) => item.itemId === itemId);
            cartItems.splice(index, 1);
            
            setCartItems([...cartItems])
        } else {
            setCartItem(item)
            setCartItem({ ...cartItem })
        }
        localStorage.setItem("cartItems",JSON.stringify(cartItems))
    }
    function productIncrement(itemId) {
        // const items = JSON.parse(localStorage.getItem("cartItems"));
        // setCartItems(items)
        // console.log(cartItems);
        const item = cartItems.find((item) => item.itemId === itemId);
        setCartItem(item);
        console.log(item);
        item.itemQuantity++;
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
        setCartItem({ ...cartItem })
    }
    return (
        <div className={styles.container} key={itemId}>
            <button className={`${styles.productUpdateCountButton} button`} onClick={() => productDecrement(itemId)}>-</button>
            <h4 className={styles.itemQuantity}>{itemQuantity}</h4>
            <button className={`${styles.productUpdateCountButton} button`} onClick={() => productIncrement(itemId)}>+</button>
        </div>
        )
}
export default UpdateProductCount;