import React from "react";
import HeroSlider from "react-slick"

//Component
import { NextArrow, PrevArrow} from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal= () =>{

    const settingsLg = {
        arrows:true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll:1,
        centerPadding:"470px",
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    //this setting is for medium and small screen
    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
};

const images = [
    "https://images.unsplash.com/photo-1587270613291-b5c7042fc104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",

    "https://images.unsplash.com/photo-1579803815615-1203fb5a2e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",

    "https://images.unsplash.com/photo-1618944913480-b67ee16d7b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",

    "https://images.unsplash.com/photo-1623476408624-721c9185d569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",

    "https://images.unsplash.com/photo-1610714872434-3efb46a5c258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
]
return(
    <>

    <div className="lg:hidden">
    <HeroSlider {...settings}>
        {
            images.map((image) => (
                <div className="w-full h-64  md:h-80 py-3">
                    <img src= {image} alt = "testing" className="w-full h-full rounded-md"/>
                </div>

            ))
        }
        </HeroSlider>
    </div>

    <div className="hidden lg:block ">
    <HeroSlider {...settingsLg}>
        {
            images.map((image) => (
                <div className="w-full h-96 px-2 py-3">
                    <img src= {image} alt = "testing" className="w-full h-full rounded-md"/>
                </div>

            ))
        }
        </HeroSlider>
    </div>







       
    </>
)
}

export default HeroCarousal;