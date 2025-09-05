'use client'
import { FaFacebookSquare, FaGraduationCap, FaLinkedin, FaRegNewspaper, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { RiFilePaper2Fill, RiInstagramFill } from "react-icons/ri";
import { megaMenuData } from "../ApiData/categoryApi";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import { FaFileCirclePlus } from "react-icons/fa6";


export default function FooterNew() {
    let topColleges = ['top College of Architecture', 'top College of Design', 'top College of Fine Art', 'top College of Fashion Design']

    return (
        <>
            <footer className="">
                <div className="w-full lg:mt-[60px]  bg-gradient-to-b from-black/5 via-transparent to-transparent text-black lg:px-6 px-3">
                    <div className="max-w-[1320px] mx-auto py-[30px] ">
                        <h2 className="text-[30px] text-black font-bold capitalize mb-5 pb-1">Courses We Provide</h2>
                        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                            {megaMenuData.map((item, index) => (
                                <ul key={index}>
                                    <li className="capitalize text-[20px] mb-3 font-semibold">
                                        {item.parentCategory}
                                    </li>
                                    {item.subCategory.map((subCat, subIdx) =>
                                        subCat.courses.map((course, courseIndex) => (
                                            <Link
                                                key={`${subIdx}-${courseIndex}`}
                                                href={`/${item.parentCategory.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}/${course.toLowerCase().replace(/[^a-zA-Z0-9+]/g, "-")}`}
                                            >
                                                <li key={courseIndex} className="my-2 text-[16px] cursor-pointer text-gray-700 duration-300 capitalize hover:text-black">
                                                    {course}
                                                </li>
                                            </Link>
                                        ))
                                    )}
                                </ul>
                            ))}
                        </div>

                    </div>
                </div>

                <div className="w-full lg:py-[30px] py-[20px] bg-black lg:px-6 px-3 " >
                    <div className="max-w-[1320] mx-auto">
                        <div className="grid lg:grid-cols-[20%_22%_22%_auto] md:grid-cols-2 grid-cols-1  justify-between items-start lg:gap-0 gap-5">
                            <div className="text-white  pr-5 h-[100%] border-white">
                                <h2 className="text-[24px] mb-4 font-semibold capitalize ">Quick Links</h2>
                                <ul>
                                    <li className="mb-[10px] hover:text-gray-300 duration-100 text-[17px] cursor-pointer flex items-center gap-2"><FaFileCirclePlus className="text-[22px]" /> Admission Process  </li>
                                    <Link href={'/our-blogs'}><li className="mb-[10px] hover:text-gray-300 duration-100 text-[17px] cursor-pointer flex items-center gap-2"><RiFilePaper2Fill className="text-[22px]" />Our  Blogs</li></Link>
                                    <Link href={'/download'}><li className="mb-[10px] hover:text-gray-300 duration-100 text-[17px] cursor-pointer flex items-center gap-2"><FaDownload className="text-[22px]" /> Download  </li></Link>
                                    <Link href={'/download'}><li className="mb-[10px] hover:text-gray-300 duration-100 text-[17px] cursor-pointer flex items-center gap-2"><FaRegNewspaper className="text-[22px]" /> Career  </li></Link>

                                    {topColleges.map((item, index) => {
                                        return (
                                            <Link key={index} href={`/top-colleges/${item.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`} ><li key={index} className="mb-[10px] hover:text-gray-300 duration-100 text-[16px] cursor-pointer capitalize flex items-center gap-2"><FaGraduationCap className="text-[25px]" /> {item}</li></Link>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="text-white  pr-5 border-white">
                                <h2 className="text-[24px] mb-2 font-semibold capitalize">About Us</h2>
                                <p className="text-[16px] text-justify leading-relaxed tracking-wider" >InFrame Design Institute (IDI), established in 2013, is a premier
                                    design education center located in Jodhpur, Rajasthan. Founded by a
                                    group of artists,
                                    IDI offers comprehensive coaching for various
                                    design entrance examinations, including NIFT, NID, and UCEED.
                                </p>

                            </div>

                            <div className="text-white max-w-[220px]  pr-3 h-[100%] border-white">
                                <h2 className="text-[24px] font-semibold mb-4 capitalize ">Connect with us</h2>
                                <div className="mt-[15px]">
                                    <p className=" text-[16px]">Phone <span className="hover:underline duration-100 cursor-pointer">+91 9649964937</span></p>
                                    <p className=" text-[16px]"> <span className="hover:underline duration-100 cursor-pointer">info@inframedesigninstitute.com</span></p>
                                </div>

                                <img className="lg:w-[140px] w-[100px] lg:ml-6 ml-3 rounded mt-3 lg:h-[140px] h-[100px]" src="/QrCode.avif" />
                                <div className="flex items-center gap-4 mt-4">
                                    <Link href={'/about-us'}><p className="cursor-pointer border-r-2 border-white pr-3 hover:text-gray-300 duration-200">About Us</p></Link>
                                    <Link href={'/contact-us'}><p className="cursor-pointer  border-r-2 border-white pr-3 hover:text-gray-300 duration-200">Contact Us</p></Link>
                                </div>
                            </div>
                            <div className="text-white h-full">
                                {/* Social Channels */}
                                <h3 className="text-[24px] font-semibold capitalize">Social Channels</h3>
                                <div className="flex items-center gap-4 text-[30px] cursor-pointer my-2 mr-1">
                                    <Link target="_blank" href={'https://www.youtube.com/@inframedesigninstitute'}><FaYoutube className="hover:text-gray-200 duration-100" /></Link>
                                    <Link target="_blank" href={'https://www.facebook.com/inframedesigninstitute/'}> <FaFacebookSquare className="hover:text-gray-200 duration-100" /></Link>
                                    <Link target="_blank" href={'https://www.instagram.com/inframedesigninstitute/?hl=en'}><RiInstagramFill className="hover:text-gray-200 duration-100" /></Link>
                                    {/* <FaTwitterSquare className="hover:text-gray-200 duration-100" /> */}
                                    <Link target="_blank" href={'https://in.linkedin.com/in/inframedesigninstitute'}><FaLinkedin className="hover:text-gray-200 duration-100" />  </Link>
                                </div>

                                {/* App Promotion */}
                                <h3 className="text-[16px] mt-6 font-semibold capitalize">
                                    Get the app for better experience
                                </h3>
                                <div className="flex mt-4 -ml-3">
                                    <Link target="_blank" href={'https://play.google.com/store/apps?hl=en_IN'}><img
                                        className="w-[160px] h-[70px] object-contain cursor-pointer "
                                        src="https://www.snapper.co.nz/wp-content/uploads/2020/11/AppStore-logo-1.png"
                                        alt="Download on the App Store"
                                    /></Link>
                                    <Link target="_blank" href={'https://play.google.com/store/apps?hl=en_IN'}><img
                                        className="w-[160px] h-[70px] object-contain cursor-pointer "
                                        src="/playStore.png"
                                        alt="Get it on Google Play"
                                    /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center font-semibold text-[14px]  bg-black text-white">
                    <p className="lg:text-center pt-5 text-justify py-[3px] lg:p-0 p-3">© 2025 Inframe Design Institute is a Unit of Inframe Educational Society Registered under the Rajasthan Society Act. All rights reserved</p>
                    <div className="pb-[20px] flex flex-wrap gap-3 p-5">
                        <Link href={'/privacy-policy'}><span className="cursor-pointer hover:text-gray-300 duration-200"> · Privacy Policy</span></Link>
                        <Link href={'/cancellation-and-refund'}><span className="cursor-pointer hover:text-gray-300 duration-200"> ·  Cancellation and Refund</span></Link>
                        <Link href={'/terms-and-conditions'}><span className="cursor-pointer hover:text-gray-300 duration-200"> ·   Terms & Conditions</span></Link>
                        <Link href={'/shipping-and-delivery'}><span className="cursor-pointer hover:text-gray-300 duration-200"> · Shipping and Delivery</span></Link>
                    </div>
                </div>

            </footer>
        </>
    )
}