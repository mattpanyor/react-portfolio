import { Link, useLocation } from "react-router-dom";

function Navbar(){
    //getting current pathname
    const { pathname } = useLocation();

    return (
       <nav className="relative flex w-full flex-wrap items-center justify-between bg-slate-900 py-2 text-neutral-700 dark:bg-slate-500 lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px=3">
                <div className="ml-2">
                    <Link to={'/'} className="text-xl text-neutral-200 px-2">
                        <div style={{backgroundImage: 'url(../assets/react.svg)'}}></div>
                        <span>Matt Panyor</span>
                    </Link>
                    <Link to={'/about'} className="text-xl text-neutral-200 px-2">About</Link>
                    <Link to={'/skills'} className="text-xl text-neutral-200 px-2">Skills</Link>
                    <Link to={'/projects'} className="text-xl text-neutral-200 px-2">Projects</Link>
                </div>
            </div>
       </nav>
    )
}

export default Navbar;