import React, { useContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Product } from "../interfaces/Shop.interface";
import ProductItem from "./Product";
import { CartContext } from ".";
import reduce from "lodash/reduce";
import { CartItem } from "../interfaces/CartItem.interface";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`http://localhost:3000/products`);
        const json = await res.json();
        setProducts(json);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const priceOfItems = reduce(
    cartContext.cart,
    (r: number, v: CartItem) => {
      return r + v.count * v.price;
    },
    0
  );

  return (
    <div className="App">
      <p>Total: {priceOfItems}</p>
      <p>Items: {cartContext.cart.length} </p>

      {products?.map((x: Product) => {
        return <ProductItem key={x.slug} product={x} />;
      })}
    </div>
  );
}

export default App;
