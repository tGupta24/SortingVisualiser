import React from "react";

export default function About() {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">About Sorting Algorithms (C++)</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Bubble Sort</h2>
                <p className="mb-2">
                    Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process repeats until the list is sorted.
                </p>
                <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm mb-2">
                    {`#include <vector>
#include <algorithm>

void bubbleSort(std::vector<int>& a) {
  int n = a.size();
  for (int i = 0; i < n - 1; ++i) {
    for (int j = 0; j < n - 1 - i; ++j) {
      if (a[j] > a[j + 1]) {
        std::swap(a[j], a[j + 1]);
      }
    }
  }
}`}
                </pre>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Selection Sort</h2>
                <p className="mb-2">
                    Selection Sort divides the array into a sorted and unsorted region. It repeatedly selects the smallest element from the unsorted region and moves it to the end of the sorted region.
                </p>
                <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm mb-2">
                    {`#include <vector>
#include <algorithm>

void selectionSort(std::vector<int>& a) {
  int n = a.size();
  for (int i = 0; i < n; ++i) {
    int minIdx = i;
    for (int j = i + 1; j < n; ++j) {
      if (a[j] < a[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx != i) {
      std::swap(a[i], a[minIdx]);
    }
  }
}`}
                </pre>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Insertion Sort</h2>
                <p className="mb-2">
                    Insertion Sort builds the final sorted array one element at a time. It picks the next element and inserts it into the correct position within the already sorted part of the array.
                </p>
                <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm mb-2">
                    {`#include <vector>

void insertionSort(std::vector<int>& a) {
  int n = a.size();
  for (int i = 1; i < n; ++i) {
    int key = a[i];
    int j = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      --j;
    }
    a[j + 1] = key;
  }
}`}
                </pre>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Merge Sort</h2>
                <p className="mb-2">
                    Merge Sort is a divide-and-conquer algorithm. It divides the array into halves, recursively sorts each half, and then merges the sorted halves.
                </p>
                <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm mb-2">
                    {`#include <vector>

void merge(std::vector<int>& a, int left, int mid, int right) {
  int n1 = mid - left + 1;
  int n2 = right - mid;
  std::vector<int> L(a.begin() + left, a.begin() + mid + 1);
  std::vector<int> R(a.begin() + mid + 1, a.begin() + right + 1);
  int i = 0, j = 0, k = left;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      a[k++] = L[i++];
    } else {
      a[k++] = R[j++];
    }
  }
  while (i < n1) a[k++] = L[i++];
  while (j < n2) a[k++] = R[j++];
}

void mergeSort(std::vector<int>& a, int left, int right) {
  if (left < right) {
    int mid = left + (right - left) / 2;
    mergeSort(a, left, mid);
    mergeSort(a, mid + 1, right);
    merge(a, left, mid, right);
  }
}`}
                </pre>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Quick Sort</h2>
                <p className="mb-2">
                    Quick Sort picks a 'pivot' element and partitions the array into elements less than the pivot and greater than the pivot. It then recursively sorts the partitions.
                </p>
                <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm mb-2">
                    {`#include <vector>

int partition(std::vector<int>& a, int low, int high) {
  int pivot = a[high];
  int i = low - 1;
  for (int j = low; j < high; ++j) {
    if (a[j] < pivot) {
      ++i;
      std::swap(a[i], a[j]);
    }
  }
  std::swap(a[i + 1], a[high]);
  return i + 1;
}

void quickSort(std::vector<int>& a, int low, int high) {
  if (low < high) {
    int pi = partition(a, low, high);
    quickSort(a, low, pi - 1);
    quickSort(a, pi + 1, high);
  }
}`}
                </pre>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Heap Sort</h2>
                <p className="mb-2">
                    Heap Sort builds a max heap from the input data, then repeatedly extracts the maximum element from the heap and rebuilds the heap until empty.
                </p>
                <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm">
                    {`#include <vector>

void heapify(std::vector<int>& a, int n, int i) {
  int largest = i;
  int left = 2 * i + 1;
  int right = 2 * i + 2;
  if (left < n && a[left] > a[largest]) largest = left;
  if (right < n && a[right] > a[largest]) largest = right;
  if (largest != i) {
    std::swap(a[i], a[largest]);
    heapify(a, n, largest);
  }
}

void heapSort(std::vector<int>& a) {
  int n = a.size();
  for (int i = n / 2 - 1; i >= 0; --i) heapify(a, n, i);
  for (int i = n - 1; i > 0; --i) {
    std::swap(a[0], a[i]);
    heapify(a, i, 0);
  }
}`}
                </pre>
            </section>
        </div>
    );
}