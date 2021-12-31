import React from "react";
import "./imageList.css";
const imageList = (props) => {
  console.log(props.images);
  const images = props.images.map((image) => {
    return (
      <img
        alt={image.alt_description}
        key={image.id}
        src={image.urls.regular}
      />
    );
  });
  return <div className='image-list'>{images}</div>;
};
export default imageList;
