

export default function Add (){
    return (
        <section className="container my-10">
            <form action="" className="rounded-lg p-6 max-w-2xl w-full mx-auto shadow-lg flex flex-col gap-4">
                <div className="flex flex-col">
                    <label htmlFor="" className="mb-1">Title</label>
                    <input type="text" className="border border-gray-300 h-10 rounded-lg"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="mb-1">Title</label>
                    <input type="text" className="border border-gray-300 h-10 rounded-lg"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="mb-1">Title</label>
                    <input type="text" className="border border-gray-300 h-10 rounded-lg"/>
                </div>
                <button type="submit" className="bg-green-600 py-2.5 w-full rounded-lg text-white">Submit</button>
            </form>
        </section>
    )
}