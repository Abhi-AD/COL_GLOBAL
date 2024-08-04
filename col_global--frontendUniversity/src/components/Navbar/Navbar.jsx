import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { H_Main_Logo_Dark, H_Main_Logo_White, Main_Logo_Icon, Main_Logo_Icon_White } from '../../images';
import useDarkMode from '../../hooks/useDarkMode';
import Dark from './Dark';

const Navbar = () => {
     const [menuOpen, setMenuOpen] = useState(false);
     const [scrolled, setScrolled] = useState(false);
     const { DarkMode } = useDarkMode();
     const location = useLocation();

     useEffect(() => {
          window.scrollTo({
               top: 0,
               behavior: 'smooth'
          });
     }, [location]);


     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     };

     const closeMenu = () => {
          setMenuOpen(false);
     };

     // Handle scroll event
     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 100) {
                    setScrolled(true);
               } else {
                    setScrolled(false);
               }
          };

          window.addEventListener('scroll', handleScroll);

          // Cleanup event listener on component unmount
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     const isHomePage = location.pathname === '/dvd';

     if (isHomePage) {
          return (
               <div className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300  ${scrolled ? 'bg-white text-black' : 'bg-transparent text-white'} ${DarkMode ? '' : ''}`}>
                    <div className={`transition-colors duration-75 w-full p-4 md:p-0`}>
                         <nav className={`max-w-screen-2xl mx-auto flex flex-wrap items-center justify-between py-3`}>
                              <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={closeMenu}>
                                   <img
                                        src={scrolled ? H_Main_Logo_Dark : H_Main_Logo_White}
                                        width={100}
                                        height={55}
                                        alt="Logo"
                                        className="hidden xl:block"
                                   />
                                   <img
                                        src={DarkMode ? Main_Logo_Icon_White : Main_Logo_Icon}
                                        width={50}
                                        height={55}
                                        alt="Logo"
                                        className="xl:hidden"
                                   />
                              </Link>
                              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-10">
                                   <button
                                        type="button"
                                   >
                                        <Dark />

                                   </button>
                                   <div className="flex md:hidden">
                                        <button id="hamburger" onClick={toggleMenu} className="text-3xl">
                                             {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                                        </button>
                                   </div>
                              </div>
                              <div className={`toggle ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex text-left font-bold mt-5 md:mt-0 md:border-none`}>
                                   <Link to="/" className="block md:inline-block hover:text-blue-500 px-5 py-5 md:border-none" onClick={closeMenu}>
                                        Home
                                   </Link>
                                   <Link to="/all-university" className="block md:inline-block hover:text-blue-500 px-5 py-5 md:border-none" onClick={closeMenu}>
                                        Top University
                                   </Link>
                                   <Link to="/all-country" className="block md:inline-block hover:text-blue-500 px-5 py-5 md:border-none" onClick={closeMenu}>
                                        Country
                                   </Link>
                                   <Link to="/scholarships" className="block md:inline-block hover:text-blue-500 px-5 py-5 md:border-none" onClick={closeMenu}>
                                        Scholarships
                                   </Link>
                                   <Link to="/contact" className="block md:inline-block hover:text-blue-500 px-5 py-5 md:border-none" onClick={closeMenu}>
                                        Contact Us
                                   </Link>
                              </div>

                         </nav>
                    </div>
               </div>

          )
     }

     return (
          <div className={`sticky top-0 left-0 z-50 w-full px-10 mx-auto ${DarkMode ? 'bg-black' : 'bg-white'}`}>
               <div className="w-full h-full">
                    <nav className="max-w-screen-2xl mx-auto flex flex-wrap items-center justify-between py-3 h-full">
                         <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={closeMenu}>
                              <img
                                   src={DarkMode ? H_Main_Logo_White : H_Main_Logo_Dark}
                                   width={100}
                                   height={55}
                                   alt="Logo"
                                   className="hidden xl:block"
                              />
                              <img
                                   src={DarkMode ? Main_Logo_Icon_White : Main_Logo_Icon}
                                   width={50}
                                   height={55}
                                   alt="Logo"
                                   className="xl:hidden"
                              />
                         </Link>
                         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-10">
                              <button
                                   type="button"
                              >
                                   <Dark />

                              </button>
                              <div className="flex md:hidden">
                                   <button id="hamburger" onClick={toggleMenu} className="text-3xl">
                                        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                                   </button>
                              </div>
                         </div>

                         <div className={`toggle ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex text-left font-bold mt-5 md:mt-0 md:border-none h-full text-[#2D2F30]`}>
                              <Link to="/" className="block md:text-xl font-medium md:inline-block hover:text-blue-500 px-5 py-5 md:border-none" onClick={closeMenu}>
                                   Home
                              </Link>
                              <Link to="/all-university" className="block md:text-xl font-medium md:inline-block hover:text-blue-500 px-5 py-5 md:border-none" onClick={closeMenu}>
                                   Top University
                              </Link>
                              <Link to="/all-country" className="block md:text-xl font-medium md:inline-block hover:text-blue-500 px-5 py-5 md:border-none" onClick={closeMenu}>
                                   Country
                              </Link>
                              <Link to="/contact" className="block md:text-xl font-medium md:inline-block hover:text-blue-500 px-5 py-5 md:border-none" onClick={closeMenu}>
                                   Contact Us
                              </Link>
                         </div>
                    </nav>
               </div>
          </div>


     );
};

export default Navbar;
