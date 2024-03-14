import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className=" w-10/12 mx-auto ">
      {/* 
   left side sidebar  
       - location box
       - filters
          - budget
          - type
          - bedrooms
   right side  house container 
       - search bar
       - house cards * n 
    */}
      <Sidebar />
    </div>
  );
};

export default Body;
