import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../api/productAPI";

const ProductDetail = () => {
  let { id } = useParams();
  let [product, setProduct] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        let data = await getProductById(id);
        setProduct(data);
        console.log(data);
      } catch (error) {}
    })();
  }, [id]);
  return (
    <div>
      {product && (
        <div className="card">
          <div className="product-detail">
            <button
              onClick={() => {
                navigate(-1);
              }}
            >
              QUay lại
            </button>
            <img src={product.img} alt="" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
