import ReactTypingEffect from 'react-typing-effect';

const shapeTop = " rounded-tr-md rounded-tl-4xl";
const shapeBottom = " rounded-bl-md rounded-br-4xl";
const shapeDefault = shapeTop + shapeBottom //" rounded-tr-3xl rounded-tl-md rounded-bl-3xl rounded-br-md";

enum CardType {
    T = "T", // TOP
    B = "B", // BOTTOM
    M = "M", // MID
    D = "D" // DEFAULT
}

interface InnerProps {
    type?: CardType | string
    className?: string
    children: any
}

export function CardOuter(props: any) {
    return <>
        <div style={{backgroundColor: "#121212BB"}} className={"w-11/12 sm:w-10/12 lg:w-9/12 xl:w-8/12 mr-10 ml-10 mt-5 mb-5" + shapeDefault}>
                <div className="bg-transparent opacity-100">
                    {props.children}
                </div>
        </div>
    </>
}

export function CardInner(props: InnerProps) {
    let shape: string = shapeDefault;
    if(props.type === 'T') {
        shape = shapeTop;
    } else if(props.type === 'B') {
        shape = shapeBottom;
    } else if (props.type === 'M') {
        shape = '';
    };

    return <>
        <div style={{backgroundColor: "#2c2c2cCC"}} className={"p-5 m-5" + shape}>
            <div className={"bg-transparent opacity-100 "+props.className}>
                {props.children}
            </div>
        </div>
    </>
}
