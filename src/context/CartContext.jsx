import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            const existing = state.items.find((i) => i.name === action.product.name);
            if (existing) {
                return {
                    ...state,
                    items: state.items.map((i) =>
                        i.name === action.product.name
                            ? { ...i, quantity: i.quantity + 1 }
                            : i
                    ),
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.product, quantity: 1 }],
            };
        }

        case "REMOVE_ITEM": {
            return {
                ...state,
                items: state.items.filter((i) => i.name !== action.name),
            };
        }

        case "UPDATE_QUANTITY": {
            return {
                ...state,
                items: state.items.map((i) =>
                    i.name === action.name
                        ? { ...i, quantity: Math.max(1, action.quantity) }
                        : i
                ),
            };
        }

        case "CLEAR_CART":
            return { ...state, items: [] };

        default:
            return state;
    }
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    const addItem = (product) => dispatch({ type: "ADD_ITEM", product });
    const removeItem = (name) => dispatch({ type: "REMOVE_ITEM", name });
    const updateQuantity = (name, quantity) =>
        dispatch({ type: "UPDATE_QUANTITY", name, quantity });
    const clearCart = () => dispatch({ type: "CLEAR_CART" });

    const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = state.items.reduce(
        (sum, i) => sum + parseFloat(i.price.replace("$", "")) * i.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{ items: state.items, addItem, removeItem, updateQuantity, clearCart, itemCount, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}