

import Menu from "../navigation";
import NavBar from "../desktopNav";
import { Outlet } from "react-router-dom";
const MainLayout = () => {

  return (
    <>
     <NavBar />
      <Menu/>
      <Outlet/>
        
    </>
  );
  
};

export default MainLayout;
