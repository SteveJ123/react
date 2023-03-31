import React from 'react';
import Slider from 'react-slick';


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
  };
  return (
    <div>      
      <Slider {...settings}>
        <div>
          <img src="https://static1.squarespace.com/static/5644bc92e4b0d1606755bcbe/t/5e1f74d0e0174509f72fa664/1579119826142/Logan+High.jpg" alt="Slide 1" height="600px" width="100%" />
        </div>
        <div>
          <img src="https://www.mhtn.com/mhtn-content/2018/10/k12_logan_hs_01.jpg" alt="Slide 2" height="600px" width="100%" />
        </div>
        <div>
          <img src="https://images.squarespace-cdn.com/content/v1/553aa87be4b0f714a500848a/1441407708326-5EDR7C5GXF17X516CLJ6/LHS_Reinvented.jpg?format=1500w" alt="Slide 3" height="600px" width="100%" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
