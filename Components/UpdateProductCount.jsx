function UpdateProductCount({ item, productIncrement, productDecrement }) {
    const { itemId, itemQuantity } = item;
    return (
        <div key={itemId}>
            <button onClick={() => productDecrement(itemId)}>-</button>
            <h4>{itemQuantity}</h4>
            <button onClick={() => productIncrement(itemId)}>+</button>
        </div>)
}
export default UpdateProductCount;