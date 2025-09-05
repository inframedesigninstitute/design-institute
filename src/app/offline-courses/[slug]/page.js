"use client"
import { FaBook, FaHandsHelping, FaLongArrowAltDown } from "react-icons/fa";
import { BiSolidVideoRecording } from "react-icons/bi";
import { useState } from "react";





export default function OfflineCourse() {

    const scrollMoment = () => {
        document.getElementById('recording-section')?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="w-full bg-white text-gray-900">
            {/* 🔹 Hero Section */}
            <section
                className="w-full min-h-[60vh] flex px-4 bg-cover bg-center relative"
                style={{
                    backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-illustration-of-3d-rendered-laptop-computer-showcasing-the-concept-of-e-image_3752947.jpg')",
                }}
            >
                {/* 🔹 Gradient Overlay (z-10) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>

                {/* 🔹 Text Content (z-20) */}
                <div className="text-white py-12 relative z-20 max-w-xl">
                    <h2 className="text-[50px] font-bold">Ceed Course</h2>
                    <p className="text-[20px] mt-3">Prepare for CEED with expert guidance, in-depth study material, and mock test series.
                        Master design concepts, sketching, and aptitude to boost your chances of success.</p>
                    <button onClick={scrollMoment} className="bg-white font-[500] hover:bg-transparent hover:border-white border-transparent border-2 duration-300  hover:text-white text-gray-900  rounded-full py-[10px] px-10 mt-5 text-[18px] cursor-pointer grid grid-cols-[95%_auto] items-center group"> View Course Overview  <FaLongArrowAltDown
                        className="opacity-0 -translate-y-4  group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out duration-300"
                    /> </button>
                </div>
            </section>


            {/* 🔸 Content Wrapper */}
            <section className="lg:pt-[60px] pt-[20px]">
                <div className="max-w-[1320px]  mx-auto ">

                    {/* 🔹 Features Section */}
                    <section className="lg:px-6 px-3">
                        <div>
                            <h2 className="text-[40px] font-bold mb-3">Our Key Features</h2>
                            <p className="text-[20px]">
                                Experience top-quality courses designed to help you excel effortlessly
                            </p>
                        </div>

                        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Recorded Classes",
                                    desc: "Interactive sessions with lifetime access to recordings.",
                                    icon: <BiSolidVideoRecording />
                                    ,
                                },
                                {
                                    title: "Complete Study Material",
                                    desc: "PDFs, assignments, and mock tests for all major exams.",
                                    icon: <FaBook />
                                    ,
                                },
                                {
                                    title: "Doubt Support",
                                    desc: "Expert mentors ready to resolve your questions.",
                                    icon: <FaHandsHelping />
                                    ,
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition"
                                >
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>



                    {/* 🔹 Why Choose Us Section */}


                    <section className="py-10 w-full bg-[#f8f8f8] lg:px-6 px-3 ">

                        <div>
                            <h2 className="text-[40px] font-bold mb-3"> Features of the Program</h2>
                            <p className="text-[20px] mb-7">
                                Tailored for design aspirants with focused training, mentorship, and mock tests.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Interactive Doubt-Solving Lectures",
                                    desc: "Learn from NID/NIFT alumni and top professionals in the field.",
                                },
                                {
                                    title: "Flexible Access",
                                    desc: "Watch sessions anytime on desktop, tablet or mobile.",
                                },
                                {
                                    title: "Proven Track Record",
                                    desc: "Thousands of students cleared NID, CEED, NIFT and more.",
                                },
                                {
                                    title: "Affordable Plans",
                                    desc: "Industry-leading training at student-friendly pricing.",
                                },
                                {
                                    title: "Affordable Plans",
                                    desc: "Industry-leading training at student-friendly pricing.",
                                },
                                {
                                    title: "Affordable Plans",
                                    desc: "Industry-leading training at student-friendly pricing.",
                                },
                                {
                                    title: "Affordable Plans",
                                    desc: "Industry-leading training at student-friendly pricing.",
                                },
                                {
                                    title: "Affordable Plans",
                                    desc: "Industry-leading training at student-friendly pricing.",
                                },

                                {
                                    title: "Affordable Plans",
                                    desc: "Industry-leading training at student-friendly pricing.",
                                },
                                {
                                    title: "Affordable Plans",
                                    desc: "Industry-leading training at student-friendly pricing.",
                                },
                                {
                                    title: "Affordable Plans",
                                    desc: "Industry-leading training at student-friendly pricing.",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition"
                                >
                                    <h4 className="text-[18px] font-[500] mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>



                </div>
            </section>

        </div>
    );
}
