import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


// Consider rename to usePath

const usePage = () => {

    /** Scope of this hook is still undefined. 
     * 
     * As of now, pageRoutes is a 2-dimensional array which describes a list of [path, label] pairs. 
     * 
     * Path is the wrong word to describe this however because the expected path, pageRoutes[page][0], needs only
     * be the start of the browsers actual location path.
     * 
     * Example useLocation().pathname -> /skills/python/numpy -> points to ['/skills', 'Skills']
     * 
     * To Do: Extend the skills page to be seperated by languages and and tags to skills for filtering.
     *        Then path -> /skills/ptyhon/numpt -> would point to ['skills/{language}/{library}', 'Library']
     *        Then path -> /skills/ptyhon/flask -> would point to ['skills/{language}/{framework}', 'Framework']
     *          // Is this too much? this should just be ['skills/{language}/{library}', 'Library'] no framework.
     * 
     * Since that is the case usePage is good at creating a detection tool for an intended submodule of the application.
     * 
     * Example:
     * 
     * /skills is a different section of the site than /projects, even if /skills and /projects reference each other.
     * These are seperate data points of the application that add richness to the app.
     * 
     * However we may want a simple way for the MainLayout Page to understand the context of the current location
     * so that it can do one thing or another. It is a good way to pass information to different components based 
     * on the current browser path to make some action.
    */

   
   const location = useLocation();
    const [path, setPath] = useState(location.pathname.split('/').filter((_:any) => { return _ !== ''}))

    const [page, setPage] = useState(-1); // index for `page_routes`
    const pageRoutes = [
        ['/', 'Portfolio'],
        ['/projects', 'Projects'],
        ['/services', 'Services'],
        ['/skills', 'Skills'],
        ['/skills/{language}', 'Language'],
        ['/skills/{language}/{library}', 'Library'],
    ]


    // Create a property that returns the current page or null if the current page is not defind by the routes in `pageRoutes`.
    const currentPageRoute = () => {
        return page !== -1 ? pageRoutes[page] : []
    }


    const lookupPage = () => {
        setPage(-1)
        pageRoutes.forEach((pageRoute, i) => {
            if (location.pathname.startsWith(pageRoute[0])) {
                setPage(i);
                return;
            }
        })
    }


    useEffect( () => {
        lookupPage();
        setPath(location.pathname.split('/').filter((_: any) => { return _ !== ''}))
    }, [])

    return {
        path,
        page, 
        pageRoutes,
        currentPageRoute,
    }

}


export default usePage;
