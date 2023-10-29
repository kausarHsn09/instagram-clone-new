import { NavLink } from "react-router-dom";
import "./nav.css";
import { FiSettings } from "react-icons/fi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { BsInstagram } from "react-icons/bs";

import ProfilePicture from '../../assets/images/MY pic.png'

import InstagramLogo from "../../assets/icons-compoenents/InstagramLogo";
import HomeLogo from "../../assets/icons-compoenents/HomeLogo";
import SearchLogo from "../../assets/icons-compoenents/SearchLogo";
import ExploreLogo from "../../assets/icons-compoenents/ExploreLogo";
import ReelsLogo from "../../assets/icons-compoenents/ReelsLogo";
import MessageLogo from "../../assets/icons-compoenents/MessageLogo";
import NotificationsLogo from "../../assets/icons-compoenents/NotificationsLogo";
import CreateLogo from "../../assets/icons-compoenents/CreateLogo";

import MoreLogo from "../../assets/icons-compoenents/MoreLogo";

const Nav = () => {
  return (
    <>
      <div className="Nav  lg:h-screen md:h-screen lg:w-[250px] md:w-[70px] border-r-[1px] lg:flex md:flex flex-col  border-grey pt-[50px] justify-between	hidden  fixed left-0 bg-white">
        <NavLink to="/" className="navLogo flex pl-7 md:hidden lg:block">
          <InstagramLogo /> 
        </NavLink>
        <NavLink to="/" className="navLogo flex pl-5 lg:hidden md:block">
          <BsInstagram className='text-[25px]'/> 
        </NavLink>

        <div className="nav-items flex flex-col w-full h-full px-5 mt-5 gap-y-2">
          <NavLink to="/" className="navLinks lg:px-4 flex gap-x-2">
            <HomeLogo /> <p className="md:hidden hidden lg:block ">Home</p>
          </NavLink>

          <NavLink to="/" className="navLinks lg:px-4  flex gap-x-2">
            <SearchLogo /> <p className="md:hidden hidden lg:block ">Search</p>
          </NavLink>

          <NavLink to="/explore" className="navLinks lg:px-4  flex gap-x-2">
            <ExploreLogo />{" "}
            <p className="md:hidden hidden lg:block ">Explore</p>
          </NavLink>

          <NavLink to="/reels" className="navLinks lg:px-4 flex gap-x-2">
            <ReelsLogo /> <p className="md:hidden hidden lg:block ">Reels</p>
          </NavLink>

          <NavLink to="/message" className="navLinks lg:px-4 flex gap-x-2">
            <MessageLogo />{" "}
            <p className="md:hidden hidden lg:block ">Message</p>
          </NavLink>

          <button className="navLinks lg:px-4 flex gap-x-2">
            <NotificationsLogo />{" "}
            <p className="md:hidden hidden lg:block ">Notifications</p>
          </button>

          <NavLink to="/" className="navLinks  lg:px-4 flex gap-x-2">
            <CreateLogo /> <p className="md:hidden hidden lg:block ">Create</p>
          </NavLink>

          <NavLink to="/profile" className="navLinks lg:px-4  flex gap-x-2">
          <img className={`w-[30px] h-[30px] rounded-full object-cover`} src={ProfilePicture} alt="Profile icon"/>
            <p className="md:hidden hidden lg:block ">Profile</p>
          </NavLink>
        </div>

        <div className="moreBtn flex items-center justify-center w-full px-5">
          <button className=" flex py-5 gap-x-2 ">
            <MoreLogo /> <p className="md:hidden hidden lg:block ">More</p>
          </button>
        </div>
      </div>

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
        <button  className="flex gap-x-2">
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
  );
};

export default Nav;
