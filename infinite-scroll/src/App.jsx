import { useState, useEffect } from "react";
import InfiniteScroll from "./InfiniteScroll";

function App() {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const getData = async () => {
    const apiData = await fetch(
      `https://picsum.photos/v2/list?page=${pageNumber}&limit=5`
    );
    const json = await apiData.json();
    setData((prev) => [...prev, ...json]);
  };
  useEffect(() => {
    getData();
  }, [pageNumber]);
  if (data.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <InfiniteScroll data={data} setPageNumber={setPageNumber} />
    </>
  );
}

export default App;
