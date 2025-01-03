import { AiFillProduct } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import useWidth from "../hooks/useWidth";
import usePlatform from "../hooks/usePlatform";

const NavBar = () => {
  const route = useNavigate();
  const location = useLocation(); 
  const width = useWidth();
  const device = usePlatform();
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

  const handleClick = (path : string) =>{  
    route(path);
  }
return(
    <>
    {width > 800 && device === "desktop" && 
     <nav className={`md:fixed md:top-5 md:px-4 md:right-[10%] md:py-4 md:w-[30%] md:z-10 `} dir="rtl" >
        <ul className={`flex flex-row justify-evenly leading-7`}>
          {navItems.map((item : any )=> (            
            <button onClick={() => handleClick(item.path)} key={item.name} className={` flex  border-b-2    transition-all duration-300 ease-in-out
                ${location.pathname === item.path ? ' border-indigo-500    ' : 'border-transparent'}`} >
                <div className="flex justify-center items-center flex-row-reverse gap-2">{item.name}</div>
            </button>           
          ))}
        </ul>
      </nav>
    }
    </>
)
}
export default NavBar ;