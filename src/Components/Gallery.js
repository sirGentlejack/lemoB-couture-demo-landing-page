import React from "react";

export default function Gallery(props) {
  const { item, showHeading } = props;
  return (
    <div className="Gallery">
      <div className="img_box">
        <img
          src={require(`../images/${item.coverImg}`)}
          alt="lemob logo"
          className="product_img"
        />
        <div className="img_label"> {item.label}</div>
      </div>
    </div>
  );
}
