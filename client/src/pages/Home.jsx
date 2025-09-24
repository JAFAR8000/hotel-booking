import React from "react";
import Hero from "../components/Hero";
import FeatureDestination from "../components/FeatureDestination";
import { roomsDummyData } from "../assets/assets";
import ExclusiveOffer from "../components/ExclusiveOffer";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureDestination />
      <ExclusiveOffer />
      <Testimonial />
      <NewsLetter />
    </>
  );
}
