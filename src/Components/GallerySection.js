import React from "react";
import Gallery from "./Gallery";
import Data1 from "../Data1";

export default function GallerySection() {
  return (
    <div className="Gallery" id="gallery">
      <h3 className="sub_heading">Gallery</h3>
      <div className="card_list">
        {Data1.map((item) => (
          <Gallery key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
