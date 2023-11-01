import { useEffect, useState } from 'react';

import Story from "./Story";
import storyImage from "../../assets/images/kausarhsn__same_face_cartoon_8k_3d_364bf999-4afc-4ef3-b8a5-d4f6c1935881.png";

type dataType = {
  id: number;
  name: string;
  image: string;
};

const data: dataType[] = [
  {
    id: 1,
    name: "Kausarhsn",
    image: storyImage,
  },
  {
    id: 2,
    name: "shakib",
    image: storyImage,
  },
  {
    id: 3,
    name: "hasan",
    image: storyImage,
  },
  {
    id: 4,
    name: "rakib",
    image: storyImage,
  },
  {
    id: 5,
    name: "rony",
    image: storyImage,
  },
  {
    id: 6,
    name: "shanto",
    image: storyImage,
  },
  {
    id: 7,
    name: "sahin",
    image: storyImage,
  },
  {
    id: 8,
    name: "Abdul",
    image: storyImage,
  },
];

const Stories = () => {

  const [windowWith,setWindowWith] = useState(window.innerWidth)
 
  useEffect(()=>{ 
    window.addEventListener("resize", () => {
      setWindowWith(window.innerWidth)
    });
    
  },[windowWith])
 

  if(650>windowWith) return (
    <div className=" items-center justify-center  md:w-[630px]  lg:w-[630px] w-[430px] flex flex-row lg:gap-x-5 gap-x-3 overflow-x-auto h-[100px] ">
      {data.slice(0,6).map((story)=>(
        <Story key={story.id} story={story}/>
      ))}
    </div>
  )
 
  return (
    <div className="flex flex-row  items-center  md:w-[630px]   lg:w-[630px] w-[430px] lg:gap-x-5 gap-x-3 h-[100px] ">
      {data.map((story)=>(
        <Story key={story.id} story={story}/>
      ))}
    </div>
  );
};

export default Stories;
