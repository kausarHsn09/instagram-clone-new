import { Outlet } from "react-router-dom"
import Nav from "../components/nav/Nav"

const Applayout = ():React.ReactElement | null => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row lg:pl-[330px] md:pl-[120px]" >
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default Applayout