import { useRouter } from 'next/router';
import Link from 'next/link';
import { BsTools, BsFillPersonLinesFill, BsFillHouseFill } from 'react-icons/bs';

export default function Nav(props: any) {
    const router = useRouter();
    const active = " underline underline-offset-4 decoration-primary text-primary hover:text-white-200";
    const routeDec = (path?: string) => {
        if (path) {
            return router.pathname.toLowerCase().includes(path) ? active : "";
        } else {
            return router.pathname.length < 2 ? active : "";
        }
    };

    return <>
        <div style={{ 'minHeight': 60, fontFamily: 'Lexend, Helvetica, sans-serif', letterSpacing: 1.3, fontWeight: 500, overflow: 'initial' }}
            className={(props.sticky ? "sticky lg:hidden " : "hidden lg:flex lg:sticky ") + "top-0 z-20 w-full flex-row backdrop-blur-sm border-[#121212] border-b-[1px] bg-black/80 p-4 lg:pl-20 lg:pr-20 items-center"}>
            {!props.sticky && <>
                <Link href="/">
                    <div className="flex flex-row flex-grow text-left">
                        <div className="flex flex-col">
                            <h2 className="text-3xl">
                                Mikel Matticoli
                            </h2>
                            <h3 className="text-xs">
                                {'Full Stack Engineer • UX Designer'}
                            </h3>
                        </div>
                    </div>
                </Link>
            </>}
            <div className="flex flex-row justify-end items-center gap-8 md:gap-12 ml-auto text-sm lg:text-lg">
                <Link href="/">
                    <div className={"flex flex-row gap-2 hover-text-primary whitespace-nowrap" + (routeDec())}>
                        <BsFillHouseFill className="mt-auto mb-auto" /><span className="mb-auto mt-auto">Home</span>
                    </div>
                </Link>
                <Link href="/about">
                    <div className={"flex flex-row gap-2 hover-text-primary whitespace-nowrap" + (routeDec('about'))}>
                        <BsFillPersonLinesFill className="mt-auto mb-auto" /><span className="mb-auto mt-auto"> About</span>
                    </div>
                </Link>
                <Link href="/projects">
                    <div className={"flex flex-row gap-2 hover-text-primary whitespace-nowrap" + (routeDec('projects'))}>
                        <BsTools className="mt-auto mb-auto" /><span className="mb-auto mt-auto">Projects</span>
                    </div>
                </Link>
            </div>
        </div>
    </>
}