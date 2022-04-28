import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import * as combinedActionCreators from "./state/action-creators/ActionCreators";
import { bindActionCreators } from "redux";

function App() {
  console.log("app load");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const {depositMoney, withdrawMoney} = bindActionCreators(combinedActionCreators, dispatch);

  console.log(state);

  return <div className="App">
    <div>
      <h1> {state.accountreducer} </h1>
      <div>
        <button onClick={()=> depositMoney(1000)}> Increment</button>
        <button onClick={()=> withdrawMoney(1000)}> Decrement</button>
      </div>
    </div>
  </div>;
}

export default App;
