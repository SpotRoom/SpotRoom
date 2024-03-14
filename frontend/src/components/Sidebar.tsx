import { filterTypeOptions, bedRoomCount } from "../utils/constants";

import locationLogo from "../assets/images/location-logo.png";

import RangeSlider from "./RangeSlider";
import RoomFilterOption from "./RoomFilterOption";
import NoOfBedroomOption from "./NoOfBedroomOption";

const Sidebar = () => {
  return (
    <div className=" w-3/12 p">
      {/*  LOCATION */}
      <div className="  relative  flex   items-center bg-gray-400 justify-center py-4 rounded-lg border border-black  ">
        <img className="w-12 absolute left-0 " src={locationLogo}></img>
        <h1 className=" text-white text-2xl text-center  font-bold  mx-auto px-12 w-full  ">
          India
        </h1>
      </div>
      {/* FILTERS */}
      <div>
        {/*  BUDGET FILTER */}
        <div className="my-8  border-t-2  border-t-gray-400">
          <div className=" relative pt-4">
            <h1 className="text-gray-400  pb-4 ">Filters</h1>

            <h1 className="text-xl font-bold ">Budget</h1>
            <p className="text text-gray-400">Choose a range below</p>
            <RangeSlider />
            <button className="absolute -bottom-8 right-0  bg-green-500 border border-black px-8 py-2 rounded-lg ">
              Apply
            </button>
          </div>
        </div>
        {/* TYPE FILTER */}
        <div className="border-t-2  border-t-gray-400  my-12 ">
          <div className=" relative pt-4">
            <h1 className="text-xl font-bold ">Type</h1>
            <p className="text text-gray-400">Choose an option below</p>
            {/*  ROOM FILTER OPTIONS */}
            {filterTypeOptions.map((filter) => (
              <RoomFilterOption key={filter?.id} {...filter} />
            ))}
          </div>
        </div>
        {/* BEDROOMS FILTER */}
        <div className="border-t-2  border-t-gray-400  my-12 ">
          <div className=" relative pt-4">
            <h1 className="text-xl font-bold ">Bedrooms</h1>
            <p className="text text-gray-400">Choose an option below</p>
            {/* BEDROOM SELECT OPTIONS */}
            {bedRoomCount.map((bedRoom) => (
              <NoOfBedroomOption count={bedRoom} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
