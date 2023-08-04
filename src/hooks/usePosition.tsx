import { useEffect, useState } from 'react';


/**
 * @summary A hook that detects if the user has scrolled to the top of the page or bottom of the page.
 * @returns {object} An object containing a boolean value for if the user has scrolled to the top of the page and a boolean value for if the user has scrolled to the bottom of the page.
 */
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
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])



  return {
    isTop,
    isBottom,
  }

}


export default usePosition;
