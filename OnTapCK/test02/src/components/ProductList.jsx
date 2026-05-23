import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { filterState, productsState, searchTerm } from "../store/atom";
import { getProducts } from "../api/productAPI";
import Product from "./Product";
import { cartState } from "../store/atom";

const ProductList = () => {
  let [products, setProducts] = useRecoilState(productsState);
  let [loading, setLoading] = useState(true);
  let [cart, setCart] = useRecoilState(cartState);
  let [search, setSearch] = useRecoilState(searchTerm);
  let [filter, setFiler] = useRecoilState(filterState);
  let handleAddCart = (product) => {
    // cart.forEach((productInCart) => {
    //   if (productInCart.id != product.id) {
    setCart([...cart, product]);
    console.log(cart);
    //   }
    // });
  };
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    (async () => {
      try {
        let data = await getProducts();
        setProducts(data);
        setLoading(false);
        console.log(data);
      } catch (error) {}
    })();
  }, []);

  let displayedData = products.filter((product) => {
    let matchFilter = filter === "all" || product.category === filter;
    let matchSearch =
      !search || product.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div>
      {loading && <p>Đang tải.....</p>}
      {!loading && (
        <div className="product-list">
          {displayedData.length < 0 ? (
            <p>Không có dữ liệu phù hợp</p>
          ) : (
            displayedData.map((product) => {
              return (
                <Product
                  onAdd={handleAddCart}
                  key={product.id}
                  product={product}
                ></Product>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;
