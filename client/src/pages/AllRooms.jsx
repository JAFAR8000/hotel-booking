import React from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";

export default function AllRooms() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col items-start text-left  ">
        <div>
          <h1 className="font-playfair text-4xl md:text-[40px ]">
            Hotel Rooms
          </h1>
          <p className="text-sm md:texte-base text-gray-500/90 max-w-174 mt-2">
            Take advantage of our limited time offers and special packages to
            enhance your stay and create an unforgettable memories
          </p>
        </div>

        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start py-19 gap-6 border-b border-b-gray-300 last:pb-30 last::border-0"
          >
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`), scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="hotel-img"
              title="View Rooms detais"
              className="max-h-50 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />

            <div className="flex flex-col gap-2 md:w-1/2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`), scrollTo(0, 0);
                }}
                zs
                className="text-gray-800 text-3xl font-playfair cursor-pointer"
              >
                {room.hotel.name}
              </p>

              <div className="flex items-center">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
              <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
              </div>
              {/* Room aminities */}
              <div className="flex items-center flex-wrap mt-3 mb-6 gap-4">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center py-2 rounded-lg gap-2 px-3 bg-[#F5F5FF]/70 "
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className="w-5 h-5"
                    />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* filter */}
      <div></div>
    </div>
  );
}
