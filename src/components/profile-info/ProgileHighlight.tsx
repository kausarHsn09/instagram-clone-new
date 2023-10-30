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
        highLightName: 'picnic'
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
    <div className="flex">

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
    <div className="flex flex-col">
      <img className="w-[70px] h-[70px] object-cover rounded-full" src={items.highLightPic} alt="" />
      <p>Name</p>
    </div>
  )
}



export default ProgileHighlights