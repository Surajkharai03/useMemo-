import { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState();

  const expensiveTask = (num) => {
    console.log("Inside Expensive Task");

    for (let i = 0; i < 1000000; i++) {}    // expensive operation 

    return num * 2;
  };

  const doubleValue = useMemo(   // Calculate expensiveTask(input) and remember the result. Recalculate only when input changes.
    () => expensiveTask(input),
    [input]            // "Run the calculation again when input changes."
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="w-[420px] bg-white rounded-xl shadow-md p-6">

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-gray-800">
          useMemo Example
        </h1>

        <p className="text-gray-500 text-sm mt-1 mb-6">
          Understanding memoization in React
        </p>


        {/* Counter */}
        <div className="border rounded-lg p-4 mb-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Counter
              </p>

              <p className="text-2xl font-semibold text-gray-800">
                {count}
              </p>
            </div>

            <button
              onClick={() => setCount(count + 1)}
              className="bg-blue-600 hover:bg-blue-700
                         text-white px-4 py-2
                         rounded-lg transition"
            >
              Increment
            </button>

          </div>

        </div>


        {/* Input */}
        <div className="mb-5">

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter a number
          </label>

          <input
            type="number"
            value={input}     // displays the state value in the input box.
            onChange={(e) => setInput((e.target.value))}    // Whenever I type something in the input box, take what I typed and save it in input.
            placeholder="Enter number"
            className="w-full border border-gray-300
                       rounded-lg px-3 py-2
                       outline-none
                       focus:border-blue-500"
          />

        </div>


        {/* Result */}
        <div className="bg-gray-50 border rounded-lg p-4">

          <p className="text-sm text-gray-500">
            Double Value
          </p>

          <p className="text-3xl font-semibold text-blue-600 mt-1">
            {doubleValue}
          </p>

        </div>


        {/* Explanation */}
        <div className="mt-5 text-sm text-gray-500 leading-5">

          <p>
            <span className="font-semibold text-gray-700">
              useMemo
            </span>{" "}
            remembers the result of the expensive calculation.
          </p>

          <p className="mt-2">
            Changing the counter does not run the calculation again.
            Changing the input does.
          </p>

        </div>

      </div>

    </div>
  );
};

export default App;