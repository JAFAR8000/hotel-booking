import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function HotelCard({ room, index }) {
  return (
    <Link
      to={"/rooms" + room._id}
      key={room._id}
      onClick={() => screenTo(0, 0)}
      className="relative max-w-70  rounded-xl overflow-hidden bg-white text-gray-500/50 shadow-[opx+4px_rgb(0,0,0,0,0.5)]"
    >
      <img src={room.images[0]} alt="" />
      {index % 2 === 0 && (
        <p className="px-3 py- absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">
          Best Seller
        </p>
      )}

      <div className="p-4 pt-5">
        <div className="">
          <p
            className="font-playfair font-medium text-xl
            text-gray-800 flex items-center justify-between"
          >
            {room.hotel.name}
            <div className="flex items-center gap-2">
              <img src={assets.starIconFilled} alt="star-icon" />
              4.5
            </div>
          </p>

          <div className="flex justify-between">
            <span className="flex items-center gap-1 ">
              <img src={assets.locationIcon} alt="location-icon" />
              <span className="text-xs">{room.hotel.address}</span>
            </span>
          </div>
          <div className="flex items-center justify-between gap-2 mt-4">
            <span className="text-xl text-gray-800">
              ${room.pricePerNight}{" "}
              <span className="text-gray-500 text-sm">/night</span>
            </span>

            <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
              Book now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
