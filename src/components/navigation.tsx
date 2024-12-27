import { useState } from "react";
import "../assets/styles/component/menu.scss";
import { useNavigate } from "react-router-dom";
import { BsHouse} from "react-icons/bs";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const route = useNavigate();
  //dark mod

  const navItems: any[] = [
    {
      name: "خانه",
      icon: <BsHouse className="text-[var(--menuBorder)]" />,
      path: "/",
      options: "",
    },
   
  ];

  //toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="fixed  w-full z-50 grid  grid-cols-2" dir="ltr">
        <button
          className=" absolute right-0 rounded-full  p-4 z-50  focus:outline-none !text-[var(--black)] menu-btn"
          onClick={toggleMenu}
          dir="rtl"
        >
          <div className={`hamburger  ${isOpen ? "open" : ""} nav-btn`}>
            <span className="block w-6 h-0.5 rounded-full   transition-all duration-300 "></span>
            <span className="block w-4 h-0.5 rounded-full transition-all duration-300 mt-1.5 "></span>
            <span className="block w-6 h-0.5 rounded-full transition-all duration-300 mt-1.5 "></span>
          </div>
        </button>
      </section>
      <div className={`fixed top-[-3rem] !bg-[var(--bg-2)] text-[var(--black)] `}>
        <nav className="fixed  w-full  text-[var(--black)] text-xl flex justify-start  text-center mt-8 p-4">
          <ul
            className={` flex flex-col justify-between  md:text-center  md:items-start md:p-2 text-right w-full `}
          >
            {navItems.map((e: any, i) => {
              return (
                <>
                  {i === 5 ? (
                    <button
                      key={i}
                      className="flex items-end md:items-start  gap-2 bg-inherit font-peyda-rg text-[var(--black)] text-sm p-3 my-4 shadow-none hover:rounded-full hover:shadow-md w-full"
                      hidden={e.options}
                      style={
                        e.options ? { display: "none" } : { display: "flex" }
                      }
                    >
                      {e.icon}
                      {e.name}
                    </button>
                  ) : (
                    <button
                      key={i}
                      className=" flex align-middle w-full  justify-between last:justify-start items-start bg-inherit md:justify-between font-peyda-rg text-[var(--black)] text-sm p-3 my-4 shadow-none hover:rounded-full hover:shadow-md"
                      hidden={e.options}
                      onClick={() => {
                        setTimeout(() => {
                          setIsOpen(false);
                        }, 100);
                        route(e.path);
                      }}
                      style={
                        e.options ? { display: "none" } : { display: "flex" }
                      }
                    >
                      <>
                        <div
                          className="flex gap-2 "
                          hidden={e.options}
                          onClick={e.logOut}
                        >
                          {e.icon}
                          {e.name}
                        </div>
                      </>
                    </button>
                  )}
                </>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;