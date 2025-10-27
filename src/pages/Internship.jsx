import React, { useEffect, useState } from 'react'
import { HiArrowDown } from "react-icons/hi2";
import { FaArrowRightLong, FaSuitcase } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdAddIcCall } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';

function Internship() {
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
                            <Link to={'/'} className='text-white text-[13px] font-semibold '>HOME</Link>
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
            <div className='flex bg-grade  flex-col px-[3vw] sm:px-[25vw]  pt-[30vw] sm:pt-[10vw] pb-[5vw] gap-[5vw] ' >
                <h1 className=' text-white text-5xl font-semibold font-sans ' >Internship Program</h1>
                <div className='grid sm:grid-cols-3 gap-[4vw]  ' >
                    <div className='flex flex-row gap-4.5 sm:justify-center '  >
                        <div class="border-l-2 border-white h-full"></div>
                        <p className='text-white font-semibolds ' > Beginners  who need <span className='font-bold' > proof of specific skills. </span>  </p>
                    </div>
                    <div className='flex flex-row gap-4.5 sm:justify-center '  >
                        <div class="border-l-2 border-white h-full"></div>
                        <p className='text-white font-semibolds ' > <span className='font-bold' >Get Certified </span> <br /> Build your credibility</p>
                    </div>
                    <div className='flex flex-row gap-4.5 sm:justify-center '  >
                        <div class="border-l-2 border-white h-full"></div>
                        <p className='text-white font-semibolds ' >Remote Internship would be <span className='font-bold' >  4-5 weeks </span> </p>
                    </div>
                </div>
            </div>
            <div className='px-[3vw] py-[10vw]  sm:px-[24vw] sm:py-[4vw] ' >
                <div className=' flex flex-col items-baseline gap-[10vw] sm:gap-[2vw] '>
                    <p className='text-lg font-sans' > Best for Students, recent graduates, or early career switchers who want structured, remote work with mentor feedback.</p>
                    <p className='text-lg font-sans' > Gain real-world experience with our Remote Internship Program designed for aspiring professionals.
                        Work on live projects, collaborate with mentors, and enhance your practical skills from anywhere.
                        Build a strong portfolio and earn a verified internship certificate to boost your career.</p>
                    <h3 className='text-xl font-semibold' >WHAT YOU'LL LEARN</h3>
                    <h2 className='underline text-lg' > SCORE & FEATURES</h2>
                    <ul class="list-disc pl-6  ">
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >4-week remote internship</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg '  >Internship completion letter + skill snapshot</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Weekly mentor check-ins + async review</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Lite placement assistance (resume + 3 job leads)</li>
                    </ul>
                    <h2 className='underline text-lg' >OUTCOMES</h2>
                    <ul class="list-disc pl-6  ">
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Portfolio-ready artifacts</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg '  >Peer-reviewed internship project</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >QR-verifiable internship letter</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Improved resume and job-readiness</li>
                    </ul>
                    <h2 className='underline text-lg' >EXCLUSIONS</h2>
                    <ul class="list-disc pl-6  ">
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >No guaranteed job placement</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg '  >No live classes or external exam support</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >No deep specialization coaching</li>
                    </ul>
                    <h2 className='underline text-lg' >EXCLUSIONS</h2>
                    <ul class="list-disc pl-6  ">
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >No guaranteed job placement</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg '  >No live classes or external exam support</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >No deep specialization coaching</li>
                    </ul>
                    <h2 className='underline text-lg' > ADD-ONS (AVAILABLE WITH ANY PACKAGE)</h2>
                    <ul class="list-disc pl-6  ">
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Live mock interview</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg '  >Code review deep dive </li>
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Domain-specific job search plan </li>
                    </ul>
                    <h2 className='underline text-lg' >TYPICAL TIMELINES & CADENCE</h2>
                    <ul class="list-disc pl-6  ">
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Duration: 4 weeks</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg '  >Weekly: 1 mentor check-in + async feedback</li>
                    </ul>
                    <h2 className='underline text-lg' > MARGIN-PROTECTING TERMS & POLICIES</h2>
                    <ul class="list-disc pl-6  ">
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Two review cycles per project only</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Timely submission required for certificate eligibility</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg '  >No rescheduling of mentor slots more than once</li>
                    </ul>
                    <h2 className='underline text-lg' > WHO SHOULD APPLY</h2>
                    <ul class="list-disc pl-6  ">
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Undergraduates in CS/IT/Design/Marketing</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >Bootcamp learners wanting portfolio validation</li>
                        <li className='ml-[2vw] mb-[1vw] text-lg '  >Early-career professionals exploring industry standards</li>
                    </ul>
                    <h3 className='text-xl font-semibold'>WHAT YOU'LL DO</h3>
                    <ul className="list-disc pl-6">
                        <li className='ml-[2vw] mb-[1vw] text-lg'>
                            <span className='font-bold'>Practical Experience: </span>
                            Work on real-world projects that help you apply your learning in professional settings and build a strong portfolio.
                        </li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>
                            <span className='font-bold'>Collaborative Learning: </span>
                            Engage with mentors and peers, share ideas, and gain insights through teamwork in a remote environment.
                        </li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>
                            <span className='font-bold'>Skill Application: </span>
                            Turn theory into practice — from planning and execution to problem-solving in live scenarios.
                        </li>
                        <li className='ml-[2vw] mb-[1vw] text-lg'>
                            <span className='font-bold'>Professional Growth: </span>
                            Develop communication, time management, and technical skills that prepare you for future career opportunities.
                        </li>
                    </ul>
                    <h3 className='text-xl font-semibold' >Qualifications</h3>
                    <ul class="list-disc pl-6  ">
                        <li className='ml-[2vw] mb-[1vw] text-lg ' >This program welcomes learners from all backgrounds, no formal degree required, just curiosity and commitment to grow.</li>
                    </ul>
                    <button className=' bg-grade h-[8vh] w-full sm:w-[12vw]  cursor-pointer transition-all ease-in duration-300 hover:bg-stone-500   text-lg text-white '>  <a href="https://forms.gle/jHYnzPFBLsE8m1Wv6"> APPLY NOW </a>  </button>
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

export default Internship