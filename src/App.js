import "./App.css";
import { useSelector } from "react-redux";


function App() {
  console.log("app load");

  const state = useSelector((state) => state);
  console.log(state);
  return <div className="App">

  </div>;
}

export default App;
