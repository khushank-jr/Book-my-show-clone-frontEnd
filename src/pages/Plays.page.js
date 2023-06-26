import React from "react";
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilter.componet";

const Plays = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-8/12">
            <h2 className="text-2xl font-bold mb-4">Plays in Raipur</h2>
            <div className="flex flex-wrap ">
              <div className="w-1/2 my-3  md:w-1/3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA4IEp1bCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361613-sywpbsxleb-portrait.jpg"
                  title="4 Play"
                  subtitle="English ₹500"
                />
              </div>
              <div className="w-1/2 my-3  md:w-1/3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA4IEp1bCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361613-sywpbsxleb-portrait.jpg"
                  title="4 Play"
                  subtitle="English ₹500"
                />
              </div>
              <div className="w-1/2 my-3  md:w-1/3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA4IEp1bCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361613-sywpbsxleb-portrait.jpg"
                  title="4 Play"
                  subtitle="English ₹500"
                />
              </div>
              <div className="w-1/2 my-3  md:w-1/3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA4IEp1bCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361613-sywpbsxleb-portrait.jpg"
                  title="4 Play"
                  subtitle="English ₹500"
                />
              </div>
              <div className="w-1/2 my-3  md:w-1/3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA4IEp1bCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361613-sywpbsxleb-portrait.jpg"
                  title="4 Play"
                  subtitle="English ₹500"
                />
              </div>
              <div className="w-1/2 my-3  md:w-1/3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA4IEp1bCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361613-sywpbsxleb-portrait.jpg"
                  title="4 Play"
                  subtitle="English ₹500"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 mb-4">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div className="flex flex-col gap-2">
            <div className="bg-gray-50 w-80 py-1 px-2">
            <PlaysFilter title="Date" tags={["Today","Tomorrow","This Weekend"]}/>
            </div>
            <div className="bg-gray-50 w-80 py-1 px-2">
            <PlaysFilter title="Language" tags={["Hindi","English"]}/>
            </div>
            <div className="bg-gray-50 w-80 py-1 px-2">
            <PlaysFilter title="Categoies" tags={["Theatre"]}/>
            </div>
            <div className="bg-gray-50 w-80 py-1 px-2">
            <PlaysFilter title="Genres" tags={["Drama","Adaptation","Historcal","Online Streaming Plays"]}/>
            </div>
            <div className="bg-gray-50 w-80 py-1 px-2">
            <PlaysFilter title="More Filters" tags={["Online Streaming","Kids Allowed","Outdoor Events"]}/>
            </div>






            
            
            
            
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
