import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const fetchData = async (e) => {
      const response = await fetch("http://localhost:9090/api/v1/category/all", {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      const json = await response.json();
      setCategoryData(json);
      console.log(json);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="list-group ">
        {categoryData.map((category)=>(
            <Link
            key={category.categoryId}
            to="/product-by-category"
            state={{categoryId:category.categoryId}}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center list-group-item-dark"
            aria-current="true"
          >{category.categoryName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
