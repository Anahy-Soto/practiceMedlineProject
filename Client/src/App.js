import { Route, Routes } from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage";
import Login from "./Components/Login";
import Archives from "./pages/Archives";
import Creation from "./pages/creation";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Archives" element={<Archives />} />
        <Route path="/Create" element={<Creation />} />
      </Routes>
    </div>
  );
}

export default App;
