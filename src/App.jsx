import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Spa from "./pages/Spa";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full max-w-md mx-auto bg-stone-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/spa" element={<Spa />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
