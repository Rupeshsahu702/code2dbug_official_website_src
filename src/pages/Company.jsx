import React, { useEffect, useState } from 'react'
import { HiArrowDown } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdAddIcCall } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
function Company() {
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
        <><div className='absolute inset-0 z-10 ' >
            <nav className='h-[12vh] bg-transparent grid grid-cols-12 items-center' >
                <div className='sm:col-span-3 col-span-5' >
                    <div className='sm:ml-[10vw] ml-[3vw] '  >
                        <Link to={'/'} >  <img className='sm:h-[18vh] hidden mask-y-from-70% mask-y-to-90% mask-x-from-95% mask-x-to-99% sm:block h-[8vh]   ' src="./src/assets/c2dblogo.png" alt="" /></Link>
                    </div>
                </div>
                <div className='col-span-7 sm:block hidden ' >
                    <div className='flex flex-row gap-[2.5vw] justify-end ' >
                        <Link to={'/about'} className='text-white text-[13px] font-semibold ' >ABOUT</Link>
                        <Link to={'/work'} className='text-white  text-[13px] font-semibold'>WORK</Link>
                        <Link to={'/careers'} className='text-white  text-[13px] font-semibold'>CAREER</Link>
                        <Link to={''} className='text-white hidden text-[13px] font-semibold '>JOURNAL</Link>
                        <Link to={'/contact'} className='text-white  text-[13px] font-semibold '>CONTACT</Link>
                    </div>
                </div>
            </nav>
        </div>
            <header className={`fixed top-0 left-0 block sm:hidden w-full z-50 bg-transparent text-white transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}>
                <div className="flex items-center justify-between px-2 py-3">
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
            <div className='sm:h-[90vh] relative h-[70vh]  bg-grade flex px-[10vw]  justify-center  sm:justify-center sm:items-center ' >
                <img className='absolute  sm:h-[30vw] mt-[30vw] sm:mt-0  mask-x-from-70% mask-x-to-90% mask-y-from-70% mask-y-to-90%   ' src="./src/assets/fade2.png" alt="" />
                <div className=' flex flex-col items-center text-center relative  ' >
                    <h1 className='text-white sm:text-[3vw] text-[27px] mt-[13vh]  font-bold font-sans' >We’re Debugging the Future, <br /> One Code at a Time.</h1>
                    <p className='text-white text-[18px] sm:mt-[10vw] mt-[10vh] '> <span className='font-semibold ' >Code2Dbug is a Creative Tech & Innovation Studio.</span>
                        <br /> We collaborate with startups, brands, and innovators to transform ideas into — <br />
                        intelligent blending  <span className='font-semibold' >technology, design, and strategy</span>  to create solutions that inspire and perform.

                    </p>
                    <HiArrowDown className='text-white mt-[4vh] sm:mt-[4vw] text-4xl font-extralight' />
                </div>

            </div>
            <div className=' flex sm:h-[10vw] h-full py-[3vh] sm:my-0 bg-grade  items-center justify-center ' >
                <h2 className='text-5xl font-sans font-semibold text-white ' >Our Work</h2>
            </div>
            <div className='bg-grade sm:pb-0 pb-5' >
                <div className='grid mx-[5vw] sm:mx-[11vw] sm:grid-cols-2 bg-grade  sm:space-x-8 space-y-16 ' >
                    <div className='flex flex-col gap-[2vw] sm:gap-[0.5vw]' >
                        <img className='sm:h-[25vw] h-[30vh] rounded-lg sm:rounded-xl object-cover' src="./src/assets/HKV.png" alt="" />
                        <h3 className='text-3xl font-semibold text-white ' >HK Vitals</h3>
                        <h4 className='font-semibold font-sans text-white ' >STRATEGY, BRANDING, PACKAGING, CREATIVE DIRECTION</h4>
                        <p className='text-slate-700 text-white ' >HK Vitals by HealthKart has transformed India’s health supplement landscape. We redefined their brand and created a unified identity—anchored in health, knowledge, and research-driven innovation. Take a look at the comprehensive rebrand we worked on as their long-term brand partners.</p>
                        <span className='underline underline-offset-2 font-semibold text-white '  > <a href="/work">HK Vitals.</a></span>
                    </div>
                    <div className='flex flex-col gap-[2vw] sm:gap-[0.5vw]' >
                        <img className='sm:h-[25vw] h-[30vh] rounded-lg sm:rounded-xl object-cover' src="./src/assets/hocco.png" alt="" />
                        <h3 className='text-3xl font-semibold text-white ' >Hocco</h3>
                        <h4 className='font-semibold font-sans text-white ' >STRATEGY, BRANDING, PACKAGING, ENVIRONMENTAL GRAPHICS</h4>
                        <p className='text-slate-700 text-white ' >Hocco is an ice cream brand from one of India's most renowned ice cream makers. We worked closely with the founder Ankit Chona and the Hocco team on a strategic re-branding that marked their return to the world of ice creams. </p>
                        <span className='underline underline-offset-2 font-semibold text-white '  > <a href="/work">Hocco.</a></span>
                    </div>
                    <div className='flex flex-col gap-[2vw] sm:gap-[0.5vw]' >
                        <img className='sm:h-[25vw] h-[30vh] rounded-lg sm:rounded-xl object-cover' src="./src/assets/TWT.png" alt="" />
                        <h3 className='text-3xl font-semibold text-white ' >The Whole Truth - Whey Protein</h3>
                        <h4 className='font-semibold font-sans text-white ' >PACKAGING, PHOTOGRAPHY, COMMUNICATION ASSETS</h4>
                        <p className='text-slate-700 text-white ' >On popular demand, The Whole Truth introduced Whey Protein to their expansive range of products. We worked closely with the team to create packaging and communication that helped demystify and introduce a 100% clean protein to beginners and pro-consumers. </p>
                        <span className='underline underline-offset-2 font-semibold  text-white'  > <a href="/work">The Whole Truth</a></span>
                    </div>
                    <div className='flex flex-col gap-[2vw] sm:gap-[0.5vw]' >
                        <img className='sm:h-[25vw] h-[30vh] rounded-lg sm:rounded-xl object-cover' src="./src/assets/nykaa.png" alt="" />
                        <h3 className='text-3xl font-semibold text-white ' >Nykaa</h3>
                        <h4 className='font-semibold font-sans text-white' >BRAND IDENTITY, PACKAGING, UI / UX</h4>
                        <p className='text-slate-700 text-white ' >Redefining the Nykaa identity for Falguni Nayar’s brainchild. Trust us, when we rebranded Nykaa back in 2015 we did not know this brand would IPO on the Indian Stock Exchange. From start-up to unicorn, we are over the moon! </p>
                        <span className='underline underline-offset-2 font-semibold text-white '  > <a href="/work">Nykaa .</a></span>
                    </div>
                </div>
            </div>
            <div className='h-[12vw] mx-[3vw]  my-[6vh] sm:my-0  flex justify-center items-center' >
                <button className='sm:h-[3.5vw] h-[6vh] w-full  sm:w-[20vw] border-2 text-lg font-semibold border-black cursor-pointer transition-all ease-in duration-200 hover:bg-grade hover:text-white ' >EXPLORE OUR WORK </button>
            </div>
            <div className='flex mx-[3vw] sm:mx-[11vw] flex-col sm:items-center sm:gap-[0.5vw] ' >
                <img className='mb-[2vw]' src="./src/assets/group.jpg" alt="" />
                <span className='sm:text-2xl text-lg font-bold' >This is us and we'd like to be honest.</span>
                <span className='sm:text-2xl text-lg font-bold' >We can’t do everything. But we do a few things well.</span>
                <p className='sm:text-center text-left sm:w-[60vh] mt-[0.5vw]' >So nope, we’re not a cool 360° agency that can do magic tricks.
                    Infact, some people confuse us for being a social media agency.
                    We just want to clarify, that we’re not.</p>
            </div>
            <div className='h-[100vh] px-[4vw] bg-grade flex flex-col items-center mt-[4vw] ' >
                <h1 className='text-white font-bold text-2xl w-[60vw] my-[3vh] sm:w-full text-center sm:text-3xl sm:mt-[4vw] ' >Businesses we've worked with</h1>
                <img className='h-[70vh] mt-[3vw] hidden sm:block ' src="./src/assets/businesslogo.png" alt="" />
                <img className='h-[70vh] mt-[3vw] block sm:hidden ' src="./src/assets/mobilebusines.png" alt="" />
            </div>
            {/* Youtube video section */}
            <div className='flex  hidden  flex-col items-center' >
                <h1 className='text-3xl font-semibold my-[3vw] ' >Hear it from our clients</h1>
                <div className='grid sm:grid-cols-3 sm:space-x-3.5 ' >
                    <div className="sm:w-[30vw] w-[80vw] sm:max-w-2xl aspect-video">
                        <iframe
                            className="w-full h-full rounded-lg shadow-lg"
                            src="https://www.youtube.com/embed/AtGSGUAngP8?si=zX_Ux3LZ-30mk-P9"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <h2 className='text-lg font-semibold my-[5vw] sm:my-[1vw]' >Shashank Mehta - The Whole Truth</h2>
                    </div>
                    <div className="sm:w-[30vw] w-[80vw] sm:max-w-2xl aspect-video">
                        <iframe
                            className="w-full h-full rounded-lg shadow-lg"
                            src="https://www.youtube.com/embed/73_7S4aED3U?si=Na3GhUFbjsb_8DXO"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <h2 className='text-lg font-semibold my-[5vw] sm:my-[1vw]' >Shashank Mehta - The Whole Truth</h2>
                    </div>
                    <div className="sm:w-[30vw] w-[80vw] sm:max-w-2xl aspect-video">
                        <iframe
                            className="w-full h-full rounded-lg shadow-lg"
                            src="https://www.youtube.com/embed/xx-7rdKYRho?si=4fHtm9u6S_Hss_rr"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <h2 className='text-lg font-semibold my-[5vw] sm:my-[1vw]' >Shashank Mehta - The Whole Truth</h2>
                    </div>
                </div>
            </div>
            <div className='bg-grade w-full sm:mt-[0vw] py-[8vh] flex justify-center items-center ' >
                <div className='grid sm:grid-cols-2 justify-center items-center gap-[7vw] sm:gap-[5vw] ' >
                    <div className='sm:w-[28vw] w-full px-[5vw] sm:px-0  sm:space-y-[1.5vw]' >
                        <h1 className='text-white text-2xl font-semibold ' >From the Founder</h1>
                        <p className='text-white' >"I believe talent in India needs more than theory, it needs real work, proof, and purpose. At Code2DBug, we’re building a bridge between potential and performance. Our career programs are designed to give learners the tools, mentoring, and credibility to create opportunities; not wait for them."</p>
                        <a className='underline underline-offset-2 font-semibold text-white ' target='_blank' href="https://www.instagram.com/04braveheart?igsh=MWRyaTZrbDJsNXR6dw%3D%3D&utm_source=qr"> Pravin.R.Nair, Founder & CEO, code2dbug </a>
                    </div>
                    <div className='flex justify-center ' >
                        <img className='sm:h-[21vw] h-[90vw] rounded-full  object-cover' src="./src/assets/founder.jpeg" alt="" />
                    </div>
                </div>
            </div>
            {/* Youtube video section */}
            <div className='flex hidden flex-col items-center text-center sm:my-[4vw] my-[13vw] mx-[4vw] ' >
                <div className="sm:w-[65vw] w-full  aspect-video">
                    <iframe
                        className="w-full h-full  shadow-lg"
                        src="https://www.youtube.com/embed/451L72vLfAk?si=5tPK_2bTuQ_Hcgq3"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <h2 className='text-2xl font-semibold my-[1vw] font-sans' >We're Hiring!</h2>
                    <p className=' text-slate-900 my-[1vw] ' >We’re growing our team and hiring for various roles across a few departments. </p>
                    <a className='underline-offset-2 font-semibold  underline' href="">Join Our Team!</a>
                </div>
            </div>
            {/* Journal blog section */}
            <div className='flex flex-col hidden sm:mt-[12vw] mt-[20vh] items-center justify-center py-[4vw] bg-gray-200  ' >
                <h1 className='   text-4xl font-semibold mb-[1vw]' >Journal</h1>
                <p className='font-sans ' >Musings and ideas from Team Thought Over Design.</p>
                <div className=' grid  sm:grid-cols-3 gap-[2vw] sm:mx-0 mx-[5vw] mt-[6vh] sm:mt-[3vw] ' >
                    <div className=' border-black border-[2px] cursor-pointer transition-transform duration-500 hover:scale-105 ' >
                        <img className='sm:h-[28vw] h-full ' src="./src/assets/journal1.png" alt="" />
                    </div>
                    <div className=' border-black border-2 cursor-pointer transition-transform duration-500 hover:scale-105 ' >
                        <img className='sm:h-[28vw] h-full' src="./src/assets/journal2.png" alt="" />
                    </div>
                    <div className=' border-black border-2  cursor-pointer transition-transform duration-500 hover:scale-105' >
                        <img className='sm:h-[28vw] h-full' src="./src/assets/journal3.jpg" alt="" />
                    </div>
                </div>
                <button className='sm:h-[3.5vw] h-[6vh] w-[80vw] sm:w-[20vw] mt-[4vh] mx-[4vh] border-2 text-lg font-semibold border-black cursor-pointer transition-all ease-in duration-200 hover:bg-black hover:text-white' >VIEW JOURNAL</button>
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

export default Company