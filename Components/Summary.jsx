import styles from "../pages/styles/Summary.module.scss";
function Summary({  item }) {
    const { itemId, itemName, itemPrice, itemQuantity} = item;
    return (<div className={styles.summaryItem} key={itemId}>
        <h4 className={styles.itemName}>{itemName} </h4>
        <h4>{itemPrice} * {itemQuantity} = {itemPrice * itemQuantity}</h4>
        </div>)
}
export default Summary;