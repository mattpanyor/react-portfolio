import { Link, useLocation } from "react-router-dom";
import { HiEnvelope, HiAcademicCap, HiClipboardDocumentList, HiPhoto } from "react-icons/hi2";
import SubNavLink from "./SubNavLink";

function Navbar(){
    //getting current pathname
    const { pathname } = useLocation();

    return (
        <nav>
            <div className="hidden sm:block w-full bg-slate-900 py-2 lg:py-4 text-neutral-700 dark:bg-slate-500 ">
                    <div className="flex flex-wrap px-3 w-full">
                        <div className="px-10 w-full flex font-mon uppercase items-center justify-between">
                            <div className="flex flex-row">
                                <img src="/skills/react.svg" className="h-fit"></img>
                                <Link to={'/'} className="text-xl text-neutral-200 px-4">
                                    <span>Matt Panyor</span>
                                </Link>
                            </div>
                            <ul className="">
                                <Link to={'/about'} className="text-xl text-neutral-200 px-4">About</Link>
                                <Link to={'/skills'} className="text-xl text-neutral-200 px-4">Skills</Link>
                                <Link to={'/projects'} className="text-xl text-neutral-200 px-4">Projects</Link>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="fixed block bottom-0 w-full h-[6rem] sm:hidden">
                <div className="h-full flex flex-row items-center justify-evenly">
                    <SubNavLink icon={<HiPhoto/>} link={'/about'} text={'ABOUT'}/>
                    <SubNavLink icon={<HiAcademicCap/>} link={'/skills'} text={'SKILLS'}/>
                    <SubNavLink icon={<HiClipboardDocumentList/>} link={'/projects'} text={'PROJECTS'}/>
                    <SubNavLink icon={<HiEnvelope/>} link={'/contact'} text={'CONTACT ME'}/>
                </div>
            </div>
       </nav>
    )
}

export default Navbar;