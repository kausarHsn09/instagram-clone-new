import { NavLink} from "react-router-dom";
import {AiOutlineTable,AiOutlineVideoCameraAdd,AiOutlineSave} from 'react-icons/ai'

const ProfileInfoLinks = () => {


  return (
    <div className="flex gap-x-10 justify-center mt-5">
      <NavLink
        to="post"
        className="font-medium  text-[14px] text-[#737373] uppercase flex items-center gap-x-1">
          <AiOutlineTable/>
        Post
      </NavLink>
      <NavLink
        to="reels"
        className="font-medium  text-[14px] text-[#737373] uppercase flex items-center gap-x-1">
          <AiOutlineVideoCameraAdd/>
        Reels
      </NavLink>
      <NavLink
        to="saved"
        className="font-medium text-[14px] text-[#737373] uppercase flex items-center gap-x-1">
          <AiOutlineSave/>
        Saved
      </NavLink>
    </div>
  );
};

export default ProfileInfoLinks;
