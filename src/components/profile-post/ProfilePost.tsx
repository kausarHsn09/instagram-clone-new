import postPicture from '../../assets/images/pic.jpg'


type postDataType ={
  id:number
  likes: number,
  postCover: string
}

const postData:postDataType[] =[
  {
    id:1,
    likes: 12,
    postCover: postPicture
  },
  {
    id:2,
    likes: 34,
    postCover: postPicture
  },
  {
    id:3,
    likes: 30,
    postCover: postPicture
  },
  {
    id:4,
    likes: 40,
    postCover: postPicture
  },
]

const ProfilePost = () => {
  return (
    <div className='w-full flex flex-wrap mt-5 gap-1 '>

      {postData.map((items)=>(
         <ProfilePostsingle key={items.id} items={items}/>
      ))}



    </div>
  )
}

type ItmType={
  items:{
    id:number
    likes: number,
    postCover: string
  }
}

const ProfilePostsingle = ({items}:ItmType) => {
  return (
    <div>
      <img src={items.postCover} className='w-[305px] h-[305px] object-cover ' alt="" />
    </div>
  )
}



export default ProfilePost