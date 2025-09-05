"use client";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";


export default function TopCourses() {
  return (
    <div className="w-full ">
      <div className="max-w-[1320px] lg:px-6 mx-auto px-3">
        <h3 className="lg:text-[40px] text-[30px] text-start font-bold  text-black lg:py-5  bg-white">Top Selling Course</h3>
        <OnlineCourses />
        <OfflineCourses />
        <StudyMaterial />
      </div>
    </div>
  );
}

export function OnlineCourses() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500, // Slide change interval: 2 seconds
    pauseOnHover: true,
    slidesToShow: 4, // Show 4 items at a time
    slidesToScroll: 1, // Slide 1 item at a time
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2, // Show 2 items at a time on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 item at a time on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  let CoursesData = [
    {
      title: "Ceed Course",
      description:
        "Master fashion design skills with interactive online lessons. Prepare confidently for NIFT entrance exams from anywhere",
      image:
        "study-materials/ceed-pg.png",
      price: "1399",
    },
    {
      title: "Nid Course",
      description:
        "Explore creative design skills through interactive online sessions. Get ready for NID admissions with expert guidance anytime, anywhere.",
      image:
        "study-materials/nid-ug.jpg",
      price: "1599",
    },
    {
      title: "Uceed Course",
      description:
        "Learn design concepts and problem-solving skills from anywhere. Prepare effectively for the UCEED exam with interactive online lessons.",
      image:
        "study-materials/uceed-ug.jpg",
      price: "799",
    },
    {
      title: "Nid+Nift+Uceed Course",
      description:
        "Master architecture basics with flexible online lessons. Prepare confidently for the NATA exam from the comfort of your home.",
      image:
        "study-materials/nid-nift-uceed.jpg",
      price: "799",
    },
    {
      title: "Nata+Jee",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "study-materials/nata+jee.jpg",
      price: "799",
    },
  ];
  return (
    <div className="my-[0px]">
      <h3 className="text-gray-900  font-normal text-[25px] pt-3 mb-0" >
        Best Selling Online Courses
      </h3>

      {/* Large screens: Grid */}
      <div className="my-4">

        <Slider {...sliderSettings}>
          {CoursesData.map((item, index) => (
            <div key={index} className="sm:pr-4">
              <div className="rounded-[10px] shadow-sm group overflow-hidden hover:shadow-md transition duration-300">
                <img
                  className="w-full h-[390px] object-cover object-top rounded-t-[10px] group-hover:scale-[1.01] transition duration-300"
                  src={item.image}
                  alt={item.title}
                />
                <div className="p-5 h-[auto]">
                  <Link href={`/course/${item.title.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`}><h2 className="text-[18px] duration-300 font-semibold mb-2 hover:text-gray-950 text-gray-500 hover:underline cursor-pointer">{item.title}</h2></Link>

                  <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                    <FaIndianRupeeSign /> {item.price}/-
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <Link href={'/checkout'}><button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[7px] text-[14px] w-[100%] rounded-lg hover:text-white font-medium">
                      Add to Cart
                    </button></Link>
                    <button className="bg-gray-900 hover:bg-gray-800 transition duration-300 cursor-pointer py-[7px] text-[14px] rounded-lg text-white font-medium">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export function OfflineCourses() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000, // Slide change interval: 2 seconds
    pauseOnHover: true,
    slidesToShow: 4, // Show 4 items at a time
    slidesToScroll: 1, // Slide 1 item at a time
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2, // Show 2 items at a time on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 item at a time on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  let CoursesData = [
    {
      title: "Combo nata + jee-mains",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://www.inframedesigninstitute.com/assets/upload/images/NATA%20JEE%20B.ARCH-10.jpg",
      price: "799",
    },
    {
      title: "NID Course",
      description:
        "Attend immersive, hands-on design workshops in a classroom environment. Receive expert mentorship to prepare for NID entrance exams and creative challenges.",
      image:
        "https://www.inframedesigninstitute.com/assets/upload/images/nid%20ug%202026.jpg",
      price: "1599",
    },
    {
      title: "UCEED Course",
      description:
        "Join interactive, in-person design classes with expert instructors. Build strong skills and confidence to ace the UCEED exam.",
      image:
        "https://www.inframedesigninstitute.com/assets/upload/images/uceed%202026.jpg",
      price: "1299",
    },
    {
      title: "FDDI Course",
      description:
        "Attend practical, classroom-based sessions focused on footwear and leather goods design. Get hands-on training to excel in FDDI entrance and industry readiness.",
      image:
        "https://www.inframedesigninstitute.com/assets/upload/images/fddi%20ug%202026(1).jpg",
      price: "799",
    },
  ];
  return (
    <div className="my-[0px]">
      <h3 className="text-gray-900  font-normal text-[25px] pt-3 mb-0" >
        Best Selling Offline Course
      </h3>

      {/* Large screens: Grid */}
      <div className="my-4">

        <Slider {...sliderSettings}>
          {CoursesData.map((item, index) => (
            <div key={index} className="sm:pr-4">
              <div className="rounded-[10px] shadow-sm group overflow-hidden hover:shadow-md transition duration-300">
                <img
                  className="w-full h-[390px] object-cover object-top rounded-t-[10px] group-hover:scale-[1.01] transition duration-300"
                  src={item.image}
                  alt={item.title}
                />
                <div className="p-5 h-[auto]">
                  <Link href={`/course/${item.title.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`}><h2 className="text-[18px] duration-300 font-semibold mb-2 hover:text-gray-950 text-gray-500 hover:underline cursor-pointer">{item.title}</h2></Link>

                  <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                    <FaIndianRupeeSign /> {item.price}/-
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <Link href={'/checkout'}><button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[7px] text-[14px] w-[100%] rounded-lg hover:text-white font-medium">
                      Add to Cart
                    </button></Link>
                    <button className="bg-gray-900 hover:bg-gray-800 transition duration-300 cursor-pointer py-[7px] text-[14px] rounded-lg text-white font-medium">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export function StudyMaterial() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500, // Slide change interval: 2 seconds
    pauseOnHover: true,
    slidesToShow: 4, // Show 4 items at a time
    slidesToScroll: 1, // Slide 1 item at a time
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2, // Show 2 items at a time on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 item at a time on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  let CoursesData = [
    {
      title: "Fddi Course",
      description:
        "Master the art of interior design by learning how to create cohesive room themes, apply color theory, and develop skills to elevate your design perspective.",
      image:
        "https://www.inframedesigninstitute.com/assets/upload/images/fddi%20ug%202026(1).jpg",
      price: "1399",
    },
    {
      title: "Nid Course",
      description:
        "Learn the fundamentals of visual communication, typography, and branding using tools like Adobe Photoshop and Illustrator to create stunning digital designs.",
      image:
        "https://www.inframedesigninstitute.com/assets/upload/images/nid%20ug%202026.jpg",
      price: "1599",
    },
    {
      title: "Nid + Nift + Ceed ",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://www.inframedesigninstitute.com/assets/upload/images/nid%20nift%20ceed%20pg%202026.jpg",
      price: "1199",
    },
    {
      title: "Combo nata + jee-mains",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://www.inframedesigninstitute.com/assets/upload/images/NATA%20JEE%20B.ARCH-10.jpg",
      price: "799",
    },

  ];
  return (
    <div className="my-[0px]">
      <h3 className="text-gray-900  font-normal text-[25px] pt-3 mb-0" >
        Best Selling Study Material
      </h3>

      {/* Large screens: Grid */}
      <div className="my-4">

        <Slider {...sliderSettings}>
          {CoursesData.map((item, index) => (
            <div key={index} className="sm:pr-4">
              <div className="rounded-[10px] shadow-sm group overflow-hidden hover:shadow-md transition duration-300">
                <img
                  className="w-full h-[390px] object-cover object-top rounded-t-[10px] group-hover:scale-[1.01] transition duration-300"
                  src={item.image}
                  alt={item.title}
                />
                <div className="p-5 h-[auto]">
                  <Link href={`/course/${item.title.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`}><h2 className="text-[18px] duration-300 font-semibold mb-2 hover:text-gray-950 text-gray-500 hover:underline cursor-pointer">{item.title}</h2></Link>

                  <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                    <FaIndianRupeeSign /> {item.price}/-
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <Link href={'/checkout'}><button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[7px] text-[14px] w-[100%] rounded-lg hover:text-white font-medium">
                      Add to Cart
                    </button></Link>
                    <button className="bg-gray-900 hover:bg-gray-800 transition duration-300 cursor-pointer py-[7px] text-[14px] rounded-lg text-white font-medium">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

