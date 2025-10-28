import React, { useEffect, useState } from 'react'
import { FaArrowRightLong, FaSuitcase } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdAddIcCall, MdAttachEmail } from "react-icons/md";
import { BsInstagram } from 'react-icons/bs';

function Careers() {
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
            <div className='absolute inset-0 z-10 sm:block hidden ' >
                <nav className='h-[12vh] bg-transparent grid grid-cols-12 items-center' >
                    <div className='sm:col-span-3 col-span-5' >
                        <div className='sm:ml-[10vw] ml-[3vw] '  >
                            <Link to={'/'} >  <img className='sm:h-[18vh] hidden mask-y-from-70% mask-y-to-90% mask-x-from-95% mask-x-to-99% sm:block h-[8vh]   ' src="./src/assets/c2dblogo.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className='col-span-7 sm:block hidden ' >
                        <div className='flex flex-row gap-[2.5vw] justify-end ' >
                            <Link to={'/'} className='text-white text-[13px] font-semibold cursor-pointer ' >HOME</Link>
                            <Link to={'/about'} className='text-white text-[13px] font-semibold cursor-pointer ' >ABOUT</Link>
                            <Link to={'/work'} className='text-white  text-[13px] font-semibold cursor-pointer '>WORK</Link>
                            <Link to={'/careers'} className='text-white  text-[13px] font-semibold cursor-pointer '>CAREER</Link>
                            <Link to={''} className='text-white hidden text-[13px] font-semibold cursor-pointer '>JOURNAL</Link>
                            <Link to={'/contact'} className='text-white  text-[13px] font-semibold cursor-pointer '>CONTACT</Link>
                        </div>
                    </div>
                </nav>
            </div>
            <header
                className={`fixed top-0 left-0 block sm:hidden w-full z-40 bg-transparent text-white transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="sm:ml-[10vw] ml-[3vw]">
                        <img className="sm:h-[10vh] h-[8vh]" src="./src/assets/c2dblogo.png" alt="" />
                    </div>

                    <button
                        className="lg:hidden bg-grade opacity-80 h-[7vh] w-[7vh] rounded-full focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        {menuOpen ? (
                            <span className="text-3xl">×</span>
                        ) : (
                            <div className="space-y-1 justify-center items-center flex flex-col">
                                <span className="block w-6 h-0.5 bg-white"></span>
                                <span className="block w-6 h-0.5 bg-white"></span>
                                <span className="block w-6 h-0.5 bg-white"></span>
                            </div>
                        )}
                    </button>
                </div>

                {/* MOBILE OVERLAY: render only when open */}
                {menuOpen && (
                    <div
                        id="mobile-menu"
                        className="fixed top-0 left-0 h-screen w-full gap-[1vh] bg-grade text-white flex flex-col items-center justify-center space-y-6 text-lg tracking-wide transition-transform duration-300 ease-in-out lg:hidden z-50"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="sm:ml-[10vw] ml-[3vw]">
                            <img className="sm:h-[10vh] h-[12vh] mask-y-from-70% mask-y-to-90%" src="./src/assets/c2dblogo.png" alt="" />
                        </div>

                        <button
                            className="absolute top-4 right-4 text-3xl focus:outline-none"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            ×
                        </button>

                        <a href="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 uppercase">Home</a>
                        <a href="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 uppercase">About</a>
                        <a href="/work" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 uppercase">Work</a>
                        <a href="/careers" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 uppercase">Careers</a>
                        <a href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 uppercase">Contact</a>
                    </div>
                )}
            </header>

            {/* make this relative so it doesn’t fight z-index wars */}
            {/* make this relative on ALL screens so the iframe isn't under the header’s stacking context */}
            <div className="sm:pt-[12vw] pt-[30vw] relative px-[4vw] sm:px-[20vw] bg-grade">
                <div className="grid sm:grid-cols-2">
                    <div className="sm:w-[27vw] flex flex-col gap-3">
                       <span className="text-white text-5xl font-bold sm:text-5xl sm:font-semibold">Careers</span>
                        <p className="text-white">
                            At Code2DBug, we work with startups, founders, and future-focused teams to build digital
                            products that matter. From idea to execution, we blend code, design, and strategy to solve
                            real problems, and we’re just getting started.
                        </p>
                        <p className="text-white">
                            We’re a Creative Tech & Innovation Studio based in Bhilai, building the next generation of
                            creators, coders, and changemakers. If you’re driven, curious, and serious about meaningful
                            work, we’re hiring across tech, design, and marketing.
                        </p>
                        <p className="text-white font-semibold">Explore open roles or apply to our in-house career programs.</p>
                    </div>

                    {/* give the video container its own local stacking context on all screens */}
                    <div className="sm:w-[30vw]  flex sm:justify-center sm:items-center flex-col mt-8 relative w-[90vw] sm:max-w-2xl aspect-video z-10">
                        <iframe
                            className="w-full h-full rounded-lg shadow-lg   "
                            src="https://www.youtube.com/embed/8tZFSSJNDZY?si=sbc4JX56iyTywtxO"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <h2 className="text-lg font-semibold my-[8vw] text-white uppercase sm:my-[1vw]"></h2>
                    </div>
                </div>
            </div>

            <div className='grid sm:grid-cols-3 px-[4vw] sm:px-[10vw] sm:pt-[4vw]  pb-[10vw] pt-[10vw]  sm:pb-[5vw]  gap-7 bg-grade '>
                <div className='sm:col-span-3 pb-8 justify-center flex ' >
                    <h1 className=' text-5xl font-semibold text-white' >What Programs we offer</h1>
                </div>
                <div className='bg-white rounded-xl h p-[2vw] justify-between flex flex-col ' >
                    <div className='' >
                        <h1 className='text-4xl font-semibold font-sans mb-2.5 ' >Skill Certification Program</h1>
                        <p>Best for <span className='font-bold font-sans ' > Beginners and freshers </span>   seeking proof of skill and a stronger resume artifact without a long-term commitment.</p>
                    </div>
                    <div className='flex justify-end ' >
                        <button className=' bg-grade  cursor-pointer transition-all ease-in duration-300  border-[1px]  hover:bg-slate-200 hover:text-black text-white h-10 w-32 mt-[4vh]  '  > <a href="/certification">Apply Now </a>  </button>
                    </div>
                </div>
                <div className='bg-white rounded-xl h p-[2vw] flex flex-col justify-between  ' >
                    <div>
                        <h1 className='text-4xl font-semibold font-sans mb-2.5 ' >Internship <br /> Program</h1>
                        <p>Best for  <span className='font-bold font-sans' >Students, recent graduates, or early career switchers</span>  who want structured, remote work with mentor feedback.</p>
                    </div>
                    <div className='flex justify-end ' >
                        <button className=' bg-grade  cursor-pointer transition-all ease-in duration-300  border-[1px]  hover:bg-slate-200 hover:text-black text-white h-10 w-32 mt-[4vh]  '  > <a href="/internship">Apply Now </a>  </button>
                    </div>
                </div>
                <div className='bg-white rounded-xl h p-[2vw] flex flex-col justify-between  ' >
                    <div>
                        <h1 className='text-4xl font-semibold font-sans mb-2.5 ' >Professional Transformation Track</h1>
                        <p> Best for <span className='font-bold font-sans' >Candidates seeking real-world project experience </span>
                            and a verifiable experience letter for career switching or upskilling.</p>
                    </div>

                    <div className='flex justify-end ' >
                        <button className=' bg-grade  cursor-pointer transition-all ease-in duration-300  border-[1px]  hover:bg-slate-200 hover:text-black text-white h-10 w-32 mt-[4vh]  '  > <a href="/professional">Apply Now </a>  </button>
                    </div>
                </div>
                <div className='bg-white rounded-xl h p-[2vw] flex flex-col justify-between ' >
                    <div>

                        <h1 className='text-4xl font-semibold font-sans mb-2.5 ' >Career Launch <br /> Kit </h1>
                        <p>Best for Learners ready to combine  <span className='font-bold font-sans' >skill-building, internship, and placement preparatio </span>
                            into one bundled offering.
                        </p>
                    </div>
                    <div className='flex justify-end ' >
                        <button className=' bg-grade  cursor-pointer transition-all ease-in duration-300  border-[1px]  hover:bg-slate-200 hover:text-black text-white h-10 w-32 mt-[4vh]  '  > <a href="/careerlaunch">Apply Now </a>  </button>
                    </div>
                </div>
                <div className='bg-white rounded-xl h p-[2vw]  flex flex-col justify-between ' >
                    <div>
                        <h1 className='text-4xl font-semibold font-sans mb-2.5 ' >360 Career Program</h1>
                        <p>Best for <span className='font-bold font-sans' > Serious learners seeking live coaching, verified experience, and 360° placement </span>
                            support across tech and digital domains.</p>
                    </div>
                    <div className='flex justify-end ' >
                        <button className=' bg-grade  cursor-pointer transition-all ease-in duration-300  border-[1px]  hover:bg-slate-200 hover:text-black text-white h-10 w-32 mt-[4vh]  '  > <a href="/360career">Apply Now </a>  </button>
                    </div>
                </div>
                <div className='bg-white rounded-xl h p-[2vw] flex flex-col justify-between ' >
                    <div className='' >
                        <h1 className='text-4xl font-semibold font-sans mb-2.5 ' >Work with <br /> Us</h1>
                        <p>If you’re interested in working with us, please do share your details and brief here. Just a headsup, our team will take a few days to get back to you! </p>
                    </div>
                    <div className='flex justify-end ' >
                        <button className=' bg-grade  cursor-pointer transition-all ease-in duration-300  border-[1px]  hover:bg-slate-200 hover:text-black text-white h-10 w-32 mt-[4vh]  '  > <a href="https://docs.google.com/forms/d/e/1FAIpQLSdnE_aGOjucrGqrxF4XRWd_8ZgVA3EuBAulpHpABVh4B_MZOQ/viewform" target='_blank' >Apply Now </a>  </button>
                    </div>
                </div>
            </div>
            <div className='sm:py-[3vw] py-[6vw]   px-[6vw] sm:px-[20vw] space-y-6 ' >
                <img src="./src/assets/careerspage1.jpg" alt="" />
                <div className='grid sm:grid-cols-3 justify-between  ' >
                    <span className='text-3xl font-semibold col-span-1 ' >Reach Out To Us</span>
                    <div className='flex flex-col col-span-2 gap-4  ' >
                        <p className='text-lg' >
                            If you are interested in our open positions or have any questions, please feel free to contact us using the details provided below.
                        </p>
                        <span className='font-semibold underline ' > <a href='mailto:info@code2dbug.com' className='flex flex-row items-center'  > <MdAttachEmail className='text-3xl mr-3.5' />  info@code2dbug.com </a> </span>
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

export default Careers