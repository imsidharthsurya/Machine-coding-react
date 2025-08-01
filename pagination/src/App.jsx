import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
const NO_OF_PRODUCTS = 10;
function App() {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const getProducts = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=194");
    const json = await data.json();
    setData(json.products);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const noOfPages = Math.ceil(data.length / NO_OF_PRODUCTS);
  const start = (activePage - 1) * 10;
  const end = start + NO_OF_PRODUCTS;

  return data.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <div className="page-container">
        {[...Array(noOfPages)].map((val, index) => {
          return (
            <span
              key={index}
              className={`page-tile ${
                activePage === index + 1 ? "active" : ""
              }`}
              onClick={() => setActivePage(index + 1)}
            >
              {index + 1}
            </span>
          );
        })}
      </div>
      <div className="products">
        {data.slice(start, end).map((product, index) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </>
  );
}

export default App;
