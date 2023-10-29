import Post from "./Post"
import PostImage from '../../assets/images/pic.jpg'


type dataType={
  id:number,
  name:string,
  caption:string,
  postImage:string,
  likeCount:string,
  location:string,
  profileLink:string
}

const data:dataType[]=[
  {
  id:1,
  name:'Kausarhsn',
  caption:'There is Nothing ',
  postImage:PostImage,
  likeCount:'132',
  location:'dhaka',
  profileLink:'/profile'
  },
  {
  id:2,
  name:'Love',
  caption:'Second ',
  postImage:PostImage,
  likeCount:'132',
  location:'Chittgong',
  profileLink:'/profile'
  },
  {
  id:3,
  name:'Dubai',
  caption:'The View ',
  postImage:PostImage,
  likeCount:'132',
  location:'dubai',
  profileLink:'/profile'
  },
  {
  id:5,
  name:'newyork',
  caption:'The city View ',
  postImage:PostImage,
  likeCount:'132',
  location:'newyork',
  profileLink:'/profile'
  }
]

const Posts = () => {
  return (
    <div className="w-[470px] flex flex-col mt-5">
      {data.map((data)=>(
          <Post key={data.id} data={data}/>
      ))}
      
    </div>
  )
}

export default Posts