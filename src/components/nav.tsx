import { useRouter } from 'next/router';

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
            <a href="/" className="flex flex-row flex-1 justify-center text-left justify-left">
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
            </a>
            <img src={'/assets/logo.png'}  
                    style={{maxHeight: 30, maxWidth: 30}}
                    className="mt-3 ml-auto mr-auto flex-none sm:hidden"
                    alt="Mikel's personal logo - a programmer terminal, gear, and checkox inside a lightbulb" />
        </>}
            <div className={(!props.sticky ? "hidden sm:flex " : "") + "flex justify-center text-center sm:justify-left sm:text-left text-xl pt-4 gap-10 sm:mr-4 "}>
                <span className="flex-1 hidden sm:block" />
                <a className={"w-20 hover:text-primary" + (routeDec())} href="/">
                    About
                </a>
                <a className={"w-20 hover:text-primary" + (routeDec('projects'))} href="/projects">
                    Projects
                </a>
                <a className={"w-20 hover:text-primary" + (routeDec('contacts'))} href="/contact">
                    Contact
                </a>
            </div>
        </div>
    </>
}