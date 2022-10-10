import React, { useState } from 'react';
import { useContext } from 'react';
import ItemCard from '../Components/ItemCard';
import Summary from '../Components/Summary';
import UpdateProductCount from '../Components/UpdateProductCount';
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
        <div>
            {cartItems?.map((item) => <div key={item.itemId}>
                <ItemCard
                    item={item} currentComponent="cart" cartItem={cartItem} setCartItem={setCartItem} />
                <UpdateProductCount item={item} cartItem={cartItem} setCartItem={setCartItem} />
            </div>)}
            <h1>Summary</h1>
            {cartItems?.map((item) =>
                <Summary key={item.itemId} item={item} />)}
            <h1>Total:{totalAmount()}</h1>
            <button>Check out</button>
        </div>
    )
}

export default React.memo(Cart);