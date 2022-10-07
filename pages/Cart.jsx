import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import ItemCard from '../Components/ItemCard';
import Summary from '../Components/Summary';
import UpdateProductCount from '../Components/UpdateProductCount';
import { AppContext } from "../Context/AppContext"

function Cart() {
    const [cartItems, setCartItems] = useContext(AppContext)
    const [cartItem, setCartItem] = useState({});
    const router = useRouter();
    const item = router.query;
    useEffect(() => {
        const itemExists = cartItems.find((product) => product.itemId === item.itemId);
        if (!itemExists) {
            setCartItems([...cartItems, item])
        }
    }, [])

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
    function totalAmount() {
        let totalAmount = 0;
        cartItems.map((item) => totalAmount += parseInt(item.itemPrice) * parseInt(item.itemQuantity))
        return totalAmount
    }
    return (
        <div>
            {cartItems?.map((item) => <div key={item.itemId}>
                <ItemCard
                    item={item} currentComponent="cart" />
                <UpdateProductCount item={item}
                    productIncrement={productIncrement} productDecrement={productDecrement} />
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