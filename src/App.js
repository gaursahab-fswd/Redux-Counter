import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container text-center py-32 bg-sky-600">
      <h1 className="text-5xl">Increment/Decrement Counter</h1>
      <h4 className="text-3xl py-8">
        Using <u>React-Redux</u>
      </h4>

      <div>
        <button
          className="quantity_minus px-4 py-2 font-semibold text-sm bg-slate-800 hover:bg-slate-500		 text-white rounded shadow-sm"
          title="Decrement"
          onClick={() => dispatch(decNumber())}
        >
          -
        </button>
        &nbsp;
        <button
          className="quantity_plus px-4 py-2 font-semibold text-sm bg-slate-800	hover:bg-slate-500 text-white rounded shadow-sm"
          title="Increment"
          onClick={() => dispatch(incNumber())}
        >
          +
        </button>
        <h1 className="text-3xl text-white py-5">Counter = {myState}</h1>
      </div>
    </div>
  );
};

export default App;
