import { FiSettings } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import Apparence from "./Apparence";

const More = ({ setOpenMore }) => {
  const ref = useRef();

  const [isOpenApparence, setIsOpenApparence] = useState(false);




  //Should Be refactor

  useEffect(() => {
    function outSideClick(event) {
      const target = event.target;
      if (ref.current && !ref.current.contains(target)) {
        setOpenMore(false);
      }
    }

    document.addEventListener("click", outSideClick, true);
  }, [setOpenMore]);



  return (
    <div
      ref={ref}
      className="absolute w-[265px] bg-white dark:bg-[#262626] left-5 bottom-5 z-10 
    rounded-lg shadow-2xl py-5 pl-5 pr-3"
    >
      {!isOpenApparence && (
        <div className="flex flex-col ">
          <button className="py-3 bg-white dark:bg-[#262626] dark:text-white  hover:bg-gray-100 dark:hover:bg-dkhover rounded-md flex items-center  px-4 gap-x-2">
            <FiSettings className="text-[20px] dark:text-white" />
            Setting
          </button>

          <button
            onClick={() => setIsOpenApparence((open) => !open)}
            className="py-3 bg-white dark:text-white dark:bg-[#262626] hover:bg-gray-100 dark:hover:bg-dkhover rounded-md flex items-center  px-4 gap-x-2"
          >
            <MdDarkMode className="text-[20px] dark:text-white" />
            Apparance
          </button>

          <button className="py-3 bg-white dark:text-white dark:bg-[#262626] hover:bg-gray-100 dark:hover:bg-dkhover  rounded-md flex items-center  px-4 gap-x-2">
            <IoIosLogOut className="text-[20px] dark:text-white" />
            Log out
          </button>
        </div>
      )}

      {/* Dark Mode UI */}

      {isOpenApparence && (
        <Apparence setIsOpenApparence={setIsOpenApparence} />
      )}


    </div>
  );
};

export default More;
