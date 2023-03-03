export default function Elec(props: any) {
    return <>
        <div className={props.className || ""}>
            <img src={'/assets/logo.png'}  
                        style={{maxHeight: 100, maxWidth: 100}}
                        className="mt-3 flex-none bulb"
                        alt="Mikel's personal logo - a programmer terminal, gear, and checkox inside a lightbulb" />
        
            <div className="elec h-[175vh] ml-[49.5px]"></div>
        </div>
    </>
}