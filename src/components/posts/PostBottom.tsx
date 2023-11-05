import { GrEmoji } from "react-icons/gr";
import CommentLogo from "../../assets/icons-compoenents/CommentLogo";
import LikeLogo from "../../assets/icons-compoenents/LikeLogo";
import SaveLogo from "../../assets/icons-compoenents/SaveLogo";
import ShareLogo from "../../assets/icons-compoenents/ShareLogo";

type propsType = {
  name: string;
  likeCount: string;
  caption: string;
};

const PostBottom = ({ name, likeCount, caption }: propsType) => {
  return (
    <div className="w-full mt-4">
      <div className="reactAction flex items-center justify-between">
        <div className="leftReactTion flex gap-x-5">
          <LikeLogo />
          <CommentLogo />
          <ShareLogo />
        </div>
        <SaveLogo />
      </div>
      <p className="text-[14px] dark:text-white font-medium mt-2">
        {likeCount} Likes
      </p>

      <div className="w-full">
        <p className="font-medium inline mr-1 dark:text-white ">{name}</p>
        <p className="inline dark:text-gray-200 ">{caption} </p>
      </div>

      <div className="post_Comments w-full flex justify-between mt-2 dark:bg-black">
        <input
          type="text"
          className="outline-none text-[14px] grow font-light dark:bg-black"
          placeholder="Add a comment"
        />
        <GrEmoji />
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default PostBottom;
