import React, { useState } from "react";

import Title from "../components/Title";
import { assets } from "../assets/assets";

export default function AddRoom() {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: "0",
    amenities: {
      "Free Wifi": false,
      "Free Breakfast": false,
      "Room Services": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });
  return (
    <form>
      <Title
        align="left"
        font="outfit"
        title="Add Room"
        subTitle="Fill in the detail carfully anf 
    accurate room detail, pricing and amenities, to enhnace the user booking experience "
      />

      {/* upload area for the images */}
      <p className="text-gray-800 mt-10">Images</p>
      <div className="grid grid-cols-2 sm:flex gap-4 my-2  flex-wrap">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImages${key}`} key={key}>
            <img
              className="max-h-13 cursor-pointer opcity-80"
              src={
                images[key]
                  ? URL.createObjectURL(images[key])
                  : assets.uploadArea
              }
              alt=""
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImages${key}`}
              hidden
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>
    </form>
  );
}
