export default function first() {
    const trigger = () => {
        throw new Error('Something went wrong!')
    }
    return (
        <div className="space-y-8">
            <h1 className="text-xl font-medium text-gray-300">First Page</h1>
            <p className="text-gray-300">This is the first page</p>
            <button onClick={trigger}>Trigger error</button>
        </div>
    )
}