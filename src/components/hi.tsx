import ReactTypingEffect from 'react-typing-effect';

export default function Hi() {
    return <>
        <div className="flex flex-1 flex-col items-center justify-center text-center p-4 w-full h-20">
            
            <h2 style={{fontFamily: 'Montserrat, Helvetica, sans-serif'}} className="text-2xl sm:text-3xl font-bold text-blue-200">
                    <ReactTypingEffect 
                        staticText={'Hi, '}
                        text={"I'm Mikel"}
                        eraseDelay={30000}
                        cursor={'_'} />
            </h2>
        </div>
    </>
}