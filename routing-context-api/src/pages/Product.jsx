import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../context/ProductData";

export const Product = () => {
  const { data, setData } = useContext(productContext);

  console.log(data);

  return (
    <div>
      {data.map((product) => (
        <Link key={product.id} to={`/productDetails/${product.id}`}>
          <div>
            <h2>Id: {product.id}</h2>
            <h2>Product: {product.description}</h2>
            <h2>Price: {product.price}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};
