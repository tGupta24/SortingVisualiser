import About from "./components/About";
import VisualizerWrapper from "./components/SortingVisualizer";

function App() {
  return (
    <div className="App">
      <VisualizerWrapper />
      <footer className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} SortingVisualizer. All rights reserved.
        </p>
      </footer>
      {/* <About /> */}
    </div>
  );
}

export default App;
