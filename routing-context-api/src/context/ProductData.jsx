import { createContext, useEffect, useState } from "react";
import axios from "axios";

let productContext = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <productContext.Provider value={{ data, setData }}>
      {children}
    </productContext.Provider>
  );
};

export { ProductProvider, productContext };
