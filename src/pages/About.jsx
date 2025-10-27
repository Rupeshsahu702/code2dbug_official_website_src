// src/pages/About.jsx
import React, { useEffect, useId, useState } from 'react'
import { BsInstagram } from 'react-icons/bs';
import { FaPlus, FaSuitcase } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdAddIcCall } from 'react-icons/md';

import { Link } from 'react-router-dom'

function About() {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const panelId = useId();

    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide on scroll down, show on scroll up
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <div className='absolute inset-0 z-10 ' >
                <nav className='h-[12vh] bg-transparent grid grid-cols-12 items-center' >
                    <div className='sm:col-span-3 col-span-5' >
                        <div className='sm:ml-[10vw] ml-[3vw] '  >
                            <Link to={'/'} >  <img className='sm:h-[18vh] rounded-lg mask-y-from-70% mask-y-to-90% mask-x-from-95% mask-x-to-99%  hidden sm:block h-[8vh]   ' src="./src/assets/c2dblogo.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className='col-span-7 sm:block hidden ' >
                        <div className='flex flex-row gap-[2.5vw] justify-end ' >
                            <Link to={'/'} className='text-white text-[13px] font-semibold ' >HOME</Link>
                            <Link to={'/about'} className='text-white  text-[13px] font-semibold '>ABOUT</Link>
                            <Link to={'/work'} className='text-white  text-[13px] font-semibold'>WORK</Link>
                            <Link to={'/careers'} className='text-white  text-[13px] font-semibold'>CAREER</Link>
                            <Link to={'/contact'} className='text-white  text-[13px] font-semibold '>CONTACT</Link>
                        </div>
                    </div>
                </nav>
            </div>
            <header className={`fixed top-0 left-0 block sm:hidden w-full z-50 bg-transparent text-white transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}>
                <div className="flex items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <div className='sm:ml-[10vw] ml-[3vw]  ' >
                        <img className='sm:h-[10vh] h-[8vh]   ' src="./src/assets/c2dblogo.png" alt="" />
                    </div>

                    {/* Hamburger icon (visible on mobile) */}
                    <button
                        className="lg:hidden  bg-grade opacity-80 h-[7vh] w-[7vh]  rounded-full focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? (
                            <span className="text-3xl">×</span>
                        ) : (
                            <div className="space-y-1 justify-center items-center flex flex-col ">
                                <span className="block w-6 h-0.5 bg-white"></span>
                                <span className="block w-6 h-0.5 bg-white"></span>
                                <span className="block w-6 h-0.5 bg-white"></span>
                            </div>
                        )}
                    </button>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex space-x-8 text-sm uppercase">
                        <a href="#about" className="hover:text-gray-300">About</a>
                        <a href="#work" className="hover:text-gray-300">Work</a>
                        <a href="#careers" className="hover:text-gray-300">Careers</a>
                        <a href="#journal" className="hover:text-gray-300">Journal</a>
                        <a href="#contact" className="hover:text-gray-300">Contact</a>
                    </nav>
                </div>

                {/* Mobile menu overlay */}
                <div
                    className={`fixed top-0 left-0 h-[80vh] w-full gap-[1vh] bg-grade text-white flex flex-col items-center justify-center space-y-6 text-lg tracking-wide transition-transform duration-300 ease-in-out lg:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className='sm:ml-[10vw] ml-[3vw] ' >
                        <img className='sm:h-[10vh] h-[8vh]   ' src="./src/assets/c2dblogo.png" alt="" />
                    </div>

                    <button
                        className="absolute top-4 right-4 text-3xl focus:outline-none"
                        onClick={() => setMenuOpen(false)}
                    >
                        ×
                    </button>
                    <a
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-gray-400 uppercase"
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-gray-400 uppercase"
                    >
                        About
                    </a>
                    <a
                        href="/work"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-gray-400 uppercase"
                    >
                        Work
                    </a>
                    <a
                        href="/careers"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-gray-400 uppercase"
                    >
                        Careers
                    </a>

                    <a
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-gray-400 uppercase"
                    >
                        Contact
                    </a>
                </div>
            </header>

            <div className='bg-grade' >
                <img src="./src/assets/group.jpg" alt="" />
            </div>

            <div className=' bg-grade px-[8vw] sm:px-[20vw]'  >
                <div className=' gap-[7vw]  sm:gap-[2vw] pt-[4vw] flex flex-col ' >
                    <span className=' text-xl sm:text-2xl font-bold text-white sm:font-semibold font-sans ' >Code2DBug is a Creative Tech & Innovation Studio that partners with startups, founders, and future-first brands to bring ideas to life through code, design, and strategic thinking. We don’t just build tech, we craft digital experiences that are purposeful, scalable, and ready for the real world.</span>
                    <img src="./src/assets/anuska.jpg" alt="" />
                    <span className='text-xl font-sans text-white ' >"I’m driven by the belief that real impact is created when good ideas meet great execution. India has no shortage of talent or ambition, what’s often missing is the structure to turn that into delivery.</span>
                    <span className='text-xl font-sans text-white ' >I started Code2DBug to bridge that gap, helping both companies and creators ship work they can be proud of. Whether it’s a line of code or a full product build, everything we do is built for trust, scale, and impact."</span>
                    <button className='h-[8vh] text-xl sm:text-lg  font-semibold bg-grade text-white hover:bg-grade hover:text-white ease-in transition-all cursor-pointer duration-200 w-full sm:w-[16vw] border-black border-[2px] ' > <a href="https://www.instagram.com/04braveheart?igsh=MWRyaTZrbDJsNXR6dw%3D%3D&utm_source=qr"> ABOUT PRAVIN </a> </button>
                </div>
            </div>

            <div className='px-[12vw]  bg-grade ' >
                <h1 className='text-5xl font-semibold font-sans pt-[8vh] text-white ' >Our Services</h1>
                <div className='grid sm:grid-cols-2 gap-[8vw] ' >
                    <div className=' mt-[10vh]  ' >
                        <div className=" border-gray-300 pb-4">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setOpen(!open)}
                            >
                                <h3 className="text-lg text-white transition-all ease-in duration-200 font-semibold tracking-wider text-gray-800">
                                    PRODUCT & TECH
                                </h3>

                                {open ? (
                                    <FaMinus className="w-5 h-5 text-white transition-transform duration-200" />
                                ) : (
                                    <FaPlus className="w-5 h-5 text-white transition-transform duration-200" />
                                )}
                            </div>

                            {/* Hidden Content */}
                            <div
                                className={`transition-all duration-200 overflow-hidden ${open ? "max-h-50 mt-4 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="text-gray-600 text-white leading-relaxed">
                                    <ul className="list-disc pl-6">
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Full-Stack Development</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg '  >App Development (Android / Flutter)</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Backend Architecture</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >AI/Automation Integrations</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >DevOps & Deployment</li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="border-t-2  border-white my-10" />
                        </div>

                        <div className=" border-white pb-4">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setOpen1(!open1)}
                            >
                                <h3 className="text-lg transition-all ease-in duration-200 font-semibold tracking-wider text-white">
                                    DESIGN & EXPERIENCE
                                </h3>

                                {open1 ? (
                                    <FaMinus className="w-5 h-5 text-white transition-transform duration-200" />
                                ) : (
                                    <FaPlus className="w-5 h-5 text-white transition-transform duration-200" />
                                )}
                            </div>

                            {/* Hidden Content */}
                            <div
                                className={`transition-all duration-200 overflow-hidden ${open1 ? "max-h-50 mt-4 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="text-gray-600 text-white leading-relaxed">
                                    <ul className="list-disc pl-6">
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >UI/UX for Web & Mobile</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg '  >Prototyping & Design Systems</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Branding & Visual Identity</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Design Audits</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >No-Code MVPs</li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="border-t-2 border-white my-10" />
                        </div>

                        <div className=" border-gray-300 pb-4">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setOpen2(!open2)}
                            >
                                <h3 className="text-lg transition-all ease-in duration-200 font-semibold tracking-wider text-white">
                                    STRATEGY & DELIVERY
                                </h3>

                                {open2 ? (
                                    <FaMinus className="w-5 h-5 text-white transition-transform duration-200" />
                                ) : (
                                    <FaPlus className="w-5 h-5 text-white transition-transform duration-200" />
                                )}
                            </div>

                            {/* Hidden Content */}
                            <div
                                className={`transition-all duration-200 overflow-hidden ${open2 ? "max-h-50 mt-4 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="text-gray-600 text-white leading-relaxed">
                                    <ul className="list-disc pl-6">
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Product Strategy</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg '  >Startup Tech Consulting</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >MVP & GTM Sprints</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Delivery Oversight</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Staff Augmentation</li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="border-t-2 border-white my-10" />
                        </div>

                        <div className=" border-gray-300 pb-4">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setOpen3(!open3)}
                            >
                                <h3 className="text-lg transition-all ease-in duration-200 font-semibold tracking-wider text-white">
                                    TALENT & TRAINING
                                </h3>

                                {open3 ? (
                                    <FaMinus className="w-5 h-5 text-white transition-transform duration-200" />
                                ) : (
                                    <FaPlus className="w-5 h-5 text-white transition-transform duration-200" />
                                )}
                            </div>

                            {/* Hidden Content */}
                            <div
                                className={`transition-all duration-200 overflow-hidden ${open3 ? "max-h-50 mt-4 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="text-gray-600 text-white leading-relaxed">
                                    <ul className="list-disc pl-6">
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Internship Programs</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg '  >Capstone Supervision</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Career Accelerators</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Job-Readiness Coaching</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Portfolio & Resume Clinics</li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="border-t-2 border-white my-10" />
                        </div>

                        <div className=" border-gray-300 pb-4">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setOpen4(!open4)}
                            >
                                <h3 className="text-lg transition-all ease-in duration-200 font-semibold uppercase tracking-wider text-white">
                                    AI Model Deployment & MLOps
                                </h3>

                                {open4 ? (
                                    <FaMinus className="w-5 h-5 text-white transition-transform duration-200" />
                                ) : (
                                    <FaPlus className="w-5 h-5 text-white transition-transform duration-200" />
                                )}
                            </div>

                            {/* Hidden Content */}
                            <div
                                className={`transition-all duration-200 overflow-hidden ${open4 ? "max-h-50 mt-4 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="text-gray-600 text-white leading-relaxed">
                                    <ul className="list-disc pl-6">
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Deploy models using Flask, FastAPI, Docker, or AWS Lambda</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg '  >Set up CI/CD pipelines for machine learning (MLOps)</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Track experiments with DVC and MLflow</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Ensure scalable, secure API-based AI delivery</li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="border-t-2 border-white my-10" />
                        </div>
                    </div>

                    <div className='  sm:mt-[10vh]  ' >
                        <div className=" border-gray-300 pb-4">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setOpen5(!open5)}
                            >
                                <h3 className="text-lg transition-all ease-in duration-200 uppercase font-semibold tracking-wider text-white">
                                    Natural Language Processing
                                </h3>

                                {open5 ? (
                                    <FaMinus className="w-5 h-5 text-white transition-transform duration-200" />
                                ) : (
                                    <FaPlus className="w-5 h-5 text-white transition-transform duration-200" />
                                )}
                            </div>

                            {/* Hidden Content */}
                            <div
                                className={`transition-all duration-200 overflow-hidden ${open5 ? "max-h-60 mt-4 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="text-gray-600 text-white leading-relaxed">
                                    <ul className="list-disc pl-6">
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Build AI chatbots for websites, apps, and WhatsApp</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg '  >Analyze sentiment from reviews, surveys, or social posts</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Implement text summarization, document search, and Q&A systems</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >NER (Named Entity Recognition) and multilingual understanding</li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="border-t-2  border-white my-10" />
                        </div>

                        <div className=" border-gray-300 pb-4">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setOpen6(!open6)}
                            >
                                <h3 className="text-lg transition-all uppercase ease-in duration-200 font-semibold tracking-wider text-white">
                                    Custom AI Solutions for E-Commerce
                                </h3>

                                {open6 ? (
                                    <FaMinus className="w-5 h-5 text-white transition-transform duration-200" />
                                ) : (
                                    <FaPlus className="w-5 h-5 text-white transition-transform duration-200" />
                                )}
                            </div>

                            {/* Hidden Content */}
                            <div
                                className={`transition-all duration-200 overflow-hidden ${open6 ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="text-gray-600 text-white leading-relaxed">
                                    <ul className="list-disc pl-6">
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Product recommendation engines</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg '  >Inventory forecasting and stock optimization</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Review and feedback analytics</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Lead scoring and purchase prediction models</li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="border-t-2 border-white my-10" />
                        </div>

                        <div className=" border-gray-300 pb-4">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setOpen7(!open7)}
                            >
                                <h3 className="text-lg transition-all uppercase ease-in duration-200 font-semibold tracking-wider text-white">
                                    Predictive Analytics & ML Modeling
                                </h3>

                                {open7 ? (
                                    <FaMinus className="w-5 h-5 text-white transition-transform duration-200" />
                                ) : (
                                    <FaPlus className="w-5 h-5 text-white transition-transform duration-200" />
                                )}
                            </div>

                            {/* Hidden Content */}
                            <div
                                className={`transition-all duration-200 overflow-hidden ${open7 ? "max-h-50 mt-4 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="text-gray-600 text-white leading-relaxed">
                                    <ul className="list-disc pl-6">
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Time-series forecasting for trends, revenue, or demand</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg '  >Classification and regression models (e.g., spam detection, credit risk)</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Anomaly detection for fraud or operational issues</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Customer segmentation and clustering</li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="border-t-2 border-white my-10" />
                        </div>

                        <div className=" border-gray-300 pb-4">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setOpen8(!open8)}
                            >
                                <h3 className="text-lg transition-all uppercase ease-in duration-200 font-semibold tracking-wider text-white">
                                    Data Preparation & Annotation
                                </h3>

                                {/* This looks like a bug in the original: it toggled based on open7 */}
                                {open8 ? (
                                    <FaMinus className="w-5 h-5 text-white transition-transform duration-200" />
                                ) : (
                                    <FaPlus className="w-5 h-5 text-white transition-transform duration-200" />
                                )}
                            </div>

                            {/* Hidden Content */}
                            <div
                                className={`transition-all duration-200 overflow-hidden ${open8 ? "max-h-50 mt-4 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="text-gray-600 text-white leading-relaxed">
                                    <ul className="list-disc pl-6">
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >End-to-end dataset design, cleansing, and labeling</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg '  >Annotation tools for text, image, and custom use cases</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Ideal for clients preparing training data for supervised learning</li>
                                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Maintain data quality with audit trails and versioning</li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="border-t-2 border-white my-10" />
                        </div>
                    </div>
                </div>
            </div>

            <div className=' px-[3vw] sm:px-[12vw] bg-grade border-white border '>
                <div className='bg-stone-100 py-[7vw] sm:py-[2vw] px-[4vw] sm:px-[9vw] flex flex-col sm:flex-row gap-[4vw] ' >
                    <span className='sm:text-5xl text-3xl font-semibold text-white ' >Engagement Models</span>
                    <div className='flex flex-col gap-[8vw] sm:gap-[2vw]' >
                        <p className='text-xl  text-white ' >
                            At Code2DBug, we offer flexible engagement models tailored to the needs of startups,
                            product teams, and emerging talent. Whether you're building an MVP, scaling a product,
                            or running a learning-driven delivery sprint — we've got a model that fits.
                        </p>

                        {/* Do not remove or change existing classes. Only add behavior + a11y. */}
                        <button
                            className='sm:h=[3vw] text-white sm:h-[4vw] h-[12vw]  w-[55vw] sm:w-[15vw] text-lg font-semibold border-[1px] '
                            onClick={() => setOpen9(v => !v)}
                            aria-expanded={open}
                            aria-controls={panelId}
                            type="button"
                        >
                            EXPLORE MORE
                        </button>
                    </div>
                </div>

                {/* Collapsible content */}
                <div
                    id={panelId}
                    className={`px-[4vw] sm:px-[9vw] pb-[2vw] transition-all duration-300 ease-out ${open9 ? " opacity-100" : "max-h-0 opacity-0"
                        } overflow-hidden`}
                >
                    {/* Put whatever “the data” is here. Sample items below. */}
                    <div className='flex flex-col gap-[10vw] sm:gap-[2vw]' >
                        <h2 className='underline text-lg uppercase text-white  ' >1. Fixed-Price Projects</h2>
                        <p className='text-white text-lg' >Best for: Startups and brands with clear deliverables, defined timelines, and a tight go-to-market.</p>
                        <ul className="list-disc pl-6">
                            <li className='ml-[2vw] mb-[1vw] text-white text-lg'> Scope and milestones are locked upfront</li>
                            <li className='ml-[2vw] mb-[1vw] text-white text-lg'>Ideal for MVPs, website builds, one-time tech or design sprints</li>
                            <li className='ml-[2vw] mb-[1vw] text-white text-lg'>Issuance of an HR-verifiable experience letter on completion</li>
                            <li className='ml-[2vw] mb-[1vw] text-white text-lg'>Clear acceptance criteria and delivery checklist</li>
                            <li className='ml-[2vw] mb-[1vw] text-white text-lg'>Optional add-ons for post-launch maintenance or feature phases</li>
                        </ul>

                        <h2 className='underline text-lg uppercase text-white  ' > 2. Retainer-Based Engagements</h2>
                        <p className='text-white text-lg' >Best for: Teams that need consistent support across design, development, or product ops.</p>
                        <ul className="list-disc pl-6">
                            <li className='ml-[2vw] mb-[1vw] text-white text-lg'> Ongoing collaboration across sprints</li>
                            <li className='ml-[2vw] mb-[1vw] text-white text-lg'> Fixed monthly hours or deliverables</li>
                            <li className='ml-[2vw] mb-[1vw] text-white text-lg'>Combines strategy, build, and optimization</li>
                            <li className='ml-[2vw] mb-[1vw] text-white text-lg'>Clear acceptance criteria and delivery checklist</li>
                            <li className='ml-[2vw] mb-[1vw] text-white text-lg'>Scalable as your needs grow — from launch to scale</li>
                        </ul>

                        <h2 className='underline text-lg uppercase text-white  ' >3. Monthly Internship Cohorts</h2>
                        <p className='text-white text-lg' >Best for: Institutions, startup partners, or internal teams seeking delivery + talent training.</p>
                        <ul className="list-disc pl-6">
                            <li className='ml-[2vw] mb-[1vw] text-white text-lg'> Curated, mentor-guided internship programs</li>
                            <li className='ml-[2vw] mb-[1vw] text-white text-lg'>Real briefs, tracked tasks, reviews, and verifiable outcomes</li>
                            <li className='ml-[2vw] mb-[1vw] text-white text-lg'>Blend of learning + delivery — ideal for CSR, internal upskilling, or campus hiring pipelines</li>
                            <li className='ml-[2vw] mb-[1vw] text-white text-lg'>Outcome reports, experience letters, and job-readiness assets included</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className=' px-[8vw] sm:px-[12vw] pt-[5vw] pb-[1vw] bg-grade ' >
                <div className='grid sm:gap-x-[2vw] gap-[5vw]   mb-[6vw]  sm:grid-cols-4' >
                    <div className='col-span-1' >
                        <span className='sm:text-5xl text-3xl font-semibold text-white ' > Our Team</span>
                    </div>
                    <div className='col-span-3   text-xl ' >
                        <p className='text-white' >We’re diverse in our roles and backgrounds but united by our love for creating breakthrough work. Everything we do starts with the intention of making meaning and good sense. We see design and strategy solutions not as temporary band-aids, but holistic and enduring ways to create value for the brand.</p>
                    </div>
                </div>
                <div className='grid sm:gap-x-[2vw] gap-[7vw] mt-[10vw] sm:mt-0 sm:mb-0 mb-[10vw]  sm:gap-y-[4vw] grid-cols-2 sm:grid-cols-4' >
                    <div className='space-y-[0.5vw]  '  >
                        <img className='sm:w-[18vw]  ' src="./src/assets/pravin.png" alt="" />
                        <h2 className='font-semibold text-white ' >PRAVIN </h2>
                        <span className='text-white' >Founder & CEO</span>
                    </div>
                    <div className='space-y-[0.5vw]  '  >
                        <img className=' sm:w-[18vw]' src="./src/assets/deepak.png" alt="" />
                        <h2 className='font-semibold text-white ' >DEEPAK</h2>
                        <span className='text-white' >Chief Technical Officer</span>
                    </div>
                    <div className='space-y-[0.5vw]  '  >
                        <img className=' sm:w-[18vw]' src="./src/assets/tanisha.png" alt="" />
                        <h2 className='font-semibold text-white ' >TANISHA</h2>
                        <span className='text-white' >Chief Finance Officer</span>
                    </div>
                    <div className='space-y-[0.5vw]  '  >
                        <img className=' sm:w-[18vw]' src="./src/assets/simran.png" alt="" />
                        <h2 className='font-semibold text-white ' >SIMRAN</h2>
                        <span className='text-white' >Marketing Coordinator</span>
                    </div>
                    <div className='space-y-[0.5vw]  '  >
                        <img className=' sm:w-[18vw]' src="./src/assets/rupesh.png" alt="" />
                        <h2 className='font-semibold text-white ' >RUPESH</h2>
                        <span className='text-white' >FrontEnd Developer</span>
                    </div>
                    <div className='space-y-[0.5vw]  '  >
                        <img className='sm:w-[18vw]' src="./src/assets/team01.png" alt="" />
                        <h2 className='font-semibold uppercase text-white ' >Ananya </h2>
                        <span className='text-white' >UI/UX Designer</span>
                    </div>
                    <div className='space-y-[0.5vw]  '  >
                        <img className='sm:w-[18vw]' src="./src/assets/team02.png" alt="" />
                        <h2 className='font-semibold text-white ' >Rohan</h2>
                        <span className=' text-white ' >Social Media Strategist</span>
                    </div>
                    <div className='space-y-[0.5vw]  '  >
                        <img className='sm:w-[18vw]' src="./src/assets/team03.png" alt="" />
                        <h2 className='font-semibold  text-white uppercase' >Priya</h2>
                        <span className='text-white' >Marketing Executive</span>
                    </div>
                    <div className='space-y-[0.5vw]  '  >
                        <img className='sm:w-[18vw]' src="./src/assets/team04.png" alt="" />
                        <h2 className='font-semibold text-white ' >ADITYA</h2>
                        <span className='text-white' >Brand Manager</span>
                    </div>
                    <div className='space-y-[0.5vw]  '  >
                        <img className='sm:w-[18vw]' src="./src/assets/team05.png" alt="" />
                        <h2 className='font-semibold text-white ' >SNEHA</h2>
                        <span className='text-white' >SEO Specialist</span>
                    </div>
                    <div className='space-y-[0.5vw]  '  >
                        <img className='sm:w-[18vw]' src="./src/assets/team06.png" alt="" />
                        <h2 className='font-semibold  text-white' >KARAN</h2>
                        <span className='text-white' >Video Editor</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col bg-grade sm:px-[13vw] py-[2.5vw] px-[4vw] sm:gap-[0.5vw]  gap-[4vw] ' >
                <div className=' flex flex-col sm:flex-row sm:items-center gap-[4vw] ' >
                    <a href="/">
                        <img className='sm:h-[7vw] mask-y-from-70% mask-y-to-90%  h-[7vh] w-[22vh] ' src="./src/assets/c2dblogo.png" alt="" />
                    </a>
                    <span className=' text-2xl font-sans font-semibold text-white ' >Building Brands with Purpose</span>
                </div>
                <div className='grid sm:grid-cols-3 gap-4 sm:gap-0 ' >
                    <span className='text-white text-xl font-semibold flex items-center gap-3 ' > <MdAddIcCall /> <a href="/contact"> Contact us </a>  </span>
                    <span className='text-white text-xl font-semibold flex items-center gap-3 ' ><FaSuitcase /><a href="/careers"> Careers </a> </span>
                    <span className='text-white text-xl font-semibold flex items-center gap-3 ' ><BsInstagram /> <a href="https://www.instagram.com/04braveheart?igsh=MWRyaTZrbDJsNXR6dw%3D%3D&utm_source=qr"> Instagram </a> </span>
                </div>
                <div className='flex justify-center pt-3 ' >
                    <span className='text-sm text-white' >© Copyright 2025 Code2dbug</span>
                </div>

            </div>
        </>
    )
}

export default About
