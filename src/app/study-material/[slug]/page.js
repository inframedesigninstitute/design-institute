
"use client"
import { useState } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";

export default function StudyMaterialPage() {
    //banner.JPG
    const [showAllFaqs, setShowAllFaqs] = useState(false);
    const scrollMoment = () => {
        document.getElementById('recording-section')?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className="bg-white text-gray-800">
            {/* 1. Hero Section */}
            <section
                className="w-full min-h-[50vh] flex lg:px-6 px-3 bg-cover bg-center relative"
                style={{
                    backgroundImage: "url('/study-materials/banner.JPG')",
                }}
            >
                {/* 🔹 Gradient Overlay (z-10) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>

                {/* 🔹 Text Content (z-20) */}
                <div className="text-white py-12 relative z-20 max-w-xl">
                    <h2 className="text-[50px] font-bold">Ceed Course</h2>
                    <p className="text-[20px] mt-3">Prepare for CEED with expert guidance, in-depth study material, and mock test series.
                        Master design concepts, sketching, and aptitude to boost your chances of success.</p>
                    <button onClick={scrollMoment} className="bg-white font-[500] hover:bg-transparent hover:border-white border-transparent border-2 duration-300  hover:text-white text-gray-900  rounded-full py-[10px] px-10 mt-5 text-[18px] cursor-pointer grid grid-cols-[95%_auto] items-center group"> View Materials Overview
                        <FaLongArrowAltDown
                            className="opacity-0 -translate-y-4  group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out duration-300"
                        />
                    </button>
                </div>
            </section>


            {/* 2. Course Highlights */}
            <section className="max-w-[1320px] mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
                {[
                    "Updated for 2025",
                    "Includes Past Papers",
                    "Topic-wise Practice",
                    "Expert Written Notes",
                    "Visual & Theory Content",
                    "PDFs + Recorded Sessions",
                ].map((item, i) => (
                    <div key={i} className="border p-4 rounded shadow-sm bg-white">
                        <h4 className="font-semibold text-lg">{item}</h4>
                    </div>
                ))}
            </section>

            {/* 3. What's Included */}
            <section className="max-w-[1320px] mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold mb-6">What’s Included in This Pack</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-gray-700">
                    {[
                        "Fabric Science Notes",
                        "Quant Aptitude Sheets",
                        "Previous Year Papers",
                        "Mock Tests (PDF)",
                        "Design Principles Guide",
                        "GK & Current Affairs",
                        "Reasoning Practice Sets",
                        "Portfolio Preparation Guide",
                    ].map((item, i) => (
                        <div key={i} className="bg-gray-50 border p-3 rounded hover:bg-gray-100">{item}</div>
                    ))}
                </div>
            </section>

            {/* 5. Sample Material Preview */}
            <section className="bg-gray-100 py-14 px-4 text-center">
                <h2 className="text-2xl font-bold mb-4">Preview the Study Material</h2>
                <p className="text-gray-600 mb-6">Click below to view a sample PDF from the pack.</p>
                <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                    Download Sample PDF
                </button>
            </section>

            {/* 6. Why Choose Us */}
            <section className="max-w-[1320px] mx-auto px-4 py-14">
                <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Material?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-700">
                    {[
                        "Created by NIFT Experts",
                        "Exam-Oriented Approach",
                        "Updated Every Year",
                        "Printable PDF Format",
                        "Includes Practice Sets",
                        "Money-back Guarantee",
                    ].map((feature, i) => (
                        <div key={i} className="bg-white p-4 border rounded shadow-sm">
                            {feature}
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. Add to Cart / Buy Now */}
            <section className="max-w-[1320px] mx-auto px-4 py-10">
                <div className="grid lg:grid-cols-[70%_auto] gap-10">
                    <div className="bg-white shadow-md rounded p-5">
                        <h3 className="text-[30px] font-semibold mb-4">Material Details</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                            <li>Digital delivery (no physical copies)</li>
                            <li>Compatible with all devices</li>
                            <li>One-time access, lifetime validity</li>
                            <li>Ideal for self-paced learners</li>
                        </ul>
                    </div>
                    <div className="bg-white shadow-xl rounded p-5">
                        <img
                            className="w-full h-[200px] object-cover object-top rounded"
                            src="https://www.inframedesigninstitute.com/assets/upload/images/nid%20nift%20ceed%20pg%202026.jpg"
                            alt="NIFT Pack"
                        />
                        <div className="mt-4">
                            <p className="text-xl font-semibold mb-1">NIFT B.FTech Pack</p>
                            <span className="text-lg text-gray-700 block mb-3">₹1299 /-</span>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="bg-gray-200 text-gray-900 hover:bg-gray-300 py-2 rounded">Add to Cart</button>
                                <button className="bg-gray-900 text-white hover:bg-gray-800 py-2 rounded">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Testimonials */}
            <section className="bg-gray-50 py-14 px-4">
                <h2 className="text-2xl font-bold mb-6 text-center">What Our Students Say</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1320px] mx-auto">
                    {[
                        {
                            name: "Aditi Sharma",
                            feedback: "Helped me clear NIFT in my first attempt. Study material was very focused.",
                        },
                        {
                            name: "Rohit Yadav",
                            feedback: "Very organized and updated. The mock papers made a huge difference.",
                        },
                        {
                            name: "Sneha Patil",
                            feedback: "Best investment I made. Loved the portfolio prep guide!",
                        },
                    ].map((student, i) => (
                        <div key={i} className="bg-white p-5 border rounded shadow-sm text-sm">
                            <p className="italic text-gray-700 mb-2">“{student.feedback}”</p>
                            <p className="font-semibold text-gray-900">— {student.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 9. FAQs */}
            <section className="max-w-[1320px] mx-auto px-4 py-14">
                <h2 className="text-2xl font-bold mb-6">FAQs</h2>
                <div className="space-y-4 text-sm text-gray-700">
                    {[
                        {
                            q: "Is this a physical book or digital?",
                            a: "This is a digital study pack delivered via email instantly after purchase.",
                        },
                        {
                            q: "Is this material updated for 2025?",
                            a: "Yes, all content is updated based on the latest exam pattern and syllabus.",
                        },
                        {
                            q: "Can I access it on mobile?",
                            a: "Yes, the PDFs and recordings are compatible with mobile, tablet, and desktop.",
                        },
                    ].map((faq, i) => (
                        <div key={i}>
                            <p className="font-medium">{faq.q}</p>
                            <p className="text-gray-600">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 10. Final CTA */}
            <section className="bg-gray-900 text-white text-center py-12 px-4">
                <h2 className="text-2xl font-bold mb-3">Ready to Ace the NIFT Exam?</h2>
                <p className="text-gray-300 mb-5">Get started today with expert-backed materials designed to help you succeed.</p>
                <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                    Buy Now for ₹1299
                </button>
            </section>
        </div>
    );
}
