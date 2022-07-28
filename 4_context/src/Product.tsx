import React, { useContext } from "react";
import { CartContext, CartActions } from ".";
import { Product } from "../interfaces/Shop.interface";

type Props = {
  product: Product;
};

const ProductItem: React.FC<Props> = ({ product }): JSX.Element => {
  const cartContext = useContext(CartContext);

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${product?.thumb})`,
        }}
      ></div>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button
        onClick={() => {
          cartContext.setCart({
            type: CartActions.ADD,
            payload: {
              slug: product.slug,
              price: product.price,
              title: product.title,
              count: 1,
            },
          });
        }}
      >
        Dodaj do koszyka
      </button>
    </div>
  );
};

export default ProductItem;
