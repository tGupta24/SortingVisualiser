import React from "react";
import { CodeBlock } from "./CodeBlock";
import { Link } from "react-router-dom";
export function InsertionSort() {
    const code = `function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}`;

    return (
        <>
            <div className="bg-black h-screen text-white">
                <button className=" mt-2 ml-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300">
                    <Link to="/help" className="block">Back</Link>
                </button>

                <div className="max-w-3xl mx-auto w-full">
                    <CodeBlock
                        language="javascript"
                        filename="InsertionSort.js"
                        highlightLines={[2, 5, 6, 8]}
                        code={code} />
                </div>

            </div >
        </>
    );
}
