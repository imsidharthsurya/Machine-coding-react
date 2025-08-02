import { useState, useEffect } from "react";
import Carousel from "./Carousel";
function App() {
  const [imgData, setImgData] = useState([]);
  const getData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=10");
    const json = await data.json();
    const imgArray = json.products.map((obj) => {
      return obj.images[0];
    });
    setImgData(imgArray);
  };
  useEffect(() => {
    getData();
  }, []);
  return imgData.length === 0 ? (
    <p>Loading...</p>
  ) : (
    <>
      <Carousel data={imgData} />
    </>
  );
}

export default App;
