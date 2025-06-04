import { use, useEffect, useState } from "react";
import { fetchProductList } from "../api/product";
import { Link, Navigate } from "react-router-dom";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  review: string;
}

export default function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductList()
      .then((data) => {
        setProducts(data);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div className="page-container">
          <h1 className="title">Product List</h1>
          <div className="product-container">
            {products.map((product: IProduct) => (
              <div key={product.id} className="product-item-container">
                <img
                  src={product.image}
                  alt="product img"
                  className="product-img"
                />
                <div className="product-detail-container">
                  <p className="product-name ">{product.name}</p>
                  <p className="product-desc">{product.description}</p>
                  <p className="product-price"> Price: {product.price} ฿</p>
                  <Link to={`/${product.id}`} className="link">
                    see more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
