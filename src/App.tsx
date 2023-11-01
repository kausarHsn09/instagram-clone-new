import { Routes,BrowserRouter,Route } from "react-router-dom"


import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Reels from "./pages/Reels"
import Explore from "./pages/Explore"
import Settings from "./pages/Settings"

import ProfilePost from "./components/profile-post/ProfilePost"
import ProfileSaved from "./components/profile-post/ProfileSaved"
import ProfileReels from "./components/profile-post/ProfileReels"

import Applayout from "./pages/Applayout"
import Message from "./pages/Message"
z
function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Applayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/profile"  element={<Profile/>}>
            <Route >
              <Route path="post" element={<ProfilePost/>}/>
              <Route path="saved" element={<ProfileSaved/>}/>
              <Route path="reels" element={<ProfileReels/>}/>
            </Route>
            <Route path="edit" element={<Settings/>}/>
          </Route>
          <Route path="/reels" element={<Reels/>}/>
          <Route path="/message" element={<Message/>}/>
          <Route path="/explore" element={<Explore/>}/>
        </Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
