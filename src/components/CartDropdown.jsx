import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function CartDropdown({ onClose }) {
    const { items, removeItem, updateQuantity, totalPrice } = useCart();

    return (
        <motion.div
            className="cart-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
        >
            <div className="cart-dropdown-header">
                <h3>Your Cart</h3>
                <button onClick={onClose} className="cart-dropdown-close">✕</button>
            </div>

            {items.length === 0 ? (
                <p className="cart-dropdown-empty">Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-dropdown-items">
                        {items.map((item) => (
                            <div key={item.name} className="cart-dropdown-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />

                                <div className="cart-item-info">
                                    <span className="cart-item-name">{item.name}</span>
                                    <span className="cart-item-price">{item.price}</span>

                                    <div className="cart-item-quantity">
                                        <button onClick={() => updateQuantity(item.name, item.quantity - 1)}>−</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.name, item.quantity + 1)}>+</button>
                                    </div>
                                </div>

                                <button
                                    onClick={() => removeItem(item.name)}
                                    className="cart-item-remove"
                                    aria-label="Remove item"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-dropdown-footer">
                        <div className="cart-dropdown-total">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <button className="cart-checkout-button">Checkout</button>
                    </div>
                </>
            )}
        </motion.div>
    );
}