import ProfilePic from "../../assets/images/pic.jpg";

const SuggestedFriends = () => {
  return (
    <div className="w-[230px] mt-[10px]">

      <div className="prileS w-full flex item h-[45px] items-center justify-between">
        <div className="flex items-center">
          <img
            src={ProfilePic}
            alt=""
            className="w-[40px] h-[40px] rounded-full object-cover"
          />

          <div className="flex flex-col items-start  ml-2 ">
            <p className="font-medium text-[14px]">kausarhsn</p>
            <p className="font-normal text-[16px] text-[#A4A4A4]">
              Kausar Hasan
            </p>
          </div>
        </div>

        <p className="text-blue font-medium text-[14px]">visit</p>
      </div>
       
      <div className="flex w-[240px] justify-between mt-10">
         <p className="text-[#A4A4A4]">Suggested for you</p>
         <p className="text-[14px] font-medium ">see all</p>
      </div>

    <div className="suggestedFR w-full flex item h-[45px] items-center justify-between   mt-10">
        <div className="flex items-center">
          <img
            src={ProfilePic}
            alt=""
            className="w-[40px] h-[40px] rounded-full object-cover"
          />

          <div className="flex flex-col items-start  ml-2 ">
            <p className="font-medium text-[14px]">kausarhsn</p>
            <p className="font-normal text-[16px] text-[#A4A4A4]">
              Kausar Hasan
            </p>
          </div>
        </div>

        <p className="text-blue font-medium text-[14px]">visit</p>
      </div>

      
    </div>
  );
};

export default SuggestedFriends;
