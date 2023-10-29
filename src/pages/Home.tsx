import Posts from "../components/posts/Posts"
import Stories from "../components/story/Stories"

import SuggestedFriends from "../components/suggested-friends/SuggestedFriends"


const Home = () => {
  return (
    <div className=" w-full  flex lg:flex-row md:flex-row sm:flex-col mt-[70px] lg:mt-10 md:mt-9">

      <div className="lg:w-full  lg:flex lg:flex-col lg:items-center lg:basis-2/3 lg:grow ">

        <div className="story flex w-full justify-center">
          <Stories/>
        </div>
        <div className="post flex w-full justify-center">
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