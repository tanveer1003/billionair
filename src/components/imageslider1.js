import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './../custom.scss';

const Imageslider = ({ images, slidesToShow, autoplaySpeed }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Start the auto-scrolling after the component mounts
    const slider = sliderRef.current;
    const autoplayInterval = setInterval(() => {
      slider.slickNext();
    }, autoplaySpeed);

    // Stop the auto-scrolling when the component unmounts
    return () => clearInterval(autoplayInterval);
  }, [autoplaySpeed]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false, // We handle autoplay manually in the useEffect hook
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Imageslider;
