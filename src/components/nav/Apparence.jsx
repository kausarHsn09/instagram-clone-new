import {useEffect} from 'react'
import {darkmode} from './darkSlice'

import {  FiArrowLeft } from "react-icons/fi";
import {  MdOutlineDarkMode } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';
const Apparence = ({setIsOpenApparence}) => {

  const dispath = useDispatch()
  const isDarkMode = useSelector((state)=>state.darkmode.open)

  function ToggleControl(){
    dispath(darkmode(!isDarkMode))
  }
  
  useEffect(()=>{
    const html = document.getElementsByTagName('html')[0]
    if(isDarkMode){
      html.classList.add('dark')
    }else{
      html.classList.remove('dark')
    }
  },[isDarkMode])

  return (
    <div className={`flex ta flex-col gap-y-4  translate-x-0`}>
    <div className="flex px-4 items-center justify-between">
      <button onClick={()=> setIsOpenApparence((open)=>!open)}>
        {" "}
        <FiArrowLeft />
      </button>
      <p className="">Switch appearance</p>
      <MdOutlineDarkMode />
    </div>

    <hr className="px-4" />
    <div className="dark_C flex justify-between items-center">
      <div>
        <p>Darkmode</p>
      </div>

      <label className="switch">
        <input type="checkbox" onChange={ToggleControl} checked={isDarkMode}/>
        <span className="slider"/>
      </label>
    </div>
  </div>
  )
}

export default Apparence