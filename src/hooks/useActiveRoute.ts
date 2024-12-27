import { useCallback } from "react";
export default function useActiveRoute(navigate : any  , routes :any){
    const handleChange = useCallback((swiper : any ) =>  {
        const newRoute = routes[swiper.activeIndex];
        navigate(newRoute);
    },[navigate ,routes])

    
    return {handleChange  }
}