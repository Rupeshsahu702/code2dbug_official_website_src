import React, { useEffect, useState } from 'react'
import FilterGallery from '../components/Filtergallery'
import { HiArrowDown } from "react-icons/hi2";
import { FaArrowRightLong, FaSuitcase } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdAddIcCall } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';


function Work() {

    const [open, setOpen] = useState(false);
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
            <div className='absolute inset-0 z-10 bg-grade ' >
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
            <FilterGallery />
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

export default Work