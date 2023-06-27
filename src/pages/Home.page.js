import React, {useState, useEffect} from "react";
import axios from "axios";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
// eslint-disable-next-line
import Premier from "../components/Premier/Premier.component.js";
import PosterSlider from "../components/PosterSider/PosterSider.component";
import TempPosters from "../config/tempPosters.config";


const HomePage = () =>{

        const[popularMovies, setPopularMovies] = useState([]);

        useEffect(() => {
            const requestPopularMovies = async () => {
             const getPopularMovies = await axios.get("/movie/popular");
             setPopularMovies(getPopularMovies.data.results);
        }
        requestPopularMovies();
    },[]);

    

    return (
    <>
        <div className="flex flex-col gap-8">

        <div className="container mx-auto px-7">
        <h1 className="text-2xl font-bold text-gray-800 px-3 py-2">
            The Best Of Live Events 
        </h1>
        
        <EntertainmentCardSlider />
        
        </div>
      <div className=" bg-navCol-200 py-16">
    
        <div className="container mx-auto px-10 ">
        <div className="flex">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" 
                alt="Rupay"
                className="w-full h-full"
            />
        </div>
        <PosterSlider images = {popularMovies} title = "Premiers" subitle="Brand New releases every Friday" isDark={true} />
        </div>
         </div>  
        </div>

        <div className="container mx-auto px-10">
            <PosterSlider
               images={popularMovies}
               title="Online Streaming Events"
               isDark={false} 
            />
        </div>
        <div className="container mx-auto px-10">
            <PosterSlider
               images={popularMovies}
               title="Outdoor Events"
               isDark={false} 
            />
        </div>
    </>)
}

export default HomePage; 