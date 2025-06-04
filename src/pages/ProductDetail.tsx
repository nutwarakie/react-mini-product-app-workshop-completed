import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductByID } from "../api/product";
import { IProduct } from "./ProductList";
import ReviewSection from "./components/CommentSection";

export default function ProductDetail() {
  const [product, setProduct] = useState<IProduct>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchProductByID(id).then(setProduct).catch(console.error);
    }
  }, [id]);

  return (
    <>
      <div className="detail-container">
        <Link to="/" className="link-back">
          back
        </Link>
        <img
          src={product?.image}
          alt="product detail img"
          className="detail-img"
        />
        <div className="detail-text-container">
          <div className="">
            <h1 className="detail-name">{product?.name}</h1>
            <p className="detail-desc">{product?.description}</p>
          </div>

          <p className="text-3xl">Price: {product?.price} ฿</p>
        </div>
        <ReviewSection review={product?.review ?? ""} />
      </div>
    </>
  );
}
