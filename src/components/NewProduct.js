import React, { useState } from "react";

const NewProduct = () => {
  const [data, setData] = useState({
    productName:"",
    price:"",
    description:"",
    categoryId:"",
  });

  let handleSubmit = async (e) => {
    e.preventDefault();

    const { productName,price,description, categoryId} = data;
    const response = await fetch(
      `http://localhost:9090/api/v1/product/create`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
            productName: productName,
            price: price,
            description: description,
            categoryId: categoryId,
        }),
      }
    );

    const json = await response.json();

    if (response.status === 201) {
      console.log("Signed up");
      console.log("with these values" + JSON.stringify(json));
    }
    setData({
        productName:"",
        price:"",
        description:"",
        categoryId:"",
    });
  };

  let handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="productName"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
            value={data.productName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
            value={data.price}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
            value={data.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="categoryId" className="form-label">
            Category 
          </label>
          <input
            type="text"
            className="form-control"
            id="categoryId"
            name="categoryId"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
            value={data.categoryId}
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewProduct;
