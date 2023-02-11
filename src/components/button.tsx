export default function Button(props: any) {
    return <>
        <button {...props} className="flex flex-col flex-grow p-3 w-20 sm:w-40 h-12 border-2 border-blue-200 text-blue-200 hover:border-blue-400 hover:text-blue-400 rounded-sm">
            {props.children}
        </button>
    </>
}