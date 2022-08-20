import React from "react";
import "./Slider.css";


const slidesInfo = [
  {
    src:
      "https://st3.depositphotos.com/15583058/i/600/depositphotos_193035430-stock-photo-top-view-palm-leaf-stylish.jpg",
    alt: "Project 1",
    desc: "Yourshoes",
    deploy: "https://yourshoes.vercel.app/"
  },
  {
    src:
      "https://www.ergodomus.it/wp-content/uploads/2022/07/MAP_TIMBER_Active_220628-960x720.jpg",
    alt: "Project 2",
    desc: "Countries App",
    deploy:"http://countries-api-pi-phi.vercel.app/"
  },
  {
    src:
      "https://www.lisafregosi.it/wp-content/uploads/2022/03/risotto-con-carletti-4-400x600.jpg",
    alt: "Project 3",
    desc: "Food App",
    deploy:"https://food-api-pi.vercel.app/"
  },
  {
    src:
      "https://www.gbeye.com/thumbnails/lightbox_715531_1553004363.jpg",
    alt: "Project 4",
    desc: "Pokemon App",
    deploy:"https://pokemon-api-pi-beryl.vercel.app/"
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href={slide.deploy} target="_blank" rel="noopener noreferrer"><img className="image-Slider" src={slide.src} alt={slide.alt} /></a>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
