import MoreLogo from "../../assets/icons-compoenents/MoreLogo";
import { Link } from "react-router-dom";
type propType={
    name: string;
    postImage: string;
    location: string;
    profileLink: string;
}

const PostTop = ({profileLink,postImage,name,location}:propType) => {
  return (
    <div className="postTop flex h-[50px] items-center justify-between">
    <div className="flex items-center">
     <Link to={profileLink}>
     <img src={postImage} className="w-[40px] h-[40px] rounded-full object-cover" alt="" /></Link>

      <div className="flex flex-col justify-evenly ml-2">
        <p className="text-[14px]  font-medium">{name}</p>
        <p className="text-[12px] ">{location}</p>
      </div>
    </div>

    <div>
      <MoreLogo />
    </div>
  </div>

  )
}

export default PostTop