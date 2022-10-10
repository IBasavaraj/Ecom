function Summary({  item }) {
    const { itemId, itemName, itemPrice, itemQuantity} = item;
    return (<div key={itemId}>
        <h4>{itemName}</h4>
        <h4>{itemPrice}</h4>
        <h4>{itemQuantity}</h4>
        </div>)
}
export default Summary;