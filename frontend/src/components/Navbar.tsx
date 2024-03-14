import titleLogo from "../assets/images/spotRoom.png";
import addLogo from "../assets/images/add-logo.png";
import userDummyLogo from "../assets/images/user-logo.png";

const Navbar = () => {
  return (
    <div className=" w-10/12 mx-auto flex  justify-between">
      {/*  RYT SIDE TITLE */}
      <img className="w-40" src={titleLogo} alt="logo"></img>
      {/*  LEFT SIDE NAV LINKS */}
      <div className=" w-4/12 flex relative items-center justify-between ">
        {/*  ADD ROOM BTN */}
        <div className="flex text-lg  justify-between w-52   border border-black rounded-lg bg-green-500 py-4 px-4 text-white font-bold  ">
          <img src={addLogo} className="w-8 rounded-2xl"></img>
          <h1> Add your room</h1>
        </div>
        <img className="w-32 h-28 " src={userDummyLogo}></img>
      </div>
    </div>
  );
};

export default Navbar;
