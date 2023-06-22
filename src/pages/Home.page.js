import React from "react";

import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/Premier.component";

const HomePage = () =>{
    return (
    <>
        <div className="container mx-auto px-7">
        <h1 className="text-2xl font-bold text-gray-800 px-3 py-2">
            The Best Of Live Events
        </h1>
        <EntertainmentCardSlider />
        <Premier />
        </div>
        
    </>)
}

export default HomePage; 