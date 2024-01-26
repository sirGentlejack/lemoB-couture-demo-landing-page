import React from "react";
import Hero from "../Components/Hero";
import GallerySection from "../Components/GallerySection";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="page">
        <GallerySection />
      </div>
    </>
  );
}
