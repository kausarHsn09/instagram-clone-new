import { Outlet } from "react-router-dom"
import Nav from "../components/nav/Nav"

const Applayout = ():React.ReactElement | null => {
  return (
    <div className="flex" >
         <Nav/>
        <Outlet/>
    </div>
  )
}

export default Applayout