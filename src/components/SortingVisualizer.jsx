import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
// import { FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


const generateRandomArray = (size) =>
    Array.from({ length: size }, () => Math.floor(Math.random() * 60) + 10);


const getBubbleSortSteps = (arr) => {
    const steps = [];
    const a = [...arr];
    const n = a.length;
    steps.push({ array: [...a], message: "Start Bubble Sort", type: "start", sortedIndices: [] });
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            const sorted = Array.from({ length: i }, (_, k) => n - 1 - k);
            steps.push({ array: [...a], message: `Compare ${a[j]} & ${a[j + 1]}`, type: "compare", indices: [j, j + 1], sortedIndices: sorted });
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                steps.push({ array: [...a], message: `Swap ${a[j]} & ${a[j + 1]}`, type: "swap", indices: [j, j + 1], sortedIndices: sorted });
            }
        }
    }
    steps.push({ array: [...a], message: "Bubble Sort Complete 🎉", type: "done", sortedIndices: Array.from({ length: n }, (_, k) => k) });
    return steps;
};

const getSelectionSortSteps = (arr) => {
    const steps = [];
    const a = [...arr];
    const n = a.length;
    steps.push({ array: [...a], message: "Start Selection Sort", type: "start", sortedIndices: [] });
    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            const sorted = Array.from({ length: i }, (_, k) => k);
            steps.push({ array: [...a], message: `Compare ${a[minIdx]} & ${a[j]}`, type: "compare", indices: [minIdx, j], sortedIndices: sorted });
            if (a[j] < a[minIdx]) {
                minIdx = j;
                steps.push({ array: [...a], message: `New min at ${a[minIdx]}`, type: "select", indices: [minIdx], sortedIndices: sorted });
            }
        }
        if (minIdx !== i) {
            [a[i], a[minIdx]] = [a[minIdx], a[i]];
            const sorted = Array.from({ length: i + 1 }, (_, k) => k);
            steps.push({ array: [...a], message: `Swap ${a[i]} & ${a[minIdx]}`, type: "swap", indices: [i, minIdx], sortedIndices: sorted });
        }
    }
    steps.push({ array: [...a], message: "Selection Sort Complete 🎉", type: "done", sortedIndices: Array.from({ length: n }, (_, k) => k) });
    return steps;
};

const getInsertionSortSteps = (arr) => {
    const steps = [];
    const a = [...arr];
    const n = a.length;
    steps.push({ array: [...a], message: "Start Insertion Sort", type: "start", sortedIndices: [] });
    for (let i = 1; i < n; i++) {
        const key = a[i];
        let j = i - 1;
        const sortedWhile = Array.from({ length: i }, (_, k) => k);
        steps.push({ array: [...a], message: `Pick key ${key}`, type: "key", indices: [i], sortedIndices: sortedWhile });
        while (j >= 0 && a[j] > key) {
            steps.push({ array: [...a], message: `Compare ${a[j]} > ${key}`, type: "compare", indices: [j, i], sortedIndices: sortedWhile });
            a[j + 1] = a[j];
            steps.push({ array: [...a], message: `Move ${a[j]} to ${j + 1}`, type: "shift", indices: [j, j + 1], sortedIndices: sortedWhile });
            j--;
        }
        a[j + 1] = key;
        const sortedNow = Array.from({ length: i + 1 }, (_, k) => k);
        steps.push({ array: [...a], message: `Insert key ${key} at ${j + 1}`, type: "insert", indices: [j + 1], sortedIndices: sortedNow });
    }
    steps.push({ array: [...a], message: "Insertion Sort Complete 🎉", type: "done", sortedIndices: Array.from({ length: n }, (_, k) => k) });
    return steps;
};

const getMergeSortSteps = (arr) => {
    const steps = [];
    let current = [...arr];
    const n = current.length;
    const merge = (L, R, start) => {
        const result = []; let i = 0, j = 0;
        while (i < L.length && j < R.length) {
            steps.push({ array: [...current], message: `Compare ${L[i]} & ${R[j]}`, type: "compare", indices: [start + i, start + L.length + j], sortedIndices: [] });
            if (L[i] <= R[j]) result.push(L[i++]); else result.push(R[j++]);
            current[start + result.length - 1] = result[result.length - 1];
            const sortedNow = Array.from({ length: start + result.length }, (_, k) => k);
            steps.push({ array: [...current], message: `Merge at ${start + result.length - 1}`, type: "merge", indices: [start + result.length - 1], sortedIndices: sortedNow });
        }
        while (i < L.length) {
            result.push(L[i++]); current[start + result.length - 1] = result[result.length - 1];
            steps.push({ array: [...current], message: `Merge leftover at ${start + result.length - 1}`, type: "merge", indices: [start + result.length - 1], sortedIndices: Array.from({ length: start + result.length }, (_, k) => k) });
        }
        while (j < R.length) {
            result.push(R[j++]); current[start + result.length - 1] = result[result.length - 1];
            steps.push({ array: [...current], message: `Merge leftover at ${start + result.length - 1}`, type: "merge", indices: [start + result.length - 1], sortedIndices: Array.from({ length: start + result.length }, (_, k) => k) });
        }
        return result;
    };
    const split = (sub, start) => {
        if (sub.length < 2) return sub;
        const mid = Math.floor(sub.length / 2);
        steps.push({ array: [...current], message: `Divide at ${mid}`, type: "divide", indices: [start + mid], sortedIndices: [] });
        const L = split(sub.slice(0, mid), start);
        const R = split(sub.slice(mid), start + mid);
        return merge(L, R, start);
    };
    split(arr, 0);
    steps.push({ array: [...current], message: "Merge Sort Complete 🎉", type: "done", sortedIndices: Array.from({ length: n }, (_, k) => k) });
    return steps;
};

const getQuickSortSteps = async (arr) => {
    const steps = [];
    const a = [...arr];
    const n = a.length;
    const recurse = async (low, high) => {
        if (low < high) {
            const pivot = a[high]; let i = low;
            steps.push({ array: [...a], message: `Pivot = ${pivot}`, type: "pivot", indices: [high], sortedIndices: [] });
            for (let j = low; j < high; j++) {
                steps.push({ array: [...a], message: `Compare ${a[j]} < ${pivot}?`, type: "compare", indices: [j, high], sortedIndices: [] });
                if (a[j] < pivot) { [a[i], a[j]] = [a[j], a[i]]; steps.push({ array: [...a], message: `Swap ${a[i]} & ${a[j]}`, type: "swap", indices: [i, j], sortedIndices: [] }); i++; }
            }
            [a[i], a[high]] = [a[high], a[i]];
            const sortedNow = [...Array(high - low + 1).keys()].map(k => low + k);
            steps.push({ array: [...a], message: `Move pivot to ${i}`, type: "swap", indices: [i, high], sortedIndices: sortedNow });
            await recurse(low, i - 1);
            await recurse(i + 1, high);
        }
    };
    steps.push({ array: [...a], message: "Start Quick Sort", type: "start", sortedIndices: [] });
    await recurse(0, n - 1);
    steps.push({ array: [...a], message: "Quick Sort Complete 🎉", type: "done", sortedIndices: Array.from({ length: n }, (_, k) => k) });
    return steps;
};

// Heap Sort Implementation
const getHeapSortSteps = (arr) => {
    const steps = [];
    const a = [...arr];
    const n = a.length;
    steps.push({ array: [...a], message: "Start Heap Sort", type: "start", sortedIndices: [] });

    const heapify = (heapSize, root) => {
        let largest = root;
        const left = 2 * root + 1;
        const right = 2 * root + 2;
        if (left < heapSize) {
            steps.push({ array: [...a], message: `Compare ${a[left]} & ${a[largest]}`, type: "compare", indices: [left, largest], sortedIndices: [] });
            if (a[left] > a[largest]) largest = left;
        }
        if (right < heapSize) {
            steps.push({ array: [...a], message: `Compare ${a[right]} & ${a[largest]}`, type: "compare", indices: [right, largest], sortedIndices: [] });
            if (a[right] > a[largest]) largest = right;
        }
        if (largest !== root) {
            [a[root], a[largest]] = [a[largest], a[root]];
            steps.push({ array: [...a], message: `Swap ${a[root]} & ${a[largest]}`, type: "swap", indices: [root, largest], sortedIndices: [] });
            heapify(heapSize, largest);
        }
    };

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(n, i);
    }

    // Extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        [a[0], a[i]] = [a[i], a[0]];
        const sorted = Array.from({ length: n - i }, (_, k) => n - 1 - k);
        steps.push({ array: [...a], message: `Swap root & index ${i}`, type: "swap", indices: [0, i], sortedIndices: sorted });
        heapify(i, 0);
    }

    steps.push({ array: [...a], message: "Heap Sort Complete 🎉", type: "done", sortedIndices: Array.from({ length: n }, (_, k) => k) });
    return steps;
};




export default function SortingVisualizer() {
    const [customInput, setCustomInput] = useState("");
    const [useCustom, setUseCustom] = useState(false);
    const [array, setArray] = useState(generateRandomArray(10));
    const [steps, setSteps] = useState([]);
    const [stepIndex, setStepIndex] = useState(0);
    const [algorithm, setAlgorithm] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, settime] = useState(300);
    const logRef = useRef(null);



    useEffect(() => { if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight; }, [stepIndex]);

    useEffect(() => {
        if (!isPlaying || !algorithm) return;
        if (stepIndex === steps.length - 1) {
            setIsPlaying(false);
            return;
        }
        const timer = setTimeout(() => setStepIndex(i => Math.min(i + 1, steps.length - 1)), time);
        return () => clearTimeout(timer);
    }, [isPlaying, stepIndex, steps.length, time, algorithm]);

    const resetAll = () => {
        const newArray = useCustom
            ? customInput.split(",").map(Number).filter(n => !isNaN(n))
            : generateRandomArray(10);
        setArray(newArray);
        setSteps([]);
        setStepIndex(0);
        setAlgorithm(null);
        setIsPlaying(false);
    };



    const startSort = async (type) => {
        resetAll();
        setAlgorithm(type);
        let computed;
        switch (type) {
            case "bubble": computed = getBubbleSortSteps(array); break;
            case "selection": computed = getSelectionSortSteps(array); break;
            case "insertion": computed = getInsertionSortSteps(array); break;
            case "merge": computed = getMergeSortSteps(array); break;
            case "quick": computed = await getQuickSortSteps(array); break;
            case "heap": computed = getHeapSortSteps(array); break;
            default: return;
        }
        setSteps(computed);
        setStepIndex(0);
        // setIsPlaying(true);
    };
    const handleArray = () => {
        if (useCustom) {
            // Split customInput into an array of numbers
            const numbers = customInput.split(',').map(num => num.trim());

            // Check if each number is valid
            for (let i = 0; i < numbers.length; i++) {
                const num = parseInt(numbers[i], 10);
                if (isNaN(num) || num <= 0 || num > 60) {
                    alert("Please enter a valid array with values greater than 0 and less than or equal to 60.");
                    return false;
                }
            }
        }
        return true;
    };

    const togglePlay = () => {
        const isValid = handleArray();
        if (!isValid) return;
        if (!algorithm) return;
        setIsPlaying(p => !p);
    };

    const prev = () => { setIsPlaying(false); setStepIndex(i => Math.max(i - 1, 0)); };
    const next = () => { setIsPlaying(false); setStepIndex(i => Math.min(i + 1, steps.length - 1)); };
    const current = steps[stepIndex] || { array, sortedIndices: [] };

    return (
        <>
            <div className="flex sm:hidden items-center justify-center min-h-screen text-center bg-gray-100 text-red-500">
                Not Available on Small Screen Right Now
            </div>

            <div className=" h-fit bg-gray-100 hidden sm:flex">
                <div className="w-3/4 p-6 overflow-hidden">
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
                        <div className="flex justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Sorting Visualizer</h2>
                            </div>
                            <div className="flex items-center space-x-1">  {/* Flex container to align icon and text */}
                                <Link to="/help" className="text-blue-600 hover:text-blue-800 flex space-x-1 items-center">
                                    <div>help</div>
                                    <img src="/help.png" className="w-4 h-4" alt="" /> {/* Icon with a color */}
                                </Link>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Enter your own array with valus less than 60(comma separated):</label>
                            <input
                                type="text"
                                value={customInput}
                                onChange={e => setCustomInput(e.target.value)}
                                className="border px-3 py-1 w-full rounded mb-2"
                                placeholder="e.g. 23,12,45,8"
                            />
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    checked={useCustom}
                                    onChange={() => setUseCustom(v => !v)}
                                    className="mr-2"
                                />
                                Use Custom Array
                            </label>
                        </div>

                        {/* Sorting Buttons */}
                        <div className="flex flex-wrap gap-3 mb-4 items-center">
                            {['bubble', 'selection', 'insertion', 'merge', 'quick', 'heap'].map(alg => (
                                <button key={alg} onClick={() => startSort(alg)} disabled={!!algorithm}
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50">
                                    {alg.charAt(0).toUpperCase() + alg.slice(1)} Sort
                                </button>
                            ))}
                        </div>

                        {/* Controls below Sorting Buttons */}
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <button onClick={resetAll}
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                                Set Array
                            </button>

                            <button onClick={togglePlay} disabled={!algorithm}
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50">
                                {isPlaying ? 'Pause' : 'Start'}
                            </button>

                            <div className="flex items-center gap-2">
                                <label className="text-sm">Time:</label>
                                <input
                                    type="range"
                                    min="50"
                                    max="1000"
                                    value={time}
                                    onChange={e => settime(+e.target.value)}
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>

                        {/* Visualization Bars */}
                        <div className="flex-1 flex items-end overflow-x-auto space-x-2 pb-4">
                            {current.array.map((val, idx) => {
                                let bg = 'bg-indigo-500';
                                const { indices = [], sortedIndices = [] } = current;
                                if (sortedIndices.includes(idx)) bg = 'bg-gray-500';
                                else if (indices.includes(idx)) {
                                    if (['compare', 'divide', 'key', 'pivot'].includes(current.type)) bg = 'bg-red-500';
                                    if (['swap', 'merge', 'shift', 'insert'].includes(current.type)) bg = 'bg-green-500';
                                }
                                return (
                                    <motion.div
                                        key={idx}
                                        className={`${bg} flex-1 rounded flex items-end justify-center text-white font-semibold relative`}
                                        style={{ height: `${val * 3}px`, minWidth: '30px' }}
                                        transition={{ duration: 0.2 }}>

                                        <div className="absolute bottom-[-15px] text-xs text-black">{val}</div>

                                        <div className="flex-1 rounded flex items-end justify-center text-white font-semibold" style={{ height: `${val * 3}px`, minWidth: '30px' }} />
                                    </motion.div>
                                );
                            })}
                        </div>


                        {/* Previous and Next Buttons */}
                        {algorithm && (
                            <div className="flex justify-center gap-4 mt-2">
                                <button onClick={prev} disabled={stepIndex === 0}
                                    className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50">Previous</button>
                                <button onClick={next} disabled={stepIndex === steps.length - 1}
                                    className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50">Next</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Log / Steps */}
                <div className="w-1/4 p-6 bg-gray-200 overflow-auto" ref={logRef}>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-3">Details</h3>
                        <div className="text-sm h-[75vh] overflow-auto space-y-1">
                            {steps.slice(0, stepIndex + 1).map((s, i) => (
                                <p key={i} className={['swap', 'merge'].includes(s.type) ? 'text-green-800' : 'text-gray-800'}>
                                    {s.message}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div>
                <FloatingDock />
            </div> */}
            </div>
        </>

    );
}