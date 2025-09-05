"use client"
import { useState } from "react";

export default function Checkout() {

    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };
    return (
        <>
            <section className="w-full  bg-[#f8f8f8]">
                <div className="max-w-[1320px]  lg:px-6 px-3 mx-auto text-black">
                    <div className="grid grid-cols-[45%_auto] gap-10">
                        <div className="lg:py-[40px]  py-[30px]">
                            <h2 className="text-[35px] font-[500] mb-4">More Related Courses</h2>

                            <div className="bg-white mb-[30px] shadow-2xl rounded-[10px] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                                {/* Image */}
                                <img
                                    className="object-cover object-top w-full h-[280px] md:rounded-l-[10px]"
                                    src="https://www.inframedesigninstitute.com/assets/upload/images/uceed%202026.jpg"
                                    alt="Uceed Course"
                                />

                                {/* Content */}
                                <div className="p-5 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-[30px] font-semibold mb-2">Uceed Course</h3>
                                        <p className="text-gray-600 mb-4">
                                            Learn from the best with our structured UCEED course designed for success.
                                        </p>
                                    </div>

                                    {/* Quantity Selector */}
                                    <div className="flex items-center mb-4">
                                        <span className="mr-3 font-medium">Quantity:</span>
                                        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                                            <button
                                                className="px-3 py-1 text-xl font-bold bg-gray-100 hover:bg-gray-200 transition"
                                                onClick={handleDecrease}
                                            >
                                                -
                                            </button>
                                            <span className="px-4 py-1 text-lg">{quantity}</span>
                                            <button
                                                className="px-3 py-1 text-xl font-bold bg-gray-100 hover:bg-gray-200 transition"
                                                onClick={handleIncrease}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button className="w-full bg-white cursor-pointer text-gray-900 border-[1] border-gray-300 hover:text-white  py-[10px] rounded hover:bg-gray-900 transition">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white mb-[30px] shadow-2xl rounded-[10px] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                                {/* Image */}
                                <img
                                    className="object-cover object-top w-full h-[280px] md:rounded-l-[10px]"
                                    src="https://www.inframedesigninstitute.com/assets/upload/images/uceed%202026.jpg"
                                    alt="Uceed Course"
                                />

                                {/* Content */}
                                <div className="p-5 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-[30px] font-semibold mb-2">Uceed Course</h3>
                                        <p className="text-gray-600 mb-4">
                                            Learn from the best with our structured UCEED course designed for success.
                                        </p>
                                    </div>

                                    {/* Quantity Selector */}
                                    <div className="flex items-center mb-4">
                                        <span className="mr-3 font-medium">Quantity:</span>
                                        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                                            <button
                                                className="px-3 py-1 text-xl font-bold bg-gray-100 hover:bg-gray-200 transition"
                                                onClick={handleDecrease}
                                            >
                                                -
                                            </button>
                                            <span className="px-4 py-1 text-lg">{quantity}</span>
                                            <button
                                                className="px-3 py-1 text-xl font-bold bg-gray-100 hover:bg-gray-200 transition"
                                                onClick={handleIncrease}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button className="w-full bg-white cursor-pointer text-gray-900 border-[1] border-gray-300 hover:text-white  py-[10px] rounded hover:bg-gray-900 transition">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white mb-[30px] shadow-2xl rounded-[10px] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                                {/* Image */}
                                <img
                                    className="object-cover object-top w-full h-[280px] md:rounded-l-[10px]"
                                    src="https://www.inframedesigninstitute.com/assets/upload/images/uceed%202026.jpg"
                                    alt="Uceed Course"
                                />

                                {/* Content */}
                                <div className="p-5 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-[30px] font-semibold mb-2">Uceed Course</h3>
                                        <p className="text-gray-600 mb-4">
                                            Learn from the best with our structured UCEED course designed for success.
                                        </p>
                                    </div>

                                    {/* Quantity Selector */}
                                    <div className="flex items-center mb-4">
                                        <span className="mr-3 font-medium">Quantity:</span>
                                        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                                            <button
                                                className="px-3 py-1 text-xl font-bold bg-gray-100 hover:bg-gray-200 transition"
                                                onClick={handleDecrease}
                                            >
                                                -
                                            </button>
                                            <span className="px-4 py-1 text-lg">{quantity}</span>
                                            <button
                                                className="px-3 py-1 text-xl font-bold bg-gray-100 hover:bg-gray-200 transition"
                                                onClick={handleIncrease}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button className="w-full bg-white cursor-pointer text-gray-900 border-[1] border-gray-300 hover:text-white  py-[10px] rounded hover:bg-gray-900 transition">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="w-[100%] h-[90vh]  p-5 bg-white">
                            <h2 className="text-[35px] mb-5 font-[500] text-center">my store</h2>



                            <div className="bg-white p-4 mb-5 shadow-2xl rounded-[10px] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                                {/* Image */}
                                <img
                                    className="object-cover object-top w-full h-[150px] md:rounded-l-[10px]"
                                    src="https://www.inframedesigninstitute.com/assets/upload/images/uceed%202026.jpg"
                                    alt="Uceed Course"
                                />

                                {/* Content */}
                                <div className="p-4 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-[20px] font-semibold mb-1">Uceed Course</h3>
                                        <p className="text-gray-600 text-sm mb-3">
                                            Learn from the best with our structured UCEED course designed for success.
                                        </p>
                                    </div>

                                    {/* Quantity Selector */}
                                    <div className="flex items-center mb-3">
                                        <span className="mr-2 font-medium text-sm">Quantity:</span>
                                        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                                            <button
                                                className="px-2 py-1 text-lg font-bold bg-gray-100 hover:bg-gray-200 transition"
                                                onClick={handleDecrease}
                                            >
                                                -
                                            </button>
                                            <span className="px-3 py-1 text-sm">{quantity}</span>
                                            <button
                                                className="px-2 py-1 text-lg font-bold bg-gray-100 hover:bg-gray-200 transition"
                                                onClick={handleIncrease}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button className="w-full bg-white cursor-pointer text-gray-900 border border-gray-300 hover:text-white py-2 rounded hover:bg-gray-900 transition text-sm">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}