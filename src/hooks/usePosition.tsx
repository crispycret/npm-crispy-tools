import { useEffect, useState } from react;



export const usePosition = () => {

    const [isTop, setTop] = useState(true)
    const [isBottom, setBottom] = useState(false)

    /**
     * @description Detects if the user has scrolled to the bottom of the page or top of the page,
     */
    useEffect(() => {
        const onScroll = () => {
            setTop(window.scrollY === 0)
            setBottom(window.innerHeight + window.scrollY >= document.body.offsetHeight)
        }
        window.addEventListener(scroll, onScroll)
        return () => window.removeEventListener(scroll, onScroll)
    }, [])



  return {
    isTop,
    isBottom,
  }

}


export default usePosition;
