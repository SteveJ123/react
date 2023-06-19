import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from './store/actions';
import { addToCart } from './store/actions';
import './CartList.css';
import Navbar from './Navbar';
import Footer from './Footer';


const CartList: React.FC = () => {
    const cart: any = useSelector((state: any) => state.cart);

    const [cartItems, setCartItems] = useState(cart);

    const handleIncrement = (id: number) => {

        setCartItems((prevItems: any[]) =>
            prevItems.map((item) =>
                Number(item.id) === Number(id)
                    ? { ...item, quantity: item.quantity ? item.quantity + 1 : 1 }
                    : item
            )
        );
    };

    const handleDecrement = (id: number) => {
        setCartItems((prevItems: any[]) =>
            prevItems.map((item: any) =>
                item.id === id
                    ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) }
                    : item
            )
        );
    };

    const calculateTotal = () => {
        return cartItems.reduce(
            (total: any, item: any) => total + (item.price || 0) * (item.quantity || 0),
            0
        );
    };

    return (
        <div className="cart-container">
            <Navbar />
            <h2>Cart List</h2>
            {cartItems && cartItems.map((item: any) => (
                <div className="cart-item" key={item.id}>
                    <h3>{item.title}</h3>
                    <p>Price: {item.price}</p>
                    <p>
                        Quantity:
                        <button onClick={() => handleIncrement(item.id)}>+</button>
                        {item.quantity ? item.quantity : item.quantity = 1}
                        <button onClick={() => handleDecrement(item.id)}>-</button>
                    </p>
                </div>
            ))}
            <h3 className="cart-total">Total: {calculateTotal()}</h3>

            <Footer />
        </div>
    );
};

export default CartList;
