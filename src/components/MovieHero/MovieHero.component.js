import React from "react";
//import {BsShare} from "react-icons/bi";

const MovieHero = () => {
  
        return(
            <>
                <div className="md:hidden">
                    <img 
                        src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-flash-et00047401-1682497281.jpg"
                        alt="poster"
                    />
                </div>  

                <div className="hidden md:block lg:hidden">
                <img 
                        src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-flash-et00047401-1682497281.jpg"
                        alt="poster"
                    />
                </div>

                <div className="relative hidden lg:block" style={{height:"38rem"}}>
                
                <div className="absolute w-full h-full z-10 " 
                    style={{backgroundImage: "linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%,		rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%)"}}
                />

                <div className="absolute z-30 w-64 h-96 left-64 top-12 flex">
                    <img 
                        src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-flash-et00047401-1682497281.jpg"
                        alt="poster"
                        className="h-full w-full rounded-xl max-h-max"
                    />
                    <div className="mx-6">
                        <div className="w-56 h-15 text-white ">
                            <h1 className="w-full h-full text-5xl font-bold">The Flash</h1>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
                

                <img 
                        src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-flash-et00047401-1682497281.jpg"
                        alt="poster"
                        className=" w-full h-full "
                    />
                    
                </div>
            </>
        )
}

export default MovieHero;