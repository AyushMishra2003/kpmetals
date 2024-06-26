import React, { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { AiTwotoneDashboard } from "react-icons/ai";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { GrGallery, GrHistory } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import {
  MdOutlineContentPasteSearch,
  MdOutlineForwardToInbox,
} from "react-icons/md";
import { FaExternalLinkAlt, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import logo from '../assets/kplogos.png'

const Header = () => {
//   const navigate=useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
//   const { data, role } = useSelector((state) => state.user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeHamburger = () => {
    setIsMenuOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [showAuthDropdown, setShowAuthDropdown] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleAuthClick = () => {
    setShowAuthDropdown(!showAuthDropdown);
  };

  useEffect(() => {
    closeHamburger();
  }, [location]);

  return (
    <div className="bg-[#f5f5f5]">
      {/* Hamburger Icon */}
      <button
        className="lg:hidden fixed top-12 right-7 z-50"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaTimes className="text-[#40514e] text-2xl" />
        ) : (
          <FaBars className="text-[#40514e] text-2xl" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-[#f5f5f5] z-40 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <nav className="space-y-2 flex flex-col">
            <Link
              to="/"
              className="flex items-center p-2 font-normal text-[1rem] text-black hover:bg-[#ADC4CE]"
            >
              <RxDashboard />
              <span className="ml-2">Home</span>
            </Link>
            <div>
              {/* {(role === "ADMIN" || role === "DEVELOPER") && ( */}
                <Link
                  to="/product"
                  className="flex items-center p-2 rounded hover:bg-[#ADC4CE] text-black"
                >
                  <IoIosSettings />
                  <span className="ml-2">Our Product</span>
                </Link>
              {/* )} */}
            </div>

            <Link
              to="/gallery"
              className="flex items-center p-2 rounded text-black hover:bg-[#ADC4CE]"
            >
              <MdOutlineContentPasteSearch />
              <span className="ml-2">Gallery</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center p-2 rounded text-black hover:bg-[#ADC4CE]"
            >
              <GrGallery />
              <span className="ml-2">About</span>
            </Link>
            
              <Link
            to="/contact"
            className={`flex items-center p-2 rounded hover:bg-[#676868] text-black`}
          >
            <FaExternalLinkAlt
              className="text-black"
            />
            <span className="ml-2">Contact</span>
          </Link>
          {/* <button className="px-6 py-[0.4rem]  border border-red-500 text-red-500 bg-[#fff] rounded-sm">Login</button>
          <button className="px-6 py-[0.4rem]  border border-red-500 text-[#fff] bg-[#e73737] rounded-sm">SignUp</button>
          */}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col  lg:flex-row w-full lg:items-center items-start justify-between font-shippori  pb-4  cursor-pointer p-4 md:p-[1.3rem] gap-3 ">
        <div className="">
             <img src={logo} alt="KPLOGO" className="w-[7rem]" />
        </div>

        <div className="gap-5 hidden lg:flex text-[#40514E] font-bold ">
           <Link to={"/"}>Home</Link>
           <Link to={"/product"}>Our Products</Link>
           <Link to={"/gallery"}>Gallery</Link>
           <Link to={"/about"}>About Us</Link>
           <Link to={"/contact"}>Contact Us</Link>
          </div>
        </div>
      </div>
  
  );
};

export default Header;