import { useState } from "react";
import "../pages/Carousel.css";

function Carousel() {

  const images = [
    "https://images.pexels.com/photos/7653116/pexels-photo-7653116.jpeg",
    "https://images.pexels.com/photos/7446995/pexels-photo-7446995.jpeg",
    "https://images.pexels.com/photos/7447009/pexels-photo-7447009.jpeg"
  ];
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrent(
      (current - 1 + images.length) % images.length
    );
  };
  return (
    <div className="carousel">
      <button onClick={prevSlide}>❮</button>
      <img
        src={images[current]}
        alt="Carrusel"/>
      <button onClick={nextSlide}> ❯ </button>
    </div>
  );
}

export default Carousel;