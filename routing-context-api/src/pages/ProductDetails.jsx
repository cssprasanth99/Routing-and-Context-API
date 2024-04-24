import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  let { id } = useParams();
  let [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Error in fetching", error));
  }, []);

  return (
    <>
      <div>
        <button>Sort</button>
      </div>
      <div>
        <h2>Id:{data.id}</h2>
        <h2>Name: {data.title}</h2>
        <img src={data.image} alt="no image" />
        <h2>Category: {data.category}</h2>
        <h2>description: {data.description}</h2>
      </div>
    </>
  );
};
