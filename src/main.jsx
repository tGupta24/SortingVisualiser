import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SortingVisualizer from './components/SortingVisualizer'
import { Help } from './components/codeUi/Help'
import { BubbleSort } from './components/codeUi/BubbleSort'
import { SelectionSort } from './components/codeUi/SelectionSort'
import { InsertionSort } from './components/codeUi/InsertionSort'
import { MergeSort } from './components/codeUi/MergeSort'
import { QuickSort } from './components/codeUi/QuickSort'
import { HeapSort } from './components/codeUi/HeapSort'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path="/help" element={<Help />} />
        <Route path="/" element={<SortingVisualizer />} />
        <Route path="help/bubble-sort" element={<BubbleSort />} />
        <Route path="help/selection-sort" element={<SelectionSort />} />
        <Route path="help/insertion-sort" element={<InsertionSort />} />
        <Route path="help/merge-sort" element={<MergeSort />} />
        <Route path="help/quick-sort" element={<QuickSort />} />
        <Route path="help/heap-sort" element={<HeapSort />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
