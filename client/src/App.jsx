import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetail from "./pages/RoomDetail";

export default function App() {
  const isOwnerpath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerpath && <Navbar />}
      <div className="h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}
