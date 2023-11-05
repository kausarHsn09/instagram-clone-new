import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleModal } from "../modal/modalSlice";
import { useState } from "react";

import More from "./More";

import "./nav.css";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import ProfilePicture from "../../assets/images/MY pic.png";

import InstagramLogo from "../../assets/icons-compoenents/InstagramLogo";
import HomeLogo from "../../assets/icons-compoenents/HomeLogo";
import SearchLogo from "../../assets/icons-compoenents/SearchLogo";
import ExploreLogo from "../../assets/icons-compoenents/ExploreLogo";
import ReelsLogo from "../../assets/icons-compoenents/ReelsLogo";
import MessageLogo from "../../assets/icons-compoenents/MessageLogo";
import NotificationsLogo from "../../assets/icons-compoenents/NotificationsLogo";
import CreateLogo from "../../assets/icons-compoenents/CreateLogo";

const NavDesktop = () => {
  const dispatch = useDispatch();
  const [openMore, setOpenMore] = useState(false);

  function handleOpenClick() {
    dispatch(toggleModal(true));
  }

  return (
    <div className="Nav  lg:h-screen md:h-screen lg:w-[250px] md:w-[70px] border-r-[1px] lg:flex md:flex flex-col  border-grey pt-[50px] justify-between hidden fixed left-0 bg-white dark:bg-black">
      <NavLink to="/" className="navLogo flex pl-7 md:hidden lg:block">
        <InstagramLogo />
      </NavLink>
      <NavLink to="/" className="navLogo flex pl-5 lg:hidden md:block">
        <BsInstagram className="text-[25px]" />
      </NavLink>

      <div className="nav-items flex flex-col w-full h-full px-5 mt-5 gap-y-2">
        <NavLink
          to="/"
          className="navLinks hover:bg-gray-100 dark:hover:bg-gray-900 lg:px-4 flex gap-x-2"
        >
          <HomeLogo />{" "}
          <p className="md:hidden hidden lg:block dark:text-white dar">Home</p>
        </NavLink>

        <NavLink
          to="/"
          className="navLinks hover:bg-gray-100 dark:hover:bg-gray-900 lg:px-4  flex gap-x-2"
        >
          <SearchLogo />{" "}
          <p className="md:hidden hidden lg:block dark:text-white">Search</p>
        </NavLink>

        <NavLink
          to="/explore"
          className="navLinks hover:bg-gray-100 dark:hover:bg-gray-900 lg:px-4  flex gap-x-2"
        >
          <ExploreLogo />{" "}
          <p className="md:hidden hidden lg:block dark:text-white">Explore</p>
        </NavLink>

        <NavLink
          to="/reels"
          className="navLinks hover:bg-gray-100 dark:hover:bg-gray-900 lg:px-4 flex gap-x-2"
        >
          <ReelsLogo />{" "}
          <p className="md:hidden hidden lg:block dark:text-white">Reels</p>
        </NavLink>

        <NavLink
          to="/message"
          className="navLinks hover:bg-gray-100 dark:hover:bg-gray-900 lg:px-4 flex gap-x-2"
        >
          <MessageLogo />{" "}
          <p className="md:hidden hidden lg:block dark:text-white">Message</p>
        </NavLink>

        <button className="navLinks hover:bg-gray-100 dark:hover:bg-gray-900 lg:px-4 flex gap-x-2">
          <NotificationsLogo />{" "}
          <p className="md:hidden hidden lg:block dark:text-white">
            Notifications
          </p>
        </button>

        <button
          className="navLinks hover:bg-gray-100 dark:hover:bg-gray-900 lg:px-4 flex gap-x-2"
          onClick={handleOpenClick}
        >
          <CreateLogo />{" "}
          <p className="md:hidden hidden lg:block dark:text-white">Create</p>
        </button>

        <NavLink
          to="/profile/post"
          className="navLinks hover:bg-gray-100 dark:hover:bg-gray-900 lg:px-4  flex gap-x-2"
        >
          <img
            className={`w-[30px] h-[30px] rounded-full object-cover`}
            src={ProfilePicture}
            alt="Profile icon"
          />
          <p className="md:hidden hidden lg:block dark:text-white">Profile</p>
        </NavLink>
      </div>

      <div className="moreBtn flex items-center w-full px-5 hover:bg-gray-100 dark:hover:bg-gray-900">
        <button
          className=" flex w-full py-5 md:px-0 px-7 gap-x-2 items-center "
          onClick={() => setOpenMore(true)}
        >
          <AiOutlineMenu className="text-[20px] dark:text-white" />{" "}
          <p className="md:hidden hidden lg:block dark:text-white">More</p>
        </button>
      </div>

      {openMore && <More setOpenMore={setOpenMore} openMore={openMore} />}
    </div>
  );
};

export default NavDesktop;
