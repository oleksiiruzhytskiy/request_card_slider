import { useEffect, useState } from "react";
import "./ImageSlider.css";

export const ImageSlider = ({ images }) => {
  const [showButton, setShowButton] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageSrc, setImageSrc] = useState(images[0].original); // Default to the first image

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;
      const currentImage = images[currentImageIndex];

      if (width < 480) {
        setImageSrc(currentImage.small);
      } else if (width < 1024) {
        setImageSrc(currentImage.medium);
      } else {
        setImageSrc(currentImage.large);
      }
    };

    updateImage(); 
    window.addEventListener("resize", updateImage);

    return () => window.removeEventListener("resize", updateImage);
  }, [images, currentImageIndex]); 

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="slider"
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <img src={imageSrc} alt={`Slide ${currentImageIndex}`} />

      {showButton && (
        <>
          <button onClick={prevImage} className="navigation-button prev-button">
            ◀
          </button>
          <button onClick={nextImage} className="navigation-button next-button">
            ▶
          </button>
        </>
      )}
    </div>
  );
};
