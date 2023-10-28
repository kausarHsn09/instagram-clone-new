import Post from "./Post"
import PostImage from '../../assets/images/pic.jpg'

type dataType={
  id:number,
  name:string,
  caption:string,
  postImage:string,
  likeCount:string
}

const data:dataType[]=[{
  id:1,
  name:'Kausarhsn',
  caption:'There is Nothing ',
  postImage:PostImage,
  likeCount:'132'
}]

const Posts = () => {
  return (
    <div className="flex flex-col">
       <Post/>
    </div>
  )
}

export default Posts