type propType = {
  title: string;
  count: number;
};

const RoomFilterOption = ({ title, count }: propType) => {
  return (
    <div className=" flex gap-4 text-gray-400 py-2">
      <input className="w-12 " type="checkbox"></input>
      <h1>
        {title}({count})
      </h1>
    </div>
  );
};

export default RoomFilterOption;
