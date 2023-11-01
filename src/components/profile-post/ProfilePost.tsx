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
    <div className='w-full grid grid-cols-3	mt-5 gap-1 '>

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
    <div >
      <img src={items.postCover} alt="" />
    </div>
  )
}



export default ProfilePost