export default function Button(props: any) {
    return <>
        <button {...props} className="flex-shrink text-center justify-center align-center p-3 w-20 sm:w-40 h-16 leading-tight sm:h-12 bg-primary text-white-200 hover:bg-blue-600 rounded-sm">
            {props.children}
        </button>
    </>
}