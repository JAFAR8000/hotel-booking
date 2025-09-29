import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetail from "./pages/RoomDetail";
import MyBookings from "./pages/MyBookings";
import HotelReg from "./components/HotelReg";
import LayOut from "./pages/hotelOwner/Layouts";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/AddRoom";
import ListRoom from "./pages/ListRoom";

import Layouts from "./pages/hotelOwner/Layouts";

export default function App() {
  const isOwnerpath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerpath && <Navbar />}
      {false && <HotelReg />}
      <div className="h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path="/my-bookins" element={<MyBookings />} />

          <Route path="/owner" element={<Layouts />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
