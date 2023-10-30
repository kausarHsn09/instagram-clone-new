import ProfilePicture from "../../assets/images/pic.jpg";
import { AiFillSetting } from "react-icons/ai";
const ProfileTop = () => {
  return (
    <div className="w-full flex">
      <img
        className="w-[150px] h-[150px] object-cover rounded-full"
        src={ProfilePicture}
      />

      <div className="p_right_side">
        <div className="flex">
          <p>kausar Hsn</p>
          <button>Edit Profile</button>
          <AiFillSetting />
        </div>

        <div className="flex">
          <p className="inline">120 posts</p>
          <p className="inline">200 Followers</p>
          <p className="inline">10 Following</p>
        </div>

        <div className="">
          <p>kausarhsn</p>
          <p>Bio</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
