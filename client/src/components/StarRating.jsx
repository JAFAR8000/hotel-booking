import React from "react";
import { assets } from "../assets/assets";

export default function StarRating({ rating = 4 }) {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <img
            alt="star-icon"
            src={
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            className="h-4.5 w-4.5"
          />
        ))}
    </>
  );
}
