(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/course/[slug]/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>CoursePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CoursePage() {
    _s();
    let slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])().slug.replace(/[^a-zA-Z0-9]/g, " ");
    const [currentFaqId, setCurrentFaqId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let faqs = [
        {
            id: "1",
            question: "What is inframe?",
            answer: "inframe is an online learning platform that offers skill-based courses to help you improve your professional abilities inframe is an online learning platform that offers skill-based courses to help you improve your professional abilitiesinframe is an online learning platform that offers skill-based courses to help you improve your professional abilities."
        },
        {
            id: "2",
            question: "How can I enroll in a course?",
            answer: "You can enroll by selecting your prefergray course on our website and clicking the &#39;Buy Now&#39; or &#39;Add to Cart&#39; button."
        },
        {
            id: "3",
            question: "Are the courses available in Hindi?",
            answer: "Yes, many of inframe is an online learning platform that offers skill-based courses to help you improve your professional abilitiesinframe is an online learning platform that offers skill-based courses to help you improve your professional abilitiesour courses are available in Hindi to make learning easier for regional students."
        },
        {
            id: "4",
            question: "Do I get a certificate after course completion?",
            answer: "Yes, we proinframe is an online learning platform that offers skill-based courses to help you improve your professional abilitiesvide a certificate upon completion of all courses, which you can add to your resume."
        },
        {
            id: "5",
            question: "Can I access the courses on mobile devices?",
            answer: "Absolutelyinframe is an online learning platform that offers skill-based courses to help you improve your professional abilitiesinframe is an online learning platform that offers skill-based courses to help you improve your professional abilities, our courses work smoothly on desktops, tablets, and mobile devices."
        },
        {
            id: "6",
            question: "Is infraomplete the courses?",
            answer: "No, you get lifetime access and can complete the courses at your own pace."
        },
        {
            id: "7",
            question: "What kind of support is available during the course?",
            answer: "We offer tecinframe is an online learning platform that offers skill-based courses to help you improve your professional abilitiesinframe is an online learning platform that offers skill-based courses to help you improve your professional abilitieshnical support and doubt clearing sessions to ensure a smooth learning experience."
        }
    ];
    //   let courses = [
    //     "nift course",
    //     "nata course",
    //     "nift course",
    //     "nata course",
    //     "nift course",
    //     "nata course",
    //     "nift course",
    //     "nata course",
    //   ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1320] mx-auto lg:px-6 px-3 lg:py-[0] sm:py-[20]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full my-[30px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full mx-auto bg-gradient-to-r p-10 from-gray-100 via-transparent to-transparent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-3xl capitalize sm:text-[30px] font-bold text-gray-800 mb-2",
                                children: slug
                            }, void 0, false, {
                                fileName: "[project]/src/app/course/[slug]/page.js",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-800 text-[18px] lg:text-start text-justify sm:tracking-normal tracking-tighter leading-[30px] mb-6",
                                children: "NIFT course is an online program designed to enhance students' abilities in fashion and design. This structugray curriculum includes daily recorded lectures, live mentorship, and mock tests to ensure deep conceptual clarity and competitive edge."
                            }, void 0, false, {
                                fileName: "[project]/src/app/course/[slug]/page.js",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex flex-wrap lg:justify-start sm:justify-center gap-4 my-6",
                                children: [
                                    {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHandPaper"], {
                                            className: "text-[20px]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/course/[slug]/page.js",
                                            lineNumber: 111,
                                            columnNumber: 25
                                        }, this),
                                        text: "3+ Mock Tests"
                                    },
                                    {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiStudentBold"], {
                                            className: "text-[20px]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/course/[slug]/page.js",
                                            lineNumber: 115,
                                            columnNumber: 25
                                        }, this),
                                        text: "Mentor Support"
                                    },
                                    {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiRecordFill"], {
                                            className: "text-[20px]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/course/[slug]/page.js",
                                            lineNumber: 119,
                                            columnNumber: 25
                                        }, this),
                                        text: "Daily Recordings"
                                    }
                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-2 bg-gray-800 text-white px-4 py-3 rounded-lg shadow-sm text-[16px] hover:scale-[1.03] transition duration-300",
                                        children: [
                                            item.icon,
                                            item.text
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/course/[slug]/page.js",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/course/[slug]/page.js",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[45px]  font-extrabold text-gray-900 block mb-6",
                                children: "₹ 1399/-"
                            }, void 0, false, {
                                fileName: "[project]/src/app/course/[slug]/page.js",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid sm:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center justify-center gap-2 bg-gray-300 text-gray-700 hover:bg-gray-800 hover:text-white transition duration-300 py-3 rounded-md text-[20px] font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaVideo"], {}, void 0, false, {
                                                fileName: "[project]/src/app/course/[slug]/page.js",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this),
                                            "Watch Demo"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/course/[slug]/page.js",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition duration-300 py-3 rounded-md text-[20px] font-semibold",
                                        children: "Buy Now"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/course/[slug]/page.js",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/course/[slug]/page.js",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/course/[slug]/page.js",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/course/[slug]/page.js",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full lg:p-3 lg:my-[60px] my-[30px] bg-[#f8f8f8]  text-white rounded-[10px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto py-[30px] p-5 rounded-[10px]  text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-5 tracking-tight text-3xl text-gray-900",
                                    children: "Frequently Asked Questions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/course/[slug]/page.js",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                faqs.map((item, index)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                onClick: ()=>{
                                                    setCurrentFaqId(item.id);
                                                    currentFaqId === item.id && setCurrentFaqId(0);
                                                },
                                                className: "".concat(item.id === currentFaqId ? "" : "", " w-[100%] lg:text-[20px] text-[16px] hover:text-gray-900 text-gray-600 py-[18px]  duration-200 cursor-pointer border-b-[1px] border-[#b1b1b1] mt-[0px] grid gap-1 grid-cols-[95%_auto] items-center "),
                                                children: [
                                                    item.question,
                                                    item.id === currentFaqId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMinusCircle"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/course/[slug]/page.js",
                                                        lineNumber: 172,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlusCircle"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/course/[slug]/page.js",
                                                        lineNumber: 174,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/course/[slug]/page.js",
                                                lineNumber: 162,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "".concat(currentFaqId === item.id ? "h-auto opacity-[1]" : "h-0 scale-0 opacity-0", " text-gray-900 rounded-b-lg my-[10px]  text-[18px] left-0  w-[100%]  "),
                                                children: item.answer
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/course/[slug]/page.js",
                                                lineNumber: 177,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/course/[slug]/page.js",
                                        lineNumber: 161,
                                        columnNumber: 19
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/course/[slug]/page.js",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/course/[slug]/page.js",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/course/[slug]/page.js",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/course/[slug]/page.js",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/course/[slug]/page.js",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(CoursePage, "Kji2H4Pzv4P97PPVFdb5ANuGddU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = CoursePage;
var _c;
__turbopack_context__.k.register(_c, "CoursePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_course_%5Bslug%5D_page_1a4a8639.js.map