import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Modal from "../components/modal/Modal";
import { createPortal } from 'react-dom';

const Applayout = (): React.ReactElement | null => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row lg:pl-[330px] md:pl-[120px] bg-white dark:bg-black ">
     {createPortal(<Modal/>,document.body) }
      <Nav />
      <Outlet />
    </div>
  );
};

export default Applayout;
