import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

import { Outlet } from "react-router-dom"
import ProfileTop from "../components/profile-info/ProfileTop"
import ProgileHighlights from "../components/profile-info/ProgileHighlight"
import ProfileInfoLinks from "../components/profile-post/ProfileInfoLinks"


const Profile = () => {
  const navigate= useNavigate()
  const location = useLocation()

  useEffect(()=>{
    if(location.pathname === '/profile') navigate('/profile/post')
  },[location.pathname,navigate ])

  return (
    <div className="w-full flex justify-center m-10 ">
     <div className="w-[930px] ">
     <ProfileTop/>
      <ProgileHighlights/>
      <hr className="mt-10" />
      <ProfileInfoLinks/>
    
      <Outlet/>
     </div>
    </div>
  )
}

export default Profile