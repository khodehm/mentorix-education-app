import { useState } from "react";
import "../assets/styles/component/menu.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const route = useNavigate();
  const location = useLocation(); 
  const navItems: any[] = [
    {
      name: "خانه",
      icon:  <IoHome className="text-black" />,
      path: "/home",
      options: "",
    },
    {
      name: "درباره ما ",
      icon: <IoIosInformationCircle className="text-black" />,
      path: "/about",
      options: "",
    }, {
      name: "محصولات",
      icon: <AiFillProduct className="text-black" />,
      path: "/features",
      options: "",
    }, {
      name: "کالج",
      icon:  <FaUserGraduate className="" />,
      path: "/college",
      options: "",
    },
   
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (path : string) =>{  
    route(path);
    setTimeout(() => {      
      setIsOpen(!isOpen);
    }, 100);

  }
  return (
    <>     
      <section className="fixed z-20 bg-inherit top-2 w-full">
        <button className={`md:hidden absolute right-4 top-2 z-50 focus:outline-none text-black menu-btn`} onClick={toggleMenu} dir="rtl">
          <div className={`hamburger ${isOpen ? "open" : ""} nav-btn`}>
            <span className="block w-6 h-0.5 rounded-full transition-all duration-300"></span>
            <span className="block w-4 h-0.5 rounded-full transition-all duration-300 mt-1.5"></span>
            <span className="block w-6 h-0.5 rounded-full transition-all duration-300 mt-1.5"></span>
          </div>
        </button>
      </section>
      <nav className={`fixed top-5 px-4 py-8 w-full h-full  z-10 md:bg-black  md:flex-row transform  transition-transform ease-in-out duration-500   ${isOpen ? 'bg-bg1 translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'}`}>
        <ul className={`flex justify-end  items-end  flex-col gap-4  sm:gap-2 `}>
          {navItems.map((item : any )=> (
            
            isOpen  && 
            
              <button onClick={() => handleClick(item.path)} key={item.name} className={` flex p-2 w-full justify-end md:justify-center   ${location.pathname === item.path ? 'bg-gradient-to-tr bg-indigo-500/50  rounded-full' : 'bg-none'}`}>
                <div className="flex justify-center items-center flex-row-reverse gap-2"> {item.icon} {item.name}</div>
              </button>
           
          ))}
        </ul>
      </nav>

    </>
  );
};

export default Menu;
