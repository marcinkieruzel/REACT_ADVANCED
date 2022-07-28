import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartItem } from "../interfaces/CartItem.interface";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


export enum CartActions {
  ADD = "ADD"
}

const initialState : CartItem[] = []

export const CartContext = React.createContext<{
  cart: CartItem[];
  setCart: React.Dispatch<any>;
}>({
  cart: [],
  setCart: (arg: any) => arg,
});

const reducer = (
  state: CartItem[],
  action: { type: CartActions; payload: CartItem }
) => {
  if (action.type === CartActions.ADD) {
    return [...state, action.payload];
  }
  return state;
};

const Shop = () => {
  const [cart, setCart] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <App />
    </CartContext.Provider>
  );
};

root.render(
  <React.StrictMode>
    <Shop />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
