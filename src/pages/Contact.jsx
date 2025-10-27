import React, { useEffect, useState } from 'react'

import { FaArrowRightLong, FaSuitcase } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdAddIcCall } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';


function Contact() {
    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });

    // Digits only, country code, no plus.
    const phoneNumber = "919827563406";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, company, service, message } = formData;

        // Build a readable message, then encode it once.
        const lines = [
            `Hello, I am ${name}.`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Company Name: ${company}`,
            `Service Interested In: ${service}`,
            `Message: ${message}`,
        ];
        const whatsappMessage = encodeURIComponent(lines.join("\n"));

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        // Use direct navigation so mobile doesn’t block it.
        window.location.href = whatsappURL;

        // Optional: reset after kicking the navigation.
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            message: "",
        });
    };

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
            <div className='absolute inset-0 z-10  ' >
                <nav className='h-[12vh] bg-transparent grid grid-cols-12 items-center' >
                    <div className='sm:col-span-3 col-span-5' >
                        <div className='sm:ml-[10vw] ml-[3vw] '  >
                            <Link to={'/'} >  <img className='sm:h-[18vh] rounded-xl hidden sm:block h-[8vh] mask-y-from-70% mask-y-to-90% mask-x-from-80% mask-x-to-110%  ' src="./src/assets/c2dblogo.png" alt="" /></Link>
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
            <div className='grid sm:grid-cols-2 ' >
                <div className=' ' >

                    <img className='  ' src="./src/assets/contactpage.jpeg" alt="" />
                </div>
                <div className='pt-[8vw]  bg-grade  px-[6vw] ' >
                    <h2 className='text-2xl text-white font-semibold mb-2.5' >New Business Enquiries</h2>
                    <p className='text-white' >We’re a focused brand strategy and design studio. We’re not a social media or digital marketing agency, so please do keep this in mind before sending us your brief! </p>
                    <p className='font-semibold mt-3 text-white ' >Share your brief with us here.</p>
                    <div className=" relative inset-0 z-10  ">
                        <form onSubmit={handleSubmit} className="  rounded-2xl  w-full ">
                            <h2 className="text-2xl font-semibold mb-6 text-center"></h2>

                            {/* Name + Phone */}
                            <div className="mb-4 gap-1 flex flex-col sm:flex-row ">
                                <label className="block text-white mb-2"></label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full border border-white text-white px-4 rounded-lg  py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                                />
                                <label className="block text-gray-600 mb-2"></label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your Phone number"
                                    className="w-full border border-white text-white  px-4 rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label className="block text-gray-600 mb-2"></label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full border border-white text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                                />
                            </div>

                            {/* Company */}
                            <div className="mb-4">
                                <label className="block text-gray-600 mb-2"></label>
                                <input
                                    type="text"
                                    name="company"
                                    required
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Enter your Company Name"
                                    className="w-full border text-white  border-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                                />
                            </div>

                            {/* Service */}
                            <div className='grid sm:grid-cols-2 gap-2 mb-4'>
                                <div className="col-span-2 ">
                                    <label className="block text-gray-600  mb-2"></label>
                                    <select
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full border border-white bg-white hover:bg-grade cursor-pointer hover:text-white transition-all ease-in duration-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                                    >
                                        <option value="">Select a service</option>
                                        <option>Web Design & Development</option>
                                        <option>Mobile App Development</option>
                                        <option>Digital Marketing / SEO</option>
                                        <option>UI/UX Design</option>
                                        <option>E-Commerce Website</option>
                                        <option>Software Solutions</option>
                                        <option>IT Consultancy</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="mb-4">
                                <label className="block text-gray-600 mb-2"></label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Type your message"
                                    rows="4"
                                    className="w-full border border-white text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex justify-center items-center gap-2 bg-white hover:bg-grade cursor-pointer hover:text-white border border-white  text-black font-semibold py-2 rounded-lg transition-all ease-in duration-200 "
                            >
                                Send via WhatsApp
                                <FaWhatsapp className='text-2xl' />
                            </button>
                        </form>
                    </div>

                    <h2 className='text-white text-2xl font-semibold pt-12 pb-4  ' >Current Sponsored </h2>
                    <img className='sm:pb-1 pb-[5vh] sm:w-[30vw] rounded-xl ' src="./src/assets/regaalia.png" alt="" />
                    <h2 className='text-2xl font-semibold mb-2.5 mt-[3vw] text-white flex flex-row items-center gap-3 ' > <IoLocation className='' /> Our Address  </h2>
                    <p className='mb-2.5 text-white ' > <span className='text-2xl font-semibold' > Code2DBug </span> <br />
                        House No C- 17,<br />
                        behind 80 LIG dhancha bhawan,<br />
                        ACC Employees ( 2 labour ) housing society,
                        VTC: Kurud, <br />
                        District: Durg,
                        State: Chhattisgarh,<br />
                        PIN Code: 490024,
                        Mobile: 9827563406 <br />
                        <a href="mailto:info@code2dbug.com" className='font-semibold'  > Email: info@code2dbug.com </a>
                    </p>


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

export default Contact