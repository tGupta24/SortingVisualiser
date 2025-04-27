import React from "react";
import { CodeBlock } from "./CodeBlock";
import { Link } from "react-router-dom";
export function SelectionSort() {
  const code = `function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}`;

  return (
    <><div className="bg-black h-screen text-white">

      <button className=" mt-2 ml-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300">
        <Link to="/help" className="block">Back</Link>
      </button>

      <div className="max-w-3xl mx-auto w-full">
        <CodeBlock
          language="cpp"
          filename="SelectionSort.cpp"
          highlightLines={[2, 4, 5, 7]}
          code={code} />
      </div>
    </div>
    </>
  );
}