import React, { useEffect, useState } from 'react'
import { HiArrowDown } from "react-icons/hi2";
import { FaArrowRightLong, FaSuitcase } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdAddIcCall } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';

function CareerLaunch() {
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
                            <Link to={'/'} >  <img className='sm:h-[18vh] hidden mask-y-from-70% mask-y-to-90% mask-x-from-95% mask-x-to-99% sm:block h-[8vh]   ' src="./src/assets/c2dblogo.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className='col-span-7 sm:block hidden ' >
                        <div className='flex flex-row gap-[2.5vw] justify-end ' >
                            <Link to={'/'} className='text-white  text-[13px] font-semibold '>HOME</Link>
                            <Link to={'/about'} className='text-white text-[13px] font-semibold ' >ABOUT</Link>
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
                        <img className='sm:h-[10vh] h-[12vh]   ' src="./src/assets/c2dblogo.png" alt="" />
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
            <div className='flex bg-grade relative z-0 flex-col px-[3vw] sm:px-[25vw]  pt-[30vw] sm:pt-[10vw] pb-[5vw] gap-[5vw] ' >
                <h1 className=' text-white text-5xl font-semibold font-sans ' >Career Launch Kit</h1>
                <div className='grid sm:grid-cols-3 gap-[4vw]  ' >
                    <div className='flex flex-row gap-4.5 sm:justify-center '  >
                        <div class="border-l-2 border-white h-full"></div>
                        <p className='text-white font-semibolds ' >
                            Candidates seeking  <span className='font-bold' >real-world project </span>  experience</p>
                    </div>
                    <div className='flex flex-row gap-4.5 sm:justify-center '  >
                        <div class="border-l-2 border-white h-full"></div>
                        <p className='text-white font-semibolds ' > <span className='font-bold' >Get certified. </span> <br />  Build your credibility.</p>
                    </div>
                    <div className='flex flex-row gap-4.5 sm:justify-center '  >
                        <div class="border-l-2 border-white h-full"></div>
                        <p className='text-white font-semibolds ' >Minimum  <span className='font-bold' > 30 Days Support </span></p>
                    </div>
                </div>
            </div>
            <div className='px-[3vw] py-[10vw]  sm:px-[24vw] sm:py-[4vw] ' >
                <div className=' flex flex-col items-baseline gap-[10vw] sm:gap-[2vw] '>
                    <p className='text-lg font-sans' > Best for
                        Learners ready to combine skill-building, internship, and placement preparation into one bundled offering.
                    </p>
                    <p className='text-lg font-sans' > The <span className='font-semibold' > Career Launch Kit</span> equips you with verified, hands-on project experience to build real-world skills. It provides professional credentials, including HR-recognized certificates and polished career documents. Additionally, it prepares you for the job market with mock interviews, job-search guidance, and mentor support.
                    </p>
                    <h3 className='text-xl font-semibold' >WHAT YOU'LL LEARN</h3>
                    <h2 className='underline text-lg uppercase ' >Scope & Features</h2>
                    <ul class="list-disc pl-6  ">
                        <li className='ml-[2vw] mb-[1vw] text-lg'>2 skill certifications upon successful completion</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>4-week internship to apply skills in a real setting</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>Mentor-supervised capstone with regular reviews and final sign-off</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>Experience letter issued on project completion</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>Resume and LinkedIn polish to present your achievements</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>1 mock interview plus a personalized job-search plan</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>Referrals to 2 partner companies for potential opportunities</li>
                    </ul>
                    <h2 className='underline text-lg uppercase ' > Exclusions</h2>
                    <ul class="list-disc pl-6  ">
                        <li className='ml-[2vw] mb-[1vw] text-lg'>No guaranteed interviews or job offers included</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>No multiple domain switches or off-track modules</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>No extended 1:1 coaching beyond defined scope</li>
                    </ul>
                    <h2 className='underline text-lg uppercase ' > Outcomes</h2>
                    <ul class="list-disc pl-6  ">
                        <li className='ml-[2vw] mb-[1vw] text-lg'>Verified skills and project experience through mentor-reviewed work</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>End-to-end career preparation for job-ready transformation</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>Professional documents — resume and LinkedIn — ready to deploy</li>
                    </ul>

                    <h2 className='underline text-lg mt-6'>ADD-ONS (AVAILABLE WITH ANY PACKAGE)</h2>
                    <ul className="list-disc pl-6">
                        <li className='ml-[2vw] mb-[1vw] text-lg'>Extra mock interview and deep-dive career coaching available as add-ons</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>Tech stack booster module to enhance your technical skills</li>
                    </ul>

                    {/* Timelines Section */}
                    <h2 className='underline text-lg mt-6'>TYPICAL TIMELINES & CADENCE</h2>
                    <ul className="list-disc pl-6">
                        <li className='ml-[2vw] mb-[1vw] text-lg'>Approx. 6 weeks total duration with weekly check-ins and async mentor support</li>
                    </ul>

                    {/* Terms & Policies Section */}
                    <h2 className='underline text-lg mt-6'>MARGIN-PROTECTING TERMS & POLICIES</h2>
                    <ul className="list-disc pl-6">
                        <li className='ml-[2vw] mb-[1vw] text-lg'>2 mock interview attempts maximum per learner</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>Referral provided only after rubric clearance and mentor approval</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>Each domain is covered once per program kit</li>
                    </ul>

                    {/* Who Should Apply Section */}
                    <h2 className='underline text-lg mt-6'>WHO SHOULD APPLY</h2>
                    <ul className="list-disc pl-6">
                        <li className='ml-[2vw] mb-[1vw] text-lg'>Ideal for final-year students preparing for campus placements</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>Perfect for bootcamp graduates refining and showcasing their portfolios</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>Best suited for self-learners ready to enter the job market</li>
                    </ul>

                    <h3 className='text-xl font-semibold' >WHAT YOU'LL DO</h3>
                    <ul class="list-disc pl-6">
                        <li className='ml-[2vw] mb-[1vw] text-lg'>
                            <span className='font-bold'>Professional Credentials: </span>
                            Receive verified documentation of your work, including HR-recognized certificates and experience letters where applicable.
                        </li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>
                            <span className='font-bold'>Career Validation: </span>
                            Showcase measurable, traceable outcomes that demonstrate your abilities to potential employers.
                        </li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>
                            <span className='font-bold'>Job-Ready Profile: </span>
                            Enhance your resume, portfolio, and LinkedIn presence with polished, professional materials tailored for your career goals.
                        </li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>
                            <span className='font-bold'>Interview Preparedness: </span>
                            Build confidence with mock interviews, job-search strategies, and mentor guidance to accelerate your career launch.
                        </li>
                    </ul>
                    <h3 className='text-xl font-semibold' >Qualifications</h3>
                    <ul class="list-disc pl-6  ">
                        <li className='ml-[2vw] mb-[1vw] text-lg ' > This program welcomes learners from all backgrounds, no formal degree required, just curiosity and commitment to grow.</li>
                    </ul>
                    <button className=' bg-grade h-[8vh] w-full sm:w-[12vw]  cursor-pointer transition-all ease-in duration-300 hover:bg-stone-500   text-lg text-white ' ><a href="https://forms.gle/jHYnzPFBLsE8m1Wv6"> APPLY NOW </a> </button>
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

export default CareerLaunch