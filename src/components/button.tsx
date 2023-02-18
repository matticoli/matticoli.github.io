export default function Button(props: any) {
    const className = props.className;
    const upProps = {...props, className: undefined}
    return <button {...upProps} className={"flex-shrink text-center justify-center align-center p-3 w-20 sm:w-40 h-16 leading-tight sm:h-12 bg-primary text-white-200 hover:bg-blue-600 hover:scale-110 rounded-sm "+(className || "")}>
            {props.children}
        </button>
}