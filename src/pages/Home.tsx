import Posts from "../components/posts/Posts"
import Story from "../components/story/Story"
import SuggestedFriends from "../components/suggested-friends/SuggestedFriends"


const Home = () => {
  return (
    <div className=" w-full flex lg:flex-row md:flex-row sm:flex-col mt-[70px] lg:mt-5">

      <div className="mid-section lg:basis-2/3 lg:grow ">

        <div className="story ">
          <Story/>
        </div>
        <div className="post">
          <Posts/>
        </div>

      </div>

      <div className="suggested-friend lg:basis-1/3 md:hidden hidden lg:block lg:grow-0"> 
       <SuggestedFriends/>
      </div>
    </div>
  )
}

export default Home