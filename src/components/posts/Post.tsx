

import PostBottom from "./PostBottom";
import PostTop from "./PostTop";

type propType = {
  data:{
    id: number;
    name: string;
    caption: string;
    postImage: string;
    likeCount: string;
    location: string;
    profileLink: string;
  }
};

const Post = ({
  data: { id, name, caption, postImage, likeCount, location, profileLink },
}: propType) => {
  return (
    <div className="w-full mt-4">
      <PostTop name={name} location={location} postImage={postImage} profileLink={profileLink}/>
      <img src={postImage} alt="" className="w-full h-[470px] object-cover rounded-sm mt-2"/>
     
     <PostBottom name={name} likeCount={likeCount} caption={caption}/>
      

    </div>
  );
};

export default Post;
