import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
const Game = lazy(() => import("./pages/Game"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div></div>}>
        <Game />
        <ToastContainer />
      </Suspense>
    </div>
  );
}

export default App;
