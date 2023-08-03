import { useEffect, useState } from "react";



export const useMobile = () => {

    // const maxMobileWidth = 768;
    const maxMobileWidth = 988;
    
    const [width, setWidth] = useState(window.innerWidth);
    const [mobile, setMobile] = useState(false);

    const update = () => {
        setWidth(window.innerWidth);
        setMobile(width <= maxMobileWidth);
    }

    const onResize = () => {
        // console.log("onResize");
        window.addEventListener('resize', update)
    }

    useEffect(() => {
        update()
        onResize()
    }, [window.innerWidth])

    return {
        mobile
    };

}


export default useMobile;
