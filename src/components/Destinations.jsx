import React from "react";
import Ethiopia from "../assets/ethiopia.jpg";
import Egypt from "../assets/egypt.jpg";
import Morocco from "../assets/morocco.jpg";
import Nigeria from "../assets/nigeria.jpg";
import Algeria from "../assets/algeria.jpg";

function Destinations() {
  return (
    <div className="container mx-auto mt-12">
      <h2 className="font-bold text-2xl mb-2">Trending destinations</h2>
      <p>Most popular choices for travelers from anywhere to Africa</p>
      <div className="flex flex-col gap-4 relative mt-3">
        <div className="grid grid-cols-2 gap-4">
          {/* Ethiopia */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute text-white text-xl font-bold m-5 mt-2 z-10">
              <p>Ethiopia</p>
            </div>
            <img
              src={Ethiopia}
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Ethiopia"
            />
          </div>

          {/* Egypt */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute text-white text-xl font-bold m-5 mt-2 z-10">
              <p>Egypt</p>
            </div>
            <img
              src={Egypt}
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Egypt"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Morocco */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute text-white text-xl font-bold m-5 mt-2 z-10">
              <p>Morocco</p>
            </div>
            <img
              src={Morocco}
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Morocco"
            />
          </div>

          {/* Nigeria */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute text-white text-xl font-bold m-5 mt-2 z-10">
              <p>Nigeria</p>
            </div>
            <img
              src={Nigeria}
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Nigeria"
            />
          </div>

          {/* Algeria */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute text-white text-xl font-bold m-5 mt-2 z-10">
              <p>Algeria</p>
            </div>
            <img
              src={Algeria}
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Algeria"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
