import React, { useState } from "react";

const NewCategory = () => {
  const [data, setData] = useState({
    categoryName: "",
  });

  let handleSubmit = async (e) => {
    e.preventDefault();

    const { categoryName } = data;
    const response = await fetch(
      `http://localhost:9090/api/v1/category/create`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          categoryName: categoryName,
        }),
      }
    );

    const json = await response.json();

    if (response.status === 201) {
      console.log("Signed up");
      console.log("with these values" + JSON.stringify(json));
    }
    setData({
      categoryName: "",
    });
  };

  let handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Category Name
          </label>
          <input
            type="text"
            className="form-control"
            id="categoryName"
            name="categoryName"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
            value={data.categoryName}
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

export default NewCategory;
