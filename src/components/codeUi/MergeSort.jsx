import React from "react";
import { CodeBlock } from "./CodeBlock";
import { Link } from "react-router-dom";
export function MergeSort() {
    const code = `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  return result.concat(left.slice(i), right.slice(j));
}`;

    return (
        <>
            <div className="bg-black h-fit text-white">
                <button className=" mt-2 ml-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300">
                    <Link to="/help" className="block">Back</Link>
                </button>

                <div className="max-w-3xl mx-auto w-full">
                    <CodeBlock
                        language="javascript"
                        filename="MergeSort.js"
                        highlightLines={[2, 5, 6, 10, 14]}
                        code={code} />
                </div>
            </div>
        </>
    );
}