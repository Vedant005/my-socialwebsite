import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Bookmark from "./pages/Bookmark";
import { RequiresAuth } from "./components/requiresAuth.js";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
