import { Routes,BrowserRouter,Route } from "react-router-dom"

import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Reels from "./pages/Reels"
import Explore from "./pages/Explore"
import Settings from "./pages/Settings"

import Applayout from "./pages/Applayout"

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Applayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/profile">
            <Route index element={<Profile/>}/>
            <Route path="edit" element={<Settings/>}/>
          </Route>
          <Route path="/reels" element={<Reels/>}/>
        <Route path="/explore" element={<Explore/>}/>
        </Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
