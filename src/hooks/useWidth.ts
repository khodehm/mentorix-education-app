import React from "react";

export default function useWidth() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const handleResize = React.useCallback(() =>{
         setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize);
    } , [width]);

    React.useEffect(() => {
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
        
    
    return width;
}