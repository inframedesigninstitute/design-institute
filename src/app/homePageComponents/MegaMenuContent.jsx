import Link from "next/link";
import { megaMenuData } from "../ApiData/categoryApi";

export default function MegaMenuContent({ category, setMegaMenuOpen }) {
    const categoryData = megaMenuData.find(
        (item) => item.parentCategory === category
    );

    if (!categoryData) return null;

    return (
        <div className="p-0">
            {categoryData.subCategory.map((sub, idx) => (
                <div key={idx} className="w-full h-auto mb-5">
                    {/* If you want to show sub-category names (like "UG Exam", "PG Exam"), uncomment below */}
                    {/* 
      <h3 className="bg-red-50 text-red-500 rounded-xl w-full px-[10px] py-[14px]">
        {sub.name}
      </h3>
      */}
                    <div className="grid grid-cols-2 gap-5 w-full px-4">
                        {sub.courses.map((course, courseIdx) => (
                            <Link
                                key={courseIdx}
                                href={`/course/${course.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`}
                            >
                                <button
                                    onClick={() => setMegaMenuOpen(false)}
                                    className="w-full text-left bg-white shadow-md border-[1px] hover:border-black border-gray-200 transition-all ease-in-out duration-300 cursor-pointer rounded-xl px-4 py-4 text-[15px] font-medium"
                                >
                                    {course}
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>

    );
}
