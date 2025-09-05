export default function StudyMaterial() {
    return (
        <section className="w-full lg:py-[40px] py-[20px]">
            <div className="max-w-[1320px] mx-auto lg:px-6 px-3">
                <div className="grid grid-cols-[70%_auto] gap-10">

                    {/*  first section  */}
                    <div className="w-[100%] h-[700px] shadow-md bg-white rounded p-5">
                        <h3 className="text-[30px] font-[500]">Nift b fTech</h3>
                        <div className="grid grid-cols-4 gap-1 my-3 h-auto">

                        </div>
                    </div>

                    {/* second section */}
                    <div className="w-[100%] h-[600px] bg-white shadow-2xl p-5">
                        <img className="w-[100%] h-[70%] object-cover" src="https://www.inframedesigninstitute.com/assets/upload/images/nid%20nift%20ceed%20pg%202026.jpg" />
                        <div className="mt-[25px] p-2">
                            <p className="text-[25px] font-semibold">Nift b fTech</p>
                            <span className="text-[25px] font-[400]">Rs. 1299 /-</span>
                            <div className="grid grid-cols-2 mt-2 gap-5">
                                <button className="bg-gray-200 text-gray-900 hover:bg-gray-300 duration-300 px-3 py-2 rounded cursor-pointer">Add to cart</button>
                                <button className="bg-gray-900 text-white px-3 py-2 rounded cursor-pointer">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}