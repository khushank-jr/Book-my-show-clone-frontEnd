import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { BiCameraMovie } from "react-icons/bi";

const Movie = () => {
  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>
            Worlds collide when Barry uses his superpowers to travel back in
            time in order to change the events of the past. But when his attempt
            to save his family inadvertently alters the future, Barry becomes
            trapped in a reality where General Zod has returned and there are no
            Super Heroes to turn to.
          </p>
        </div>
        <div className="my-8">
          <hr />
        </div>

        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">
            Applicable Offers
          </h1>
          <div className="flex items-start gap-2 bg-yellow-100 border-yellow-500 border-dashed border-2 rounded-md p-3 w-96">
            <div className="w-8 h-8">
              <BiCameraMovie className="h-full w-full" />
            </div>

            <div className="flex flex-col items-start">
              <h3 className="text-gray-900 text-lg font-semibold">
                10% Off on movie munchies!
              </h3>
              <p className="text-gray-600">Tap ti view details.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
