import React from "react";
import { CodeBlock } from "./CodeBlock";
import { Link } from "react-router-dom";
export function HeapSort() {
  const code = `function heapSort(arr) {
  const n = arr.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements one by one
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  
  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}`;

  return (
    <>
      <div className="bg-black h-fit text-white">
        <div>
          <button className=" mt-2 ml-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300">
            <Link to="/help" className="block">Back</Link>
          </button>

        </div>
        <div className="max-w-3xl mx-auto w-full">
          <CodeBlock
            language="cpp"
            filename="HeapSort.cpp"
            highlightLines={[2, 5, 9, 14, 16]}
            code={code} />
        </div>
      </div>
    </>
  );
}
