import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [multiply, setMultiply] = useState(1);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold text-3xl p-5  border-b-2 w-full text-center shadow-md  ">
          Counter
        </h1>
        <p className="text-2xl font-bold">{count}</p>
        <div className="flex justify-between gap-5">
          <button
            onClick={() => setCount((prevCount) => prevCount - multiply)}
            className="border border-black rounded-sm bg-gray-100 hover:bg-gray-200  p-2 "
          >
            -
          </button>
          <button
            onClick={() => setCount((prevCount) => prevCount + multiply)}
            className="border border-black rounded-sm bg-gray-100 hover:bg-gray-200  p-2 "
          >
            +
          </button>
        </div>
        <div className="flex gap-5">
          <p className="text-lg font-medium">Increment/Decrement by</p>
          <input
            type="number"
            value={multiply}
            onChange={(e) => setMultiply(Number(e.target.value))}
            className="border border-black w-24 p-1 text-lg font-semibold rounded-sm "
          />
        </div>
        <button
          onClick={() => setCount(0)}
          className="border border-black rounded-sm bg-gray-100 hover:bg-gray-200  py-1 px-3 text-lg font-semibold rou"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
