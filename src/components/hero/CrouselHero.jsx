import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css"; // Custom styles
import GreetingCard from "../cardHolder/GreetingCard";
import newsp1t from "../../assets/newsp1template.png"
import newsp2t from "../../assets/newsp2template.png"
import newsp3t from "../../assets/newsp3template.png"
import newcommon1t from "../../assets/newcommon1template.png"
import newcommon2t from "../../assets/newcommon2template.png"


const HeroCarousel = () => {
  
  // Slick settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3 seconds per slide
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true, // Enable autoplay for tablets
          autoplaySpeed: 3000, 
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true, // Enable autoplay for mobile
          autoplaySpeed: 3000, 
        },
      },
    ],
  };

 
  const cardData = [
    { image: newsp1t, title: "use this template", id: "newsp1"  },
    { image: newsp2t, title: "use this template", id: "newsp2" },
    { image: newcommon2t, title: "use this template", id: "newcommon2" },
    { image: newsp3t, title: "use this template", id: "newsp3" },
    { image: newcommon1t, title: "use this template", id: "newcommon1" },
  ];

   return (

    <div className=" mx-auto px-4  md:mt-12 mb-8 w-5/6" >
      <Slider {...settings}>
        {cardData.map((data, index) => (
          <div key={index} className="p-3">
            <GreetingCard image={data.image} title={data.title} id={data.id} />
            {/* {alert(data.id)} */}
          </div>
        ))}
      </Slider>
    </div>


  );
};

export default HeroCarousel;
