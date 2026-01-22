import Link from 'next/link';

export default function Button(props: any) {
    const className = props.className;
    const { href, children, ...buttonProps } = props;
    
    const buttonElement = (
        <button {...buttonProps} className={"flex-shrink text-center justify-center align-center p-3 w-80 h-12 leading-tight bg-primary text-white-200 hover:bg-blue-600 hover:-translate-y-1 active:scale-95 rounded-sm "+(className || "")}>
            {children}
        </button>
    );
    
    return href ? <Link href={href}>{buttonElement}</Link> : buttonElement;
}