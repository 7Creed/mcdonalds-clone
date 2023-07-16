/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlineSearch,
} from "react-icons/ai";
import Link from "next/link";
import { useGlobalContext } from "../../context/context";
// import MainPage from "../Main/MainPage";

const logo = "/img/logo.jpg";

const navI = [
  {
    id: 1,
    title: "Language",
    icon: <RiArrowDropDownLine className="text-3xl" />,
    link: "/",
  },
  { id: 2, title: "Sign Up for Email", link: "/" },
  { id: 3, title: "Careers", link: "/" },
];

const navII = [
  {
    id: 1,
    title: "Our Menu",
    icon: <RiArrowDropDownLine className="text-3xl" />,
    link: "/",
  },
  { id: 2, title: "Download App", link: "/" },
  { id: 3, title: "MyMcDonald's Rewards", link: "/" },
  { id: 4, title: "Exclusive Deals", link: "/" },
  { id: 5, title: "About Our Food", link: "/" },
  { id: 6, title: "Locate", link: "/" },
  { id: 7, title: "Gift Cards", link: "/" },
];

const Header = () => {
  const {isNav, setIsNav} = useGlobalContext();
  // const [isVisible, setIsVisible] = useState("hidden");

  const toggleNav = () => {
    setIsNav(!isNav);
    if (isNav) {
      // setIsVisible("block");
    } else {
      // setIsVisible("hidden");
    }
  };

  return (
    <header className={`${!isNav && 'shadow-lg'} pr-3 md:py-5 md:px-10`}>

   {/* {isNav && <div className="fixed z-20 top-24 bottom-0 right-0 left-0 bg-white"></div>} */}

      <div className="flex justify-between items-center space-x-5">
        <div
          className={`${
            isNav && "w-full justify-between"
          } logo flex items-center`}
        >
          <img
            src={logo}
            alt="logo"
            className="mix-blend-multiply w-20 h-12 md:w-auto"
          />
          {/* mobile view */}
          {isNav ? (
            <div className="fixed w-[86%] top-0 right-0 bottom-0 bg-white z-50 flex flex-col px-4 text-[1.05rem] lg:hidden">
                <div className="flex justify-end py-6">
                  <AiOutlineClose className="text-[1.3rem]" onClick={toggleNav} />
                </div>
                <ul className="divide-y my-4">
                  <div className="space-y-4 pb-4">
                    <div className="flex items-center justify-between">
                      <li>Language</li>
                      <AiOutlinePlus className="text-[1.3rem]" />
                    </div>
                    <li>Sign Up for Email</li>
                    <li>Careers</li>
                  </div>
                  <div className="pt-4 space-y-4 pb-4">
                    <div className="flex items-center justify-between">
                      <li>Our Menu</li>
                      <AiOutlinePlus className="text-[1.3rem]" />
                    </div>
                    <li>Download App</li>
                    <li>MyMcDonald's Rewards</li>
                    <li>Exclusive Deals</li>
                    <li>About Our Food</li>
                    <li>Locate</li>
                    <li>Gift Cards</li>
                  </div>
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center justify-between">
                      <li>Search</li>
                      <AiOutlineSearch />
                    </div>
                    <li className="flex items-center justify-between border-b pb-8">
                      <a href="#" className="text-blue-500 underline">Change your location</a>
                      <FaMapMarkerAlt className="text-red-500" />
                    </li>
                  </div>
                </ul>
            </div>
          ) : (
            <AiOutlineMenu
              className="md:hidden text-[1.5rem] w-20"
              onClick={toggleNav}
            />
          )}
        </div>

        {/* <div className="md:hidden col-span-5">
          {isNav && (
           
          )}
        </div> */}

        <div className={`${isNav && "hidden"} others w-full`}>
          <div className="first flex justify-end md:justify-between">
            <div className="left hidden md:flex">
              <ul className="flex space-x-10">
                {navI.map((nav) => {
                  return (
                    <li key={nav.id} className="text-gray-500">
                      <Link href={nav.link} className={nav.icon && "flex"}>
                        {nav.title}
                        {nav?.icon}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="right flex md:space-x-10">
              <ul className="hidden md:flex space-x-10">
                <li>
                  <button>Search</button>
                </li>
                <li>
                  <a href="#" className="text-blue-500 underline">
                    Change your location
                  </a>
                </li>
              </ul>
              <div className="orderNow">
                <a
                  href="#"
                  className="bg-[#ffbc0d] text-[#292929] text-sm py-2 px-4 rounded-[0.3rem] flex-end flex shrink-0"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>

          <div className="">
            <ul className="second w-full pt-3 hidden md:flex justify-between items-center text-base font-bold text-black">
              {navII.map((nav) => {
                return (
                  <li key={nav.id} className="">
                    <Link
                      href={nav.link}
                      className={`${navII.length && "mr-5"} ${
                        nav?.icon && "flex items-center"
                      }`}
                    >
                      {nav.title}
                      {nav?.icon}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* <div className="orderNow">
          <a
            href="#"
            className="bg-yellow-500 text-sm py-2 px-3 rounded-[0.3rem] ml-aut flex-end"
          >
            Order Now
          </a>
        </div> */}
      </div>
    </header>

    // <header className="shadow-lg px-10 py-5">
    //   <div className="grid grid-cols-6 md:grid-cols-10 justify-between items-center py-2 px-2 w-full">
    //     <div className="flex col-span-1 md:col-span-1">
    //       {/* <img src={logo} alt="logo" className="" /> */}
    //       {!isNav && (
    //         <AiOutlineMenu
    //           className="md:hidden text-[1.3rem] "
    //           onClick={toggleNav}
    //         />
    //       )}
    //     </div>
    //     <div className="md:hidden col-span-5">
    //       {isNav ? (
    //         <div className="absolute w-[70%] top-0 right-0 bg-white grid grid-cols-1">
    //           <ul className="text-red-500 divide-y my-4">
    //             <div className="w-full text-end items-end mr-auto place-items-end place-content-end">
    //               <AiOutlineClose
    //                 className="text-[1.3rem]"
    //                 onClick={toggleNav}
    //               />{" "}
    //               {/* w-[190%] inline-block */}
    //             </div>
    //             <div>
    //               <div className="flex items-center justify-between">
    //                 <li>Language</li>
    //                 <AiOutlinePlus className="text-[1.3rem]" />
    //               </div>
    //               <li>Sign Up for Email</li>
    //               <li>Careers</li>
    //             </div>
    //             <div>
    //               <li>Our Menu</li>
    //               <li>Download App</li>
    //               <li>MyMcDonald's Rewards</li>
    //               <li>Exclusive Deals</li>
    //               <li>About Our Food</li>
    //               <li>Locate</li>
    //               <li>Gift Cards</li>
    //             </div>
    //             <div>
    //               <li>Search</li>
    //               <li>
    //                 <a href="#">Change your location</a>
    //               </li>
    //             </div>
    //           </ul>
    //         </div>
    //       ) : (
    //         <div className="flex items-center justify-end">
    //           <a
    //             href="#"
    //             className="bg-yellow-500 text-sm py-2 px-3 rounded-[0.3rem] ml-aut flex-end"
    //           >
    //             Order Now
    //           </a>
    //         </div>
    //       )}
    //     </div>

    //     <div className="text-gray-500 flex flex-col md:col-span-9 space-y-5">
    //       {/* <ul>
    //         {nav.map((nav) => {
    //           return (
    //             <li key={nav.id}
    //             className="text-gray-200">
    //               <Link href={nav.link}>{nav.title}</Link>
    //             </li>
    //           );
    //         })}
    //       </ul> */}
    //       {/* <div className="flex">
    //         <div className="flex space-x-10">
    //           <button className="flex items-center">
    //             <span>Language</span> <RiArrowDropDownLine className="text-2xl" />
    //           </button>
    //           <div className="space-x-10">
    //             <Link href={"/"}>Sign Up for Email</Link>
    //             <Link href={"/"}>Careers</Link>
    //           </div>
    //         </div>
    //         <div className="ml-auto space-x-10">
    //           <button>Search</button>
    //           <Link href={"/"} className="text-blue-600 underline">
    //             Change your Location
    //           </Link>
    //           <a
    //             href="#"
    //             className="bg-yellow-500 text-black text-sm py-2 px-5 rounded-[0.3rem] ml-aut flex-end"
    //           >
    //             Order Now
    //           </a>
    //         </div>
    //       </div> */}

    //       {/* <div className="w-full">
    //         <div className="text-lg text-black">
    //           <ul className="flex justify-between">
    //             {navII.map((nav) => {
    //               return (
    //                 <li key={nav.id} className="">
    //                   <Link href={nav.link} className={`${navII.length && 'mr-5'} ${nav?.icon && 'flex items-center'}`}>{nav.title}{nav?.icon}</Link>
    //                 </li>
    //               );
    //             })}
    //           </ul>
    //         </div>
    //       </div> */}

    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
