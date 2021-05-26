import Game from "./pages/Game";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Game />
      <ToastContainer />
    </div>
  );
}

export default App;
