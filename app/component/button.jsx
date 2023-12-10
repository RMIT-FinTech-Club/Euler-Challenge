export default function Button({children, ...props}) {
    return (
        <button {...props} className="bg-[#0070F3] text-gray-100 hover:bg-blue-500 hover:text-white rounded-lg px-3 py-1 text-sm font-medium">
            {children}
        </button>
    )
}