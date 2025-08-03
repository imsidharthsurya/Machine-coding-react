import data from "./data.json";
import FileManager from "./FileManager";
function App() {
  return (
    <>
      <FileManager data={data} />
    </>
  );
}

export default App;
