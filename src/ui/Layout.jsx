import { useState, useEffect } from "react";
import { useLocation, NavLink, Outlet } from "react-router-dom";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoBriefcaseOutline, IoNewspaperOutline } from "react-icons/io5";
import { TbCertificate } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import Profile from "../components/Profile";
import Card from "./Card";
import { useTheme } from "../Context/ThemeContext";

function Layout() {
  const location = useLocation();
  const rawPath = location.pathname.replace("/", "");
  const pageName =
    rawPath === "" ? "About" : (
      rawPath.charAt(0).toUpperCase() + rawPath.slice(1)
    );

  const { isDark, handelTheme } = useTheme();

  const navLinks = [
    { to: "/", icon: <IoMdInformationCircleOutline />, label: "About" },
    { to: "/portfolio", icon: <IoBriefcaseOutline />, label: "Portfolio" },
    { to: "/resume", icon: <IoNewspaperOutline />, label: "Resume" },
    { to: "/certifications", icon: <TbCertificate />, label: "Certifications" },
    { to: "/contact", icon: <RiCustomerService2Fill />, label: "Contact" },
  ];

  const linkStyles = ({ isActive }) =>
    isActive ?
      "text-blue-600 dark:text-blue-500 flex gap-1 items-center font-semibold"
    : "text-zinc-600 dark:text-zinc-500 flex gap-1 items-center hover:text-blue-500 transition-colors";

  return (
    <div
      className={`h-[100vh] transition-all duration-700 flex flex-col items-center overflow-hidden
        ${
          isDark ?
            "bg-[radial-gradient(circle_at_top_left,_#1a1a1a_0%,_#000000_100%)]"
          : "bg-[linear-gradient(135deg,_#f8fafc_0%,_#e2e8f0_100%)]"
        }`}
    >
      {/* Theme Toggle Button - Matching Profile Icon Depth */}
      <div className="absolute top-4 right-4 z-[100]">
        <button
          onClick={handelTheme}
          className={`p-2.5 rounded-full text-xl cursor-pointer transition-all duration-300 active:scale-90 border
                  ${
                    isDark ?
                      "bg-[#1a1a1a] border-zinc-800 text-yellow-400 shadow-[4px_4px_10px_#000,-1px_-1px_10px_#333]"
                    : "bg-white border-white text-zinc-800 shadow-[5px_5px_15px_#cbd5e1,-5px_-5px_15px_#fff]"
                  }`}
        >
          {isDark ?
            <MdOutlineDarkMode />
          : <MdOutlineLightMode />}
        </button>
      </div>
      {/* Main Content Container */}
      <div className="w-full h-full flex flex-col xl:flex-row justify-center gap-6 py-10 px-4 md:px-15 overflow-hidden">
        {/* Left Section (Profile) */}
        <div className="">
          <Profile isDark={isDark} />
        </div>
        {/* Right Section (Navigation + Content Card) */}
        <Card
          isDark={isDark}
          className={`flex flex-col w-[70%] h-full border-2 ${isDark ? "border-zinc-800" : "border-white"}`}
        >
          {/* Header & Desktop Nav */}
          <div className="flex justify-between items-start h-fit relative">
            <div className="p-6 ml-5">
              <h1
                className={`text-lg font-black uppercase ${isDark ? "text-white" : "text-slate-900"}`}
              >
                {pageName}
              </h1>
              <div className="bg-blue-600 h-1.5 w-10 rounded-full mt-1 shadow-[0_0_15px_rgba(37,99,235,0.3)]" />
            </div>

            {/* Desktop Navbar - 3D Inset Design like Profile Tiles */}
            <nav
              className={`hidden lg:flex py-5 px-10 rounded-bl-4xl rounded-tr-4xl gap-8 border-b border-l transition-all duration-500
                ${
                  isDark ?
                    "bg-[#0a0a0a] border-zinc-900 shadow-[inset_4px_4px_10px_#000]"
                  : "bg-white border-slate-100 shadow-[inset_1px_0px_10px_#cbd5e1]"
                }`}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) => `
                    flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all
                    ${
                      isActive ? "text-blue-500"
                      : isDark ? "text-zinc-500 hover:text-white"
                      : "text-zinc-400 hover:text-black"
                    }
                  `}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="hidden xl:inline">{link.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Page Content Outlet - Scrollable Area */}
          <div className="px-8 pb-8 no-scrollbar scrollable-container overflow-y-auto">
            <Outlet context={{ isDark }} />
          </div>
        </Card>

        {/* Mobile Bottom Navbar - 3D Floating Plate */}
        <nav
          className={`lg:hidden fixed bottom-4 left-4 right-4 z-50 py-4 px-6 flex justify-around rounded-[2rem] border transition-all
          ${
            isDark ?
              "bg-[#111] border-zinc-800 shadow-[10px_10px_30px_#000]"
            : "bg-white border-white shadow-[10px_10px_30px_#cbd5e1]"
          }`}
        >
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className={linkStyles}>
              <span className="text-2xl">{link.icon}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Layout;
