import styles from "../pages/styles/Summary.module.scss"
function Summary({ cartItems }) {
    function totalAmount() {
        let totalAmount = 0;
        cartItems.forEach(item => {
            totalAmount += parseInt(item.itemPrice) * parseInt(item.itemQuantity)
        });
        return totalAmount
    }
    return (
        <div className={styles.summaryContainer}>
            <h1>Items Summary</h1>
            {cartItems?.map((item) =>
                <div className={styles.summaryItem} key={item.itemId}>
                    <h4 className={styles.itemName}>{item.itemName} </h4>
                    <h4 className={styles.itemPrice}>{item.itemPrice} * {item.itemQuantity} = {item.itemPrice * item.itemQuantity}</h4>
                </div>
            )}
            <h1>Total:{totalAmount()}</h1>
            <button className={`${styles.checkOutButton} button`}>Check out</button>
        </div>
    )
}

export default Summary;