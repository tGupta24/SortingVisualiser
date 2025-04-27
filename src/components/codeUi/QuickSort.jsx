import React from "react";
import { CodeBlock } from "./CodeBlock";
import { Link } from "react-router-dom";
export function QuickSort() {
    const code = `#include <bits/stdc++.h>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
  
    // Choose the pivot
    int pivot = arr[high];
  
    // Index of smaller element and indicates 
    // the right position of pivot found so far
    int i = low - 1;

    // Traverse arr[low..high] and move all smaller
    // elements on left side. Elements from low to 
    // i are smaller after every iteration
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    
    // Move pivot after smaller elements and
    // return its position
    swap(arr[i + 1], arr[high]);  
    return i + 1;
}

// The QuickSort function implementation
void quickSort(vector<int>& arr, int low, int high) {
  
    if (low < high) {
      
        // pi is the partition return index of pivot
        int pi = partition(arr, low, high);

        // Recursion calls for smaller elements
        // and greater or equals elements
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
`;

    return (
        <><div className="bg-black h-fit  text-white">

            <button className=" mt-2 ml-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300">
                <Link to="/help" className="block">Back</Link>
            </button>

            <div className="max-w-3xl mx-auto w-full">
                <CodeBlock
                    language="cpp"
                    filename="QuickSort.cpp"
                    highlightLines={[2, 6, 7, 9]}
                    code={code} />
            </div>
        </div>
        </>
    );
}
