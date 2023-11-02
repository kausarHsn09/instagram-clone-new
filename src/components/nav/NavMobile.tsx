import { NavLink } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { LiaUserFriendsSolid } from "react-icons/lia";

import { useDispatch } from "react-redux";
import {toggleModal} from '../modal/modalSlice'

import ProfilePicture from '../../assets/images/MY pic.png'


import HomeLogo from "../../assets/icons-compoenents/HomeLogo";

import ExploreLogo from "../../assets/icons-compoenents/ExploreLogo";
import ReelsLogo from "../../assets/icons-compoenents/ReelsLogo";
import MessageLogo from "../../assets/icons-compoenents/MessageLogo";

import CreateLogo from "../../assets/icons-compoenents/CreateLogo";

const NavMobile = () => {
  const dispatch = useDispatch()
  
  function handleOpenClick(){
    dispatch(toggleModal(true))
  }
 
  return (
    <>
    <div className="bg-white lg:hidden md:hidden flex w-full h-[50px] border-b-[1px] px-10 border-grey items-center justify-between fixed z-100">
    <FiSettings className="text-[20px]" />
    <p>kausarhsn</p>
    <LiaUserFriendsSolid className="text-[25px]" />
  </div>

    <div className="lg:hidden md:hidden  fixed bottom-1 flex w-full h-[50px] border-t-[1px] border-grey items-center justify-center gap-x-12 bg-white z-10">
    <NavLink to="/" className="flex gap-x-2">
      <HomeLogo />
    </NavLink>
    <NavLink to="/explore" className="flex gap-x-2">
      <ExploreLogo />
    </NavLink>
    <NavLink to="/reels" className="flex gap-x-2">
      <ReelsLogo />
    </NavLink>
    <button  className="flex gap-x-2" onClick={handleOpenClick}>
      <CreateLogo />
    </button>
    <NavLink to="/message" className="flex gap-x-2">
      <MessageLogo />
    </NavLink>
    <NavLink to="/profile" className="flex gap-x-2">
    
      <img className={`w-[30px] h-[30px] rounded-full object-cover`} src={ProfilePicture} alt="Profile icon"/>
    </NavLink>
  </div>
  </>
  )
}

export default NavMobile