import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { BubbleSort } from "./BubbleSort";

function SortingDetails({ algorithm }) {
    const descriptions = {
        "bubble-sort": "Bubble Sort is a simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
        "selection-sort": "Selection Sort divides the list into a sorted and an unsorted region, iteratively picking the smallest element from the unsorted region and swapping it with the first unsorted element.",
        "insertion-sort": "Insertion Sort builds the sorted list one element at a time, inserting each element into its correct position.",
        "merge-sort": "Merge Sort is a divide-and-conquer algorithm that splits the array into two halves, recursively sorts them, and merges them back together.",
        "quick-sort": "Quick Sort is a divide-and-conquer algorithm that selects a 'pivot' element and partitions the array into two subarrays based on whether they are smaller or greater than the pivot.",
        "heap-sort": "Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It first builds a max heap and then sorts the array by repeatedly extracting the maximum element."
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-3">{algorithm.replace("-", " ").toUpperCase()} Algorithm</h2>
            <p className="text-gray-600 mb-4">{descriptions[algorithm]}</p>
        </div>
    );
}

export function Help() {
    return (
        <div className="container mx-auto p-6">

            <button className=" mt-2 ml-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300">
                <Link to="/" className="block">Back</Link>
            </button>

            <h1 className="text-3xl font-semibold mb-6 text-center">Sorting Algorithms Help</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Bubble Sort Card */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                    <h2 className="text-2xl font-semibold mb-3">Bubble Sort</h2>
                    <p className="text-gray-600 mb-4">
                        A simple comparison-based algorithm that repeatedly steps through the list,
                        compares adjacent elements, and swaps them if they are in the wrong order.
                    </p>
                    <Link
                        to="bubble-sort"
                        className="text-blue-600 hover:text-blue-800 text-lg font-medium"
                    >
                        Learn More
                    </Link>
                </div>

                {/* Selection Sort Card */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                    <h2 className="text-2xl font-semibold mb-3">Selection Sort</h2>
                    <p className="text-gray-600 mb-4">
                        Divides the list into a sorted and an unsorted region, iteratively picking the smallest
                        element from the unsorted region and swapping it with the first unsorted element.
                    </p>
                    <Link
                        to="selection-sort"
                        className="text-blue-600 hover:text-blue-800 text-lg font-medium"
                    >
                        Learn More
                    </Link>
                </div>

                {/* Insertion Sort Card */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                    <h2 className="text-2xl font-semibold mb-3">Insertion Sort</h2>
                    <p className="text-gray-600 mb-4">
                        Builds the sorted list one element at a time, inserting each element into its correct position.
                    </p>
                    <Link
                        to="insertion-sort"
                        className="text-blue-600 hover:text-blue-800 text-lg font-medium"
                    >
                        Learn More
                    </Link>
                </div>

                {/* Merge Sort Card */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                    <h2 className="text-2xl font-semibold mb-3">Merge Sort</h2>
                    <p className="text-gray-600 mb-4">
                        A divide-and-conquer algorithm that splits the array into two halves, recursively sorts
                        them, and merges them back together.
                    </p>
                    <Link
                        to="merge-sort"
                        className="text-blue-600 hover:text-blue-800 text-lg font-medium"
                    >
                        Learn More
                    </Link>
                </div>

                {/* Quick Sort Card */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                    <h2 className="text-2xl font-semibold mb-3">Quick Sort</h2>
                    <p className="text-gray-600 mb-4">
                        A divide-and-conquer algorithm that selects a "pivot" element and partitions the array
                        into two subarrays based on whether they are smaller or greater than the pivot.
                    </p>
                    <Link
                        to="quick-sort"
                        className="text-blue-600 hover:text-blue-800 text-lg font-medium"
                    >
                        Learn More
                    </Link>
                </div>

                {/* Heap Sort Card */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                    <h2 className="text-2xl font-semibold mb-3">Heap Sort</h2>
                    <p className="text-gray-600 mb-4">
                        A comparison-based sorting algorithm that uses a binary heap data structure. It first
                        builds a max heap and then sorts the array by repeatedly extracting the maximum element.
                    </p>
                    <Link
                        to="heap-sort"
                        className="text-blue-600 hover:text-blue-800 text-lg font-medium"
                    >
                        Learn More
                    </Link>
                </div>
            </div>

            {/* Routes for individual sorting algorithms */}

        </div>
    );
}
