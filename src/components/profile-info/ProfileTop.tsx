import ProfilePicture from "../../assets/images/pic.jpg";
import { AiFillSetting } from "react-icons/ai";
const ProfileTop = () => {
  return (
    <div className="w-full flex items-center justify-center lg:gap-x-20 md:gap-x-20 gap-x-4">
      <img
        className="lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-[80px] h-[80px] object-cover rounded-full"
        src={ProfilePicture}
      />

      <div className="p_right_side ">

          <div className="flex gap-x-5">
          <p className="text-[20px] font-norma">kausarhsn</p>
            <button className="bg-[#EFEFEF] px-3 py-1 rounded-md">
              Edit Profile
            </button>
            <AiFillSetting className="text-[25px]" />
          </div>
    

        <div className="flex gap-x-5 lg:mt-3 md:mt-3">
          <p className="inline">
            <span className="font-medium text-[16px]">180</span> posts
          </p>
          <p className="inline">
            <span className="font-medium text-[16px]">180</span> Followers
          </p>
          <p className="inline">
            <span className="font-medium text-[16px]">180</span> Following
          </p>
        </div>

        <div className="lg:mt-3 md:mt-3">
          <p className="font-medium">kausarhsn</p>
          <p className="mt-5 lg:mt-1 md:mt-1">Bio</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
