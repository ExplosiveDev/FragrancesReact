import type { FC } from "react";
import Navbar from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";


const App: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Navbar */}
        <Navbar />
        {/* Основний контент */}
        <main className="py-6">
          <Routes>
              <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
