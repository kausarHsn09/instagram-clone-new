import { Link } from "react-router-dom"
const ProfileInfoLinks = () => {
  return (
    <div className="flex gap-x-3">
       <Link to='post'>Post</Link>
       <Link to='reels'>Reels</Link>
       <Link to='saved'>Saved</Link>
    
    </div>
  )
}

export default ProfileInfoLinks