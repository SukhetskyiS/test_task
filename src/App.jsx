import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Tweets } from "./pages/Tweets/Tweets";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/tweets/:userId"
          element={<Tweets />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
