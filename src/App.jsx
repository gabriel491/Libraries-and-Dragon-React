import React from "react";
import FormLogin from "./components/FormLogin"; // Import the FormLogin component
import FormRegister from "./components/FormRegister";
import Forum from "./components/Forum";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
      </ul>

      <Routes>
        <Route exact path="/" element={<FormLogin />} />
        <Route exact path="/register" element={<FormRegister />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  );
}

export default App;
