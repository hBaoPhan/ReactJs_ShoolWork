import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product, onAdd }) => {
  let navigate = useNavigate();

  return (
    <div className="product-card">
      <img src={product.img} alt="" />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <button onClick={() => onAdd(product)}>Thêm vào giỏ hàng</button>
      <button onClick={() => navigate(`/product/${product.id}`)}>Xem</button>
    </div>
  );
};

export default Product;
