import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const fetchData = async (e) => {
      const response = await fetch("http://localhost:9090/api/v1/product/all", {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      const json = await response.json();
      setProductData(json);
      console.log(json);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row my-4">
        {productData.map((product) => (
          <div key={product.productId} className="col-sm-6 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">
                  {product.description}
                </p>
                <Link to="" className="btn btn-primary">
                  see more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
