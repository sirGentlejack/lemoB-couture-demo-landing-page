import React from "react";
import Hero from "../Components/Hero";
import GallerySection from "../Components/GallerySection";
import TestimonialsSection from "../sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="page">
        <GallerySection />
        <TestimonialsSection />
      </div>
    </>
  );
}
