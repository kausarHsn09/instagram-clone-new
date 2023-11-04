import {FiSettings} from 'react-icons/fi'
import {MdDarkMode} from 'react-icons/md'
import {IoIosLogOut} from 'react-icons/io'
import { useEffect, useRef } from 'react'
const More = ({setOpenMore}) => {
  const ref = useRef()

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
    <div ref={ref} className="absolute w-[265px] bg-white left-5 bottom-5 z-10 
    rounded-lg shadow-2xl py-5 pl-5 pr-3">
      <div className="flex flex-col ">
        <button className="py-3 bg-white hover:bg-gray-100 rounded-md flex items-center  px-4 gap-x-2"><FiSettings className='text-[20px]'/>Setting</button>
        
        <button className="py-3 bg-white hover:bg-gray-100 rounded-md flex items-center  px-4 gap-x-2"><MdDarkMode className='text-[20px]'/>Apparance</button>
        
        <button className="py-3 bg-white hover:bg-gray-100 rounded-md flex items-center  px-4 gap-x-2"><IoIosLogOut className='text-[20px]'/>Log out</button>
      </div>
    </div>
  )
}

export default More