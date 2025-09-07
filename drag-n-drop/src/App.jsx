import { data } from "./data";
import DragDrop from "./DragDrop";
function App() {
  return (
    <>
      <h1>Drag n Drop</h1>
      <DragDrop listData={data} />
    </>
  );
}

export default App;
