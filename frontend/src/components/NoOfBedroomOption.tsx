const NoOfBedroomOption = ({ count }: { count: number }) => {
  return (
    <div className="bg-gray-400 text-white flex px-2 gap-2 py-1 border border-black rounded-lg my-2 ">
      <h1>{count}+ </h1>
      <h1>Bedroom</h1>
    </div>
  );
};

export default NoOfBedroomOption;
