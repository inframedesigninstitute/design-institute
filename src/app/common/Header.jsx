"use client";
import React, { use, useEffect, useState } from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";

import {
  FaAngleDown,
  FaAngleRight,
  FaAngleUp,
  FaChevronDown,
  FaClosedCaptioning,
  FaPhoneAlt,
  FaUserAlt,
} from "react-icons/fa";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import UserControl from "./UserControl";
import MegaMenu from "../homePageComponents/MegaMenu";
import { megaMenuData } from "../ApiData/categoryApi";
import Link from "next/link";
import { IoMdArrowForward, IoMdClose } from "react-icons/io";

export default function Header() {
  const [enquiryModel, setEnquiryModel] = useState(false)
  const [subCategoryMenu, setSubCategoryMenu] = useState('')
  const [contactModel, setcontactModel] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activePage, setActivePage] = useState('');
  const [MegaMenuOpen, setMegaMenuOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setEnquiryModel(true)
    }, 10000)
  }, [])

  const [selectedProgram, setSelectedProgram] = useState('');
  const [courseOptions, setCourseOptions] = useState([]);



  const handleProgramChange = (e) => {
    const selected = e.target.value;
    setSelectedProgram(selected);

    // Find the selected parent category in megaMenuData
    const selectedData = megaMenuData.find(
      (item) => item.parentCategory === selected
    );

    // Flatten all courses under subcategories
    const allCourses =
      selectedData?.subCategory.flatMap((subCat) => subCat.courses) || [];
    setCourseOptions(allCourses);
  }

  return (
    <header className="sticky top-0 z-[100] bg-white">
      {(activePage || enquiryModel) && (
        <div className="w-[100%] h-[100vh] fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] z-[40]"></div>
      )}

      {activePage && (
        <UserControl activePage={activePage} setActivePage={setActivePage} />
      )}
      {/* header for pc */}
      <div className="w-full shadow-lg z-[100] lg:block hidden px-6">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between py-[0px]">
          <div className="flex items-center gap-5">
            <Link href={'/'}><img
              className="w-[160px] h-[70] object-cover"
              src="/logo.jpg"
              alt=""
            /></Link>
            <button onClick={() => setMegaMenuOpen(!MegaMenuOpen)} className={`${MegaMenuOpen ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} flex items-center  gap-2 border-[2px] border-gray-900 rounded-[10px] px-[15px] py-[8px] text-gray-900    cursor-pointer  font-semibold duration-300 hover:bg-gray-900 hover:text-white hover:border-transparent`}>
              All Courses <FaAngleDown className={`${MegaMenuOpen ? 'rotate-180' : 'rotate-0'} duration-200`} />
              <MegaMenu MegaMenuOpen={MegaMenuOpen} setMegaMenuOpen={setMegaMenuOpen} />

              {MegaMenuOpen && <div className="absolute top-[100%] z-50 left-0 w-full h-screen bg-[rgba(0,0,0,0.6)] "></div>}
            </button>
          </div>

          <button
            onClick={() => setEnquiryModel(true)}
            className="fixed top-1/4 right-[23px] translate-x-[50%] -rotate-90 bg-white  border-2 border-black px-7 py-[10px] font-semibold cursor-pointer text-[18px] rounded-md shadow-lg  hover:bg-white hover:text-black  duration-500 "
          >
            Enquiry Now
          </button>

          {/* Mega menu open and close functionality */}
          <div className="flex items-center gap-5">
            <ul className="flex items-center">
              {megaMenuData.map((items, index) => {
                const { parentCategory } = items
                const { subCategory } = items;
                return (
                  <li
                    key={index}
                    className="text-[16px] font-semibold hover:bg-gray-100 px-[10px] py-[35px] duration-300 cursor-pointer capitalize text-gray-500 group "
                  >
                    {items.parentCategory}
                    <div className={`invisible opacity-0 group-hover:opacity-100 origin-top transition-all brightness-110 duration-300 ease-in-out group-hover:visible absolute top-[100%] left-1/2 -translate-x-1/2 w-[1020px] h-auto bg-white shadow-2xl border-[1px] border-gray-300 grid grid-cols-4 gap-4 p-7 rounded-b-[35px] z-50`}>
                      {subCategory.map((subCat, ind) => (
                        <ul key={ind} className="border-r-[1px] border-[#e1e1e1]">
                          <li className="text-[20px] capitalize text-gray-900 mb-2">
                            {subCat.name}
                          </li>
                          <ul>
                            {subCat.courses.map((course, courseIndex) => (
                              <Link
                                key={courseIndex}
                                href={`/${parentCategory.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}/${course.toLowerCase().replace(/[^a-zA-Z0-9+]/g, "-")}`}
                              >
                                <li className="ml-2 my-[10px] text-gray-600 hover:text-gray-900 duration-300">
                                  {course}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        </ul>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>

            <button
              onClick={() => {
                setActivePage("login");
                setMegaMenuOpen(false);
              }}
              className="bg-gray-950 text-white duration-300 cursor-pointer px-[25px] rounded-[10px] hover:bg-white border-[2] border-black hover:text-gray-900 font-semibold py-[10px] text-[16px]"
            >
              Login / Register
            </button>
          </div>

        </div>
      </div>

      {/* header for mobile */}
      <div className="lg:hidden block">
        <div className="flex items-center justify-between gap-0 py-[00px] px-2 shadow-xl">
          <div className="flex items-center gap-0">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-[30px]"
            >
              <HiOutlineBars3CenterLeft />
            </button>
            <Link href={'/'}><img
              className="w-[90px] h-[90px] object-cover"
              src="/responsiveLogo.jpg"
              alt=""
            /></Link>
          </div>
          <button
            onClick={() => {
              setActivePage("login")
              setMegaMenuOpen(false)
            }}
            className="bg-gray-900 hover:bg-gray-800 duration-300 cursor-pointer px-[25px] rounded-[10px] py-[8px] text-white text-[16px]"
          >
            Login
          </button>
        </div>
        <div
          className={`${mobileMenu ? "left-0" : "-left-[100%]"
            } duration-300 fixed top-0 w-[100%] h-[150vh] bg-white px-3 py-8`}
        >
          <div className="flex justify-between pr-[6px]">
            <Link href={'/'}><img
              className="w-[200px] h-[100px] object-cover"
              src="/logo.jpg"
              alt=""
            /></Link>
            <button
              onClick={() => setMobileMenu(false)}
              className="text-[30px] "
            >
              <MdClose />
            </button>
          </div>
          <ul className="px-3">
            {megaMenuData.map((item, index) => {
              // console.log(item.parentCategory)
              return (
                <li onClick={() => setSubCategoryMenu(item.parentCategory)} key={index} className="my-[25px] text-[22px] border-b-[1px] border-gray-100 pb-2">
                  {item?.parentCategory}
                </li>
              )
            })}
            <li onClick={() => {
              setEnquiryModel(true)
              setMobileMenu(false)
            }} className="my-[25px] text-[22px] border-b-[1px] border-gray-100 pb-2">
              Enquiry Now
            </li>

            <button
              onClick={() => {
                setActivePage("login");
                setMobileMenu(false);
                setMegaMenuOpen(false)
              }}
              className="w-full bg-gray-900 hover:bg-gray-900 duration-300 text-white rounded-[10px] py-[10px] text-[22px]"
            >
              Login / Register
            </button>
          </ul>
        </div>

        {/* hover mega menu functionality */}
        <div
          className={`${subCategoryMenu ? 'left-0' : 'left-[-100%]'
            } fixed top-0 left-0 w-full h-screen bg-white py-2 px-3 overflow-y-scroll duration-300 scrollbar`}
        >
          {/* Header */}
          <div className="mb-6">
            <div className="flex mb-3 justify-between pr-[6px]">
              <Link href={'/'}><img
                className="w-[200px] h-[100px] object-cover"
                src="/logo.jpg"
                alt=""
              /></Link>
              <button
                onClick={() => setSubCategoryMenu('')}
                className="text-3xl text-gray-900"
                aria-label="Close Menu"
              >
                <IoMdArrowForward />
              </button>
            </div>
            <h3 className="text-xl mb-5 bg-gray-900 text-white px-3 rounded py-[12px]  ">
              {subCategoryMenu}
            </h3>

            {/* mega menu  */}
            <ul className="">
              {megaMenuData
                .filter((parentCat) => parentCat.parentCategory === subCategoryMenu)
                .flatMap((parentCat) =>
                  parentCat.subCategory.flatMap((subCat, subIdx) =>
                    subCat.courses.map((course, courseIdx) => (
                      <Link
                        key={`${subIdx}-${courseIdx}`}
                        href={`/course/${course.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`}
                      >
                        <li
                          onClick={() => {
                            setMobileMenu(false);
                            setSubCategoryMenu("");
                          }}
                          className="shadow-xs border-[1px] border-gray-200 py-3 px-4 rounded-md bg-white text-gray-800 hover:bg-gray-100 mb-3 transition duration-200"
                        >
                          {course}
                        </li>
                      </Link>
                    ))
                  )
                )}
            </ul>


          </div>


        </div>


      </div>


      {/* contact model work       */}
      <div
        onClick={() => setcontactModel(!contactModel)}
        className={`${contactModel ? "" : ""
          } fixed cursor-pointer top-[88%] right-[25px] z-[110] text-[28px] hover:bg-white bg-gray-900 text-white hover:text-gray-900 rounded-full lg:p-4 p-3 transition-all ease-initial duration-400 shadow-2xl`}
      >
        {contactModel ? <IoMdClose /> : <FaPhoneAlt />}

        <div
          onClick={(e) => e.stopPropagation()}
          className={`${contactModel ? "opacity-[1] scale-[1]" : "opacity-0 scale-0"
            } transition-all duration-300 ease-in-out w-[300px] h-[auto] p-5 rounded-[10px] origin-bottom-right shadow-lg shadow-gray-500  bg-white z-[110] absolute -top-[300%] right-[60px]`}
        >
          <h3 className="text-[18px] text-gray-800 flex items-center gap-2">
            <FaUserAlt className="text-[16px]" /> Talk to a counsellor
          </h3>
          <p className="my-[5px] text-[14px] text-gray-700 text-start">
            Have doubts? Our support team will be happy to assist you !
          </p>
          <button className="w-[100%] py-[10px] border-[2px] text-[18px] border-gray-900 font-semibold mt-3 text-gray-900 rounded-[10px] cursor-pointer">
            +91 9649964937
          </button>
        </div>
      </div>

      {/* enquiry now model open and close functionality */}

      {/* Form */}
      <form className={`${enquiryModel ? 'right-0' : '-right-full'} space-y-5 lg:w-[30%] w-[80%] z-40  h-auto mt-5 flex-1 fixed top-1/2 duration-700 -translate-y-1/2  py-10 px-5 rounded-[10px] text-gray-900 bg-white `} >
        <div className="flex justify-between items-center">
          <h2 className="text-[30px] font-[500]">Enquiry now</h2>
          <span onClick={() => setEnquiryModel(false)} className="cursor-pointer hover:bg-gray-900 hover:text-white p-[10px] rounded-[10px] text-gray-900
           duration-300 text-[25px]"><IoClose /></span>
        </div>
        <input
          required
          className="border border-gray-300 w-full rounded-[15px] px-3 py-[10px] focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
          placeholder="Enter Your Name"
          type="email"
        />
        <input
          required
          className="border border-gray-300 w-full rounded-[15px] px-3 py-[10px] focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
          placeholder="Enter Your Email"
          type="email"
        />
        <input
          required
          className="border border-gray-300 w-full rounded-[15px] px-3 py-[10px] focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
          placeholder="Enter Your Phone Number"
          type="number"
        />
        <select className="border cursor-pointer border-gray-300 w-full rounded-[15px] px-3 py-[10px] focus:outline-none focus:ring-2 focus:ring-gray-900 transition text-gray-500">
          <option className="cursor-pointer" value="">Select your state</option>
          <option className="cursor-pointer" value="">Rajasthan</option>
          <option className="cursor-pointer" value="">Haryana</option>
          <option className="cursor-pointer" value="">Himachal Pradesh</option>
          <option className="cursor-pointer" value="">Punjab</option>
          <option className="cursor-pointer" value="">Gujrat</option>
        </select>

        <select className="border cursor-pointer border-gray-300 w-full rounded-[15px] px-3 py-[10px] focus:outline-none focus:ring-2 focus:ring-gray-900 transition text-gray-500">
          <option className="cursor-pointer" value="">Select your city</option>
          <option className="cursor-pointer" value="">Jodhpur</option>
          <option className="cursor-pointer" value="">Ajmer</option>
          <option className="cursor-pointer" value="">Jaipur</option>
          <option className="cursor-pointer" value="">Bikaner</option>
          <option className="cursor-pointer" value="">Bhilwara</option>
        </select>


        <select
          className="border cursor-pointer border-gray-300 w-full rounded-[15px] px-3 py-[10px] focus:outline-none focus:ring-2 focus:ring-gray-900 transition text-gray-500"
          onChange={handleProgramChange}
          value={selectedProgram}
        >
          <option value="">Select Program</option>
          {megaMenuData.map((item, index) => (
            <option key={index} value={item.parentCategory}>
              {item.parentCategory}
            </option>
          ))}
        </select>

        {/* Select Course */}
        <select
          className="border cursor-pointer border-gray-300 w-full rounded-[15px] px-3 py-[10px] focus:outline-none focus:ring-2 focus:ring-gray-900 transition text-gray-500"
          disabled={!selectedProgram}
        >
          <option value="">
            {selectedProgram ? 'Select Course' : 'Select Program first'}
          </option>
          {courseOptions.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full  rounded-[15px] font-semibold py-3 text-white bg-gray-900 hover:bg-white hover:text-gray-900 border-transparent  border-2 hover:border-gray-900 cursor-pointer duration-300 text-[16px]"
        >
          Enquiry Now
        </button>
      </form>


    </header>
  );
}
