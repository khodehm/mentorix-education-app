import React from "react";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";


export default function useActiveRoute(navigate : any  , routes :any){
    const [activeIndex, setActiveIndex] = React.useState(0);
    const location = useLocation();
    React.useEffect(() => {
      const currentPath = location.pathname.replace("/", "") || "home"; 
      const index = routes.indexOf(currentPath);
        if (index !== -1) {
            setActiveIndex(index);
        }
    }, [location.pathname, routes]);

    const handleChange = useCallback((swiper : any ) =>  {
        const newRoute = routes[swiper.activeIndex];
        navigate(`/${newRoute}`);
    },[navigate ,routes])
    
    
    return {handleChange ,activeIndex  ,setActiveIndex}
}