import React from 'react';

function ExampleCarouselImage({ imageSrc, altText }) {
  return (
    <img
      src={imageSrc}
      alt={altText}
      className="carousel-image"
    />
  );
}

export default ExampleCarouselImage;
