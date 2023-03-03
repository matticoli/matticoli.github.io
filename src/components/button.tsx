import Link from 'next/link';

export default function Button(props: any) {
    const className = props.className;
    const upProps = {...props, className: undefined}

    const button = <>
        <button {...upProps} className={"flex-shrink text-center justify-center align-center p-3 w-40 sm:w-60 h-16 leading-tight sm:h-12 bg-primary text-white-200 hover:bg-blue-600 hover:hover:scale-110 rounded-sm "+(className || "")}>
            {props.children}
        </button>
    </>
    return props.href ? <Link href={props.href}>{button}</Link> : <>{button}</>;
}