import React from "react";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";

export default function App() {
  const isOwnerpath = useLocation().pathname.includes("owner");
  return <div>{!isOwnerpath && <Navbar />}</div>;
}
