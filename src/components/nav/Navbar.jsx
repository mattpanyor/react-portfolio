import { Link, useLocation } from "react-router-dom";

function Navbar(){
    //getting current pathname
    const { pathname } = useLocation();

    return (
       <nav className="relative flex w-full flex-wrap items-center justify-between bg-red-300 py-2 text-neutral-700 dark:bg-slate-500 lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px=3">
                <div className="ml-2">
                    <Link to={'/'} className="text-xl text-neutral-800 dark:text-neutral-200">Navbar</Link>
                    <Link to={'/about'} className="text-xl text-neutral-800 dark:text-neutral-200">About</Link>
                    <Link to={'/skills'} className="text-xl text-neutral-800 dark:text-neutral-200">Skills</Link>
                    <Link to={'/projects'} className="text-xl text-neutral-800 dark:text-neutral-200">Projects</Link>
                </div>
            </div>
       </nav>
    )
}

export default Navbar;