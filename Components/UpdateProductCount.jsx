import styles from "../pages/styles/UpdateProductCount.module.scss"
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function UpdateProductCount({ item, cartItem, setCartItem }) {
    const [cartItems, setCartItems] = useContext(AppContext);
    const { itemId, itemQuantity } = item;
    function productDecrement(itemId) {
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
    }
    function productIncrement(itemId) {
        const item = cartItems.find((item) => item.itemId === itemId);
        item.itemQuantity++;
        setCartItem({ ...cartItem })
    }
    return (
        <div className={styles.container} key={itemId}>
            <button className={`${styles.productUpdateCountButton} button`} onClick={() => productDecrement(itemId)}>-</button>
            <h4 className={styles.itemQuantity}>{itemQuantity}</h4>
            <button className={`${styles.productUpdateCountButton} button`} onClick={() => productIncrement(itemId)}>+</button>
        </div>)
}
export default UpdateProductCount;