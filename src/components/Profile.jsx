import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiChip } from "react-icons/hi";
import { useTheme } from "../Context/ThemeContext";

function Profile() {
  const { isDark, handelTheme } = useTheme();
  const contactItems = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "sandeepindugula456@gmail.com",
    },
    { icon: <Phone size={18} />, label: "Phone", value: "+91 7075103361" },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Hyderabad, India",
    },
  ];

  return (
    <div className="h-full w-full transition-transform duration-500">
      <div
        className={` flex flex-col justify-between h-full rounded-4xl px-6 pb-8 pt-4 border transition-all duration-500
        ${
          isDark ?
            "bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-zinc-800 shadow-[15px_15px_35px_rgba(0,0,0,0.8),-5px_-5px_15px_rgba(255,255,255,0.02)]"
          : "bg-gradient-to-br from-[#ffffff] to-[#f1f5f9] border-white shadow-[15px_15px_35px_#cbd5e1,-10px_-10px_20px_#ffffff]"
        }`}
      >
        <div className="mb-2 flex justify-between">
          <p className="text-[12px] text-blue-500 font-semibold">
            My_Portfolio
          </p>
          <HiChip className="text-md text-gray-400" />
        </div>
        <div className="flex flex-col items-center">
          {/* Isometric Image Socket */}
          <div
            className={`w-36 h-36 p-1.5 rounded-4xl mb-3 transition-all
            ${isDark ? "bg-[#353535] shadow-[inset_0px_0px_6px_#000]" : "bg-[#f8fafc] shadow-[inset_0px_0px_6px_#cbd5e1]"}`}
          >
            <img
              src="https://res.cloudinary.com/dpvrtbqxt/image/upload/v1771090602/Sandeep/Portfolio/sandeep_kqdyth.jpg"
              alt="Sandeep"
              className="w-full h-full object-cover rounded-4xl"
            />
          </div>

          <h2
            className={`text-2xl font-black ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Sandeep <span className="text-blue-600">Indugula</span>
          </h2>

          <div
            className={`mt-4 px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em]
            ${isDark ? "bg-[#222] text-blue-400 border border-zinc-800" : "bg-white text-blue-600 shadow-md border border-slate-100"}`}
          >
            Full Stack Developer
          </div>
        </div>

        <hr
          className={`mt-4 border ${isDark ? " border-gray-700" : "border-gray-100"}`}
        />
        {/* 3D Contact Tiles */}
        <div className="mt-4 space-y-3">
          {contactItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-4 p-4 rounded-2xl border transition-all hover:translate-x-1
              ${
                isDark ?
                  "bg-[#111] border-zinc-800 shadow-[4px_4px_8px_#000]"
                : "bg-white border-slate-50 shadow-[4px_4px_10px_#e2e8f0]"
              }`}
            >
              <div className="text-blue-600">{item.icon}</div>
              <div className="overflow-hidden">
                <p
                  className={`text-[9px] uppercase font-black opacity-30 ${isDark ? "text-white" : "text-black"}`}
                >
                  {item.label}
                </p>
                <p
                  className={`text-xs font-bold truncate ${isDark ? "text-zinc-300" : "text-slate-700"}`}
                >
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <hr
          className={`mt-4 border ${isDark ? " border-gray-700" : "border-gray-100"}`}
        />
        {/* Social Buttons with depth */}
        <div className="flex justify-center gap-6 mt-10">
          {[<FaGithub />, <FaLinkedin />].map((icon, i) => (
            <a
              key={i}
              href="#"
              className={`p-3 rounded-xl text-xl transition-all active:shadow-inner hover:-translate-y-1
              ${
                isDark ?
                  "bg-[#1a1a1a] border-zinc-800 text-white shadow-[6px_6px_12px_#000]"
                : "bg-white border-slate-100 text-slate-900 shadow-[6px_6px_12px_#cbd5e1]"
              }`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
