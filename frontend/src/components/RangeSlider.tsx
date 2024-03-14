const RangeSlider = () => {
  return (
    <div className="w-10/12  mx-auto relative my-6  py-8 ">
      <span className="text-sm text-gray-400 0 absolute start-0 top-0">
        5000
      </span>

      <span className="text-sm text-gray-400  absolute end-0 top-0">50000</span>
      <label htmlFor="labels-range-input" className="sr-only">
        Labels range
      </label>
      <input
        type="range"
        value={"1000"}
        min="5000"
        max="50000"
        className="w-full h-1 bg-gray-400  border accent-gray-400   appearance-none cursor-pointer  "
      />
    </div>
  );
};

export default RangeSlider;
