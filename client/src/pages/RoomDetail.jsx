import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, roomsDummyData } from "../assets/assets";
import StarRating from "../components/StarRating";

export default function RoomDetail() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);
  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* rooms details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name}{" "}
            <span className="font-inter text-sm">{room.roomtype}</span>{" "}
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500">
            20% OFF
          </p>
        </div>
        {/* Room rating */}
        <div className="flex items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>

        {/* Room address */}
        <div className="flex items-centergap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>

        <div className="flex flex-col  lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="Room-image"
              className="w-full object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  onClick={() => setMainImage(image)}
                  key={index}
                  src={image}
                  alt="Room-image"
                  className={`cursor-pointer rounded-xl shadow-md object-cover ${
                    mainImage === image && "outline-3 outline-orange-300"
                  }`}
                />
              ))}
          </div>
        </div>

        {/* Room HighLight */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div>
            <h1 className="text-3xl font-palayfair">Experience Luxury Like Naver Before</h1>
          </div>
        </div>
      </div>
    )
  );
}
