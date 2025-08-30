import { useState } from "react";
import VirtualizedList from "./VirtualizedList";

function App() {
  const [data, setData] = useState(
    Array.from({ length: 10000 }, (_, i) => i + 1)
  );
  return (
    <>
      <h1>Virtualization</h1>
      <VirtualizedList data={data} itemHeight={28} totalHeight={450} />
    </>
  );
}

export default App;
