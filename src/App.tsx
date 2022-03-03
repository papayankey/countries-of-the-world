import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppBar } from "./components";
import { Countries, Country } from "./pages";
import { globalStyles } from "./stitches/globalStyles";

// const isEvening = () => {
//   let hours = new Date().getHours();
//   if (hours < 6 || hours > 19) return true;
//   return false;
// };

const App: React.FC = () => {
  // css reset
  globalStyles();
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/name/:name" element={<Country />} />
        {/* 404 Route */}
        <Route path="*" element={<p>Page does not exist</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
