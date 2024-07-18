import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown, AiOutlineSearch } from 'react-icons/ai';
import { FaUserCircle } from "react-icons/fa";
import { H_Main_Logo_Dark, Main_Logo_Icon } from '../../images';
import Dark from './Dark'
const Navbar = () => {
     const [nav, setNav] = useState(false);
     const [activeMenu, setActiveMenu] = useState(null);
     const [profileDropdown, setProfileDropdown] = useState(false);
     const [showSearch, setShowSearch] = useState(false);

     const handleNav = () => {
          setNav(!nav);
          setActiveMenu(null);
     };

     const handleSubMenuClick = (index) => {
          setActiveMenu(activeMenu === index ? null : index);
     };

     const toggleProfileDropdown = () => {
          setProfileDropdown(!profileDropdown);
     };

     const toggleSearch = () => {
          setShowSearch(!showSearch);
          if (nav) {
               setNav(false);
          }
     };

     const closeSearch = () => {
          setShowSearch(false);
     };

     const navItems = [
          { id: 1, text: 'Home', url: '/' },
          {
               id: 2,
               text: 'University',
               url: '/university',
               submenu: [
                    { text: 'University 1', url: '/university' },
                    { text: 'University 2', url: '/university' },
                    { text: 'University 3', url: '/university' }
               ]
          },
          {
               id: 3,
               text: 'Learn',
               url: '/learn',
               submenu: [
                    { text: 'Learn 1', url: '/learn' },
                    { text: 'Learn 2', url: '/learn' },
                    { text: 'Learn 3', url: '/learn' }
               ]
          },
          {
               id: 4,
               text: 'Shop',
               url: '/shop',
               submenu: [
                    { text: "Women's Fashion", url: "/shop" },
                    { text: "Health & Beauty", url: '/shop' },
                    { text: "Men's Fashion", url: "/shop" }
               ]
          },
          { id: 5, text: 'Build with Us', url: '/card' },
          { id: 6, text: 'Contact', url: '/contact' },
          { id: 7, text: 'Blog/Article', url: '/blog-articles' },
     ];

     return (
          <nav className="bg-white border-gray-200 dark:bg-white-900 sticky top-0">
               <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                         <img
                              src={window.innerWidth >= 768 ? H_Main_Logo_Dark : Main_Logo_Icon}
                              width={100}
                              height={55}
                              alt="Flowbite Logo"
                              className="h-15"
                         />
                    </Link>
                    <ul className='hidden md:flex items-center space-x-4'>
                         {navItems.map((item, index) => (
                              !item.hidden && (
                                   <li
                                        key={item.id}
                                        className='p-4 hover:text-blue-900 rounded-xl m-2 cursor-pointer duration-300 relative'
                                        onClick={() => handleSubMenuClick(index)}
                                   >
                                        {item.icon ? item.icon : <Link to={item.url}>{item.text}</Link>}
                                        {item.submenu && activeMenu === index && (
                                             <ul className="absolute bg-white border border-gray-200 mt-2 rounded-xl py-2 w-max">
                                                  {item.submenu.map((subitem, subIndex) => (
                                                       <li key={subIndex} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                            <Link to={subitem.url}>{subitem.text}</Link>
                                                       </li>
                                                  ))}
                                             </ul>
                                        )}
                                        {item.submenu && <AiOutlineDown className="ml-1 inline-block" />}
                                   </li>
                              )
                         ))}
                    </ul>
                    <ul className='hidden md:flex items-center space-x-4'>
                         <li className='relative'>
                              {showSearch ? (
                                   <div className="flex items-left">
                                        <input
                                             type="text"
                                             placeholder="Search"
                                             className="px-40 py-2 border rounded-xl"
                                        />
                                        <AiOutlineClose className="ml-2 cursor-pointer" onClick={closeSearch} />
                                   </div>
                              ) : (
                                   <AiOutlineSearch className='text-2xl cursor-pointer' onClick={toggleSearch} />
                              )}
                         </li>
                         <Dark />

                         <li className='relative'>
                              <button onClick={toggleProfileDropdown} className='p-4 hover:text-blue-900 rounded-xl m-2 cursor-pointer duration-300 flex items-center'>
                                   <FaUserCircle className="ml-1 text-5xl inline-block" />
                                   Profile
                                   <AiOutlineDown className="ml-1 inline-block" />
                              </button>
                              {profileDropdown && (
                                   <ul className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-xl py-2 w-48">
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                             <Link to="/profile">Profile</Link>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                             <Link to="/">Logout</Link>
                                        </li>
                                   </ul>
                              )}
                         </li>
                    </ul>

                    <div onClick={handleNav} className='block md:hidden'>
                         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>
                    <ul
                         className={
                              nav
                                   ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 text-black'
                                   : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                         }
                    >
                         <li className='relative'>
                              <button onClick={toggleProfileDropdown} className='p-4 hover:text-blue-900 rounded-xl m-2 cursor-pointer duration-300 flex items-center'>
                                   <FaUserCircle className="ml-1 text-5xl inline-block" />
                                   Profile
                                   <AiOutlineDown className="ml-1 inline-block" />
                              </button>
                              {profileDropdown && (
                                   <ul className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-xl py-2 w-48">
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                             <Link to="/profile">Profile</Link>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                             <Link to="/">Logout</Link>
                                        </li>
                                   </ul>
                              )}
                         </li>
                         <li className='relative'>
                              <div className="flex items-center">
                                   <input
                                        type="text"
                                        placeholder="Search"
                                        className="px-4 py-2 border rounded-xl"
                                   />
                                   <AiOutlineSearch className='text-2xl cursor-pointer' />
                              </div>
                         </li>
                         {navItems.map((item, index) => (
                              !item.hidden && (  // Check if item is not hidden
                                   <li
                                        key={item.id}
                                        className='p-4 border-b rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600 relative flex '
                                        onClick={() => handleSubMenuClick(index)}
                                   >
                                        {item.icon ? item.icon : <Link to={item.url}>{item.text}</Link>}
                                        {item.submenu && activeMenu === index && (
                                             <ul className="absolute bg-black border border-gray-900 mt-4 rounded-md py-2 text-white w-max">
                                                  {item.submenu.map((subitem, subIndex) => (
                                                       <li key={subIndex} className="px-8 py-2 hover:bg-gray-800 cursor-pointer">
                                                            <Link to={subitem.url}>{subitem.text}</Link>
                                                       </li>
                                                  ))}
                                             </ul>
                                        )}
                                        {item.submenu && <AiOutlineDown className="ml-1 inline-block text-dark" />}
                                   </li>
                              )
                         ))}
                    </ul>

               </div>
          </nav>
     );
};

export default Navbar;
