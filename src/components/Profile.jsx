import { useState } from "react"; // Added useState
import { Mail, Phone, MapPin, ChevronDown, ChevronUp } from "lucide-react"; // Added Arrows
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiChip } from "react-icons/hi";
import { useTheme } from "../Context/ThemeContext";
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

function Profile() {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile toggle

  const handleItemClick = (item) => {
    if (item.action === "copy") {
      // Your existing copy logic
      navigator.clipboard.writeText(item.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else if (item.action === "link") {
      // Opens WhatsApp or Maps in a new tab
      window.open(item.link, "_blank", "noopener,noreferrer");
    }
  };

  const contactItems = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "sandeepindugula456@gmail.com",
      action: "copy",
    },
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: "+91 7075103361",
      link: "https://wa.me/917075103361",
      action: "link",
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Hyderabad, India",
      link: "https://www.google.com/maps/search/?api=1&query=Hyderabad,India",
      action: "link",
    },
  ];

  const socialMediaIcons = [
    { id: 0, icon: <FaGithub />, link: "https://github.com/Sandeep-456" },
    {
      id: 1,
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sandeepindugula",
    },
  ];

  return (
    <div className="h-full w-full pt-13 lg:pt-0 transition-transform duration-500">
      <div
        className={`relative flex flex-col justify-between h-fit md:h-full rounded-2xl lg:rounded-4xl px-6 pb-8 pt-4 border transition-all duration-500
        ${
          isDark ?
            "bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-zinc-800 shadow-[15px_15px_35px_rgba(0,0,0,0.8)]"
          : "bg-gradient-to-br from-[#ffffff] to-[#f1f5f9] border-white shadow-[15px_15px_35px_#cbd5e1]"
        }`}
      >
        {/* Toggle Button - Only visible on Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden absolute top-0 right-0 p-2 rounded-bl-3xl rounded-tr-2xl border transition-all active:scale-95
          ${isDark ? "bg-[#222] border-zinc-700 text-blue-400" : "bg-white border-slate-200 text-blue-600 shadow-sm"}`}
        >
          {isOpen ?
            <ChevronUp size={20} />
          : <ChevronDown size={20} className="animate-bounce" />}
        </button>

        <div className="mb-2 flex justify-between">
          <p className="text-[12px] text-blue-500 hidden md:block font-semibold">
            My_Portfolio
          </p>
          <HiChip className="text-md text-gray-400 hidden md:block" />
        </div>

        <div className="flex justify-between lg:flex-col items-center">
          <div
            className={`w-28 h-28 md:w-36 md:h-36 p-1.5 rounded-4xl mb-3 transition-all
            ${isDark ? "bg-[#353535] shadow-[inset_0px_0px_6px_#000]" : "bg-[#f8fafc] shadow-[inset_0px_0px_6px_#cbd5e1]"}`}
          >
            <img
              src="https://res.cloudinary.com/dpvrtbqxt/image/upload/v1771090602/Sandeep/Portfolio/sandeep_kqdyth.jpg"
              alt="Sandeep"
              className="w-full h-full object-cover rounded-4xl"
            />
          </div>
          <div className="flex flex-col  items-center ">
            <h2
              className={`text-xl md:text-lg lg:text-xl xl:text-2xl font-black ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Sandeep <span className="text-blue-600">Indugula</span>
            </h2>

            <div
              className={`mt-4 px-6 py-2 rounded-2xl text-[10px] lg:text-[8px] xl:text-[10px] font-black uppercase tracking-[0.2em]
            ${isDark ? "bg-[#222] text-blue-400 border border-zinc-800" : "bg-white text-blue-600 shadow-md border border-slate-100"}`}
            >
              Full Stack Developer
            </div>
          </div>
        </div>

        {/* Collapsible Section: Hidden on mobile unless isOpen is true, always visible on md+ */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden md:max-h-none md:opacity-100 md:visible
            ${
              isOpen ?
                "max-h-[500px] opacity-100 visible mt-2"
              : "max-h-0 opacity-0 invisible mt-0 md:mt-2"
            }`}
        >
          <hr
            className={`mt-4 border ${isDark ? "border-gray-700" : "border-gray-100"}`}
          />
          {copied && (
            <div
              className={`fixed flex items-center left-70 -translate-x-1/2 z-[200] px-2 py-1 ${isDark ? "bg-[#222]" : "bg-white"} text-xs font-bold rounded-full shadow-lg animate-in fade-in slide-in-from-top-4 duration-300`}
            >
              <p>Copied</p>
              <FaCheck size={12} className="inline-block ml-1 text-green-500" />
            </div>
          )}
          <div className="mt-4 space-y-3">
            {contactItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleItemClick(item)}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all hover:translate-x-1
                ${isDark ? "bg-[#111] border-zinc-800 shadow-[4px_4px_8px_#000]" : "bg-white border-slate-50 shadow-[4px_4px_10px_#e2e8f0]"}`}
              >
                <div className="text-blue-600">{item.icon}</div>
                <div className="overflow-hidden">
                  <p
                    className={`text-[9px] uppercase font-black opacity-30 ${isDark ? "text-white" : "text-black"}`}
                  >
                    {item.label}
                  </p>
                  <p
                    className={`text-xs flex items-center font-bold truncate ${isDark ? "text-zinc-300" : "text-slate-700"}`}
                  >
                    {item.isCopyable && (
                      <FaRegCopy
                        size={8}
                        className={`mt-1 mr-1 ${isDark ? "text-neutral-500" : "text-gray-400"}`}
                      />
                    )}
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <hr
            className={`mt-4 border ${isDark ? "border-gray-700" : "border-gray-100"}`}
          />

          <div className="flex justify-center gap-6 mt-6 md:mt-10">
            {socialMediaIcons.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl text-xl transition-all active:shadow-inner hover:-translate-y-1
                ${isDark ? "bg-[#1a1a1a] border-zinc-800 text-white shadow-[6px_6px_12px_#000]" : "bg-white border-slate-100 text-slate-900 shadow-[6px_6px_12px_#cbd5e1]"}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
