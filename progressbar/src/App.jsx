import ProgressBar from "./ProgressBar";
function App() {
  return (
    <>
      <ProgressBar progress={70} />
      <ProgressBar progress={60} />
      <ProgressBar progress={30} />
      <ProgressBar progress={20} />
      <ProgressBar progress={90} />
      <ProgressBar progress={100} />
      <ProgressBar progress={20} />
    </>
  );
}

export default App;
