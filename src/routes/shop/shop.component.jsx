import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";

import "./shop.style.scss";

export const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products_wrapper">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
