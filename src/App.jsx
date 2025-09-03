import Home from "./components/Home";
import { Route } from "react-router";
import { Routes } from "react-router";
import Player from "./components/Player";

function App() {
  return (
    <div className="min-h-dvh max-w-7xl mx-auto ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
