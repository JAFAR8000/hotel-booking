import React from "react";
import { assets } from "../assets/assets";

export default function HotelReg() {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-100 flex items-center justify-center bg-black/70">
      <form>
        <img
          src={assets.regImage}
          alt="reg-img"
          className="w-1/2 rounded-xl hidden  md:block"
        />

        <div>
          <img
            src={assets.closeIcon}
            alt="close-icon"
            className="absolute top-4 right-4  cursor-pointer h-4 w-4"
          />
        </div>
      </form>
    </div>
  );
}
