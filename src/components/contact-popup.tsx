import { useState } from "react"
import { FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";

export default function ContactPopup(props: any) {
    const [ open, setOpen ] = useState(false);

    return <>
        <div className={"bg-zinc-900 fixed transition max-h-screen z-30 bottom-40 w-50 h-50 z-10 p-5 text-center drop-shadow-lg shadow-white-200 right-10 origin-right" + (open ? " opacity-100" : " -rotate-90 opacity-0 translate-x-20")}>
            <h5 className="text-xl">Mikel Matticoli</h5>
            <p>📧 emailHere?</p>
            <p>📞 phoneHere?</p>
            <div className="flex flex-row align-center justify-center gap-6 text-2xl mt-4">
                <a title="Resume" href="/resume.pdf" target="_blank"><FaBriefcase /></a>
                <a title="LinkedIn" href="https://linkedin.com/in/matticoli" target="_blank"><FaLinkedin /></a>
                <a title="GitHub" href="https://github.com/matticoli" target="_blank"><FaGithub /></a>
            </div>
        </div>
        <button className="sticky bottom-0 ml-auto z-10 mr-10 hover:scale-125 " onClick={() => setOpen(!open)}>
          <img src={open ? "/assets/hand-empty.png" : "/assets/business-card.png"} />
        </button>
    </>
}