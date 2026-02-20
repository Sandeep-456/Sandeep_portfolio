import React from "react";
import { Mail, Phone, MapPin, Moon, Sun } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const LeftSection = ({ toggleTheme, isDark }) => {
  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "sandeepindugula456@gmail.com",
    },
    { icon: <Phone size={18} />, label: "Phone", value: "+91 7075103361" },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Palakollu, India",
    },
  ];

  return (
    <aside
      className={`w-full md:w-80 h-fit sticky top-8 p-8 rounded-4xl transition-all duration-300
      ${isDark ? "bg-[#1e1e1e] shadow-clay-dark text-white" : "bg-[#eeeeee] shadow-clay-light text-gray-800"}`}
    >
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`absolute top-4 right-4 p-2 rounded-full shadow-inner transition-colors
          ${isDark ? "bg-[#2a2a2a] hover:bg-[#333]" : "bg-[#f0f0f0] hover:bg-white"}`}
      >
        {isDark ?
          <Sun size={20} className="text-yellow-400" />
        : <Moon size={20} className="text-indigo-600" />}
      </button>

      {/* Profile Header */}
      <div className="flex flex-col items-center text-center">
        <div
          className={`w-32 h-32 rounded-full p-1 mb-4 shadow-inner ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
        >
          <img
            src="https://res.cloudinary.com/dpvrtbqxt/image/upload/v1771090602/Sandeep/Portfolio/sandeep_kqdyth.jpg"
            alt="Sandeep Indugula"
            className="w-full h-full rounded-full object-cover border-4 border-transparent"
          />
        </div>
        <h1 className="text-2xl font-bold mb-1">Sandeep Indugula</h1>
        <div
          className={`flex items-center  px-3 py-1 rounded-full text-sm font-medium mb-6 ${isDark ? "bg-[#2a2a2a] text-cyan-400 shadow-inner" : "bg-white text-blue-600 shadow-sm"}`}
        >
          <div className="h-2 w-2 rounded-full mr-2 bg-amber-400"></div>
          <p>Junior Full Stack Developer</p>
        </div>
      </div>

      <hr
        className={`my-6 border-none h-[1px] ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
      />

      {/* Contact Details */}
      <div className="space-y-4">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-center gap-4">
            <div
              className={`p-3 rounded-xl shadow-inner ${isDark ? "bg-[#2a2a2a]" : "bg-white"}`}
            >
              {info.icon}
            </div>
            <div className="overflow-hidden">
              <p className="text-xs uppercase opacity-60 font-semibold">
                {info.label}
              </p>
              <p className="text-sm truncate font-medium">{info.value}</p>
            </div>
          </div>
        ))}
      </div>
      <hr
        className={`my-6 border-none h-[1px] ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
      />
      <div className="flex gap-x-5 justify-center ">
        <div
          className={`${isDark ? "bg-[#2a2a2a] hover:bg-[#333]" : "bg-[#f0f0f0] hover:bg-white"} p-3 rounded-full shadow-inner transition-colors`}
        >
          <a href="www.linkedin.com/in/sandeepindugula" target="_blank">
            <FaLinkedin
              size={24}
              className={`transition-colors ${isDark ? "text-blue-500 hover:text-blue-400" : "text-blue-700 hover:text-blue-600"}`}
            />
          </a>
        </div>
        <div
          className={`${isDark ? "bg-[#2a2a2a] hover:bg-[#333]" : "bg-[#f0f0f0] hover:bg-white"} p-3 rounded-full shadow-inner transition-colors`}
        >
          <a href="https://github.com/Sandeep-456" target="_blank">
            <FaGithub
              size={24}
              className={`transition-colors ${isDark ? "text-gray-400 hover:text-gray-300" : "text-gray-800 hover:text-gray-600"}`}
            />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default LeftSection;
