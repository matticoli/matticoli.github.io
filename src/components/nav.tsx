import { useRouter } from 'next/router';
import Link from 'next/link';
import {  FaCogs, FaHome, FaUserAlt } from 'react-icons/fa';

export default function Nav(props: any) {
    const router = useRouter();
    const active = " underline underline-offset-4 decoration-primary text-primary hover:text-white-200";
    const routeDec = (path?: string) => {
        if(path) {
            return router.pathname.toLowerCase().includes(path) ? active : "";
        } else {
            return router.pathname.length < 2 ? active : "";
        }
    };
    
    return <>

        <div style={{'minHeight': 80, fontFamily: 'Montserrat, Helvetica, sans-serif', overflow: 'initial'}} 
             className={(props.sticky ? "sticky sm:hidden " : "") + "sm:sticky top-0 z-20 w-full flex flex-col sm:flex-row backdrop-blur-sm border-[#121212] border-b-[1px] bg-black/80 p-4 sm:pl-20 sm:pr-20 text-center "}>
        {!props.sticky && <>
            <Link href="/" className="flex flex-row flex-1 justify-center text-left justify-left">
                <img src={'/assets/logo.png'}  
                    style={{maxHeight: 70, maxWidth: 70}}
                    className="flex-none hidden sm:block"
                    alt="Mikel's personal logo - a programmer terminal, gear, and checkox inside a lightbulb" />
                <div className="flex flex-col flex-grow text-center sm:text-left sm:pt-2">
                    <h2 className="text-2xl">
                            Mikel Matticoli
                    </h2>
                    <h3 className="text-xs">
                        {'Engineer  •  Technical Designer'}
                    </h3>
                </div>
            </Link>
            <img src={'/assets/logo.png'}  
                    style={{maxHeight: 30, maxWidth: 30}}
                    className="mt-3 ml-auto mr-auto flex-none sm:hidden"
                    alt="Mikel's personal logo - a programmer terminal, gear, and checkox inside a lightbulb" />
        </>}
            <div className={(!props.sticky ? "hidden sm:flex " : "") + "flex justify-center text-center sm:justify-left sm:text-left sm:text-lg pt-4 gap-10 sm:mr-4 "}>
                <span className="flex-1 hidden sm:block" />
                <Link className={"flex flex-row gap-1 w-30 hover-text-primary" + (routeDec())} href="/">
                    <FaHome className="mt-auto mb-auto" /><span className="mb-auto mt-auto">Home</span>
                </Link>
                <Link className={"flex flex-row gap-1 w-30 hover-text-primary" + (routeDec('about'))} href="/about">
                    <FaUserAlt className="mt-auto mb-auto" /><span className="mb-auto mt-auto"> About</span>
                </Link>
                <Link className={"flex flex-row gap-1 w-30 hover-text-primary" + (routeDec('projects'))} href="/projects">
                <FaCogs className="mt-auto mb-auto" /><span className="mb-auto mt-auto">Projects</span>
                </Link>
            </div>
        </div>
    </>
}