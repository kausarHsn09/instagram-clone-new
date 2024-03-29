
import './story.css'

type dataType = {
 story:{
  id: number,
  name: string,
  image: string,
 }
};

const Story = ({story:{id,image,name}}:dataType) => {

  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={name} className="story_border w-[60px] h-[60px] rounded-full"/>
      <p className="font-light text-[13px] dark:text-white">{name}</p>
    </div>
  )
}

export default Story