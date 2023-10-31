import profileHighlight from "../../assets/images/pic.jpg";

type dataType={
    id:number,
    highLightPic:string,
    highLightName:string
}

const data:dataType[] =[
    {
        id:1,
        highLightPic:profileHighlight,
        highLightName: 'Picnic'
    },
    {
        id:2,
        highLightPic:profileHighlight,
        highLightName: 'Food'
    },
    {
        id:3,
        highLightPic:profileHighlight,
        highLightName: 'Coxs Bazar'
    },
    {
        id:4,
        highLightPic:profileHighlight,
        highLightName: 'Workstation'
    },
    {
        id:5,
        highLightPic:profileHighlight,
        highLightName: 'Teatime'
    },
    {
        id:6,
        highLightPic:profileHighlight,
        highLightName: 'Dhaka'
    },
    {
        id:7,
        highLightPic:profileHighlight,
        highLightName: 'Gazipur'
    },
    {
        id:8,
        highLightPic:profileHighlight,
        highLightName: 'kolkata'
    },

]

const ProgileHighlights = () => {
  return (
    <div className="flex mt-10">

     {data.map((item)=>(
        <ProgileHighlight key={item.id} items={item}/>
     ))}
    </div>
  )
}

type itemsType ={
   items:{
    id:number,
    highLightPic:string,
    highLightName: string
   }
}


const ProgileHighlight = ({items}:itemsType) => {
    
  return (
    <div className="w-full flex justify-center  ">
      <div className="flex  flex-col gap-y-2 items-center">
      <img className="w-[70px] h-[70px] object-cover rounded-full border-gray-300 border-[2px]	" src={items.highLightPic} alt="" />
      <p className="font-bold text-[12px]">{items.highLightName}</p>
    </div>
    </div>
  )
}



export default ProgileHighlights