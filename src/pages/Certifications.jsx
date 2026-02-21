import React, { useState } from "react";
import { Award, Eye, X, CheckCircle2 } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";

// Assets Imports
import DataBase from "../assets/certificates/DataBase.png";
import DeveloperFoundations from "../assets/certificates/DeveloperFoundations.png";
import DynamicWebApp from "../assets/certificates/DynamicWebApp.png";
import ItEssentials from "../assets/certificates/ItEssentials.png";
import NodeJs from "../assets/certificates/NodeJs.png";
import PCAP from "../assets/certificates/PCAP.png";
import Python from "../assets/certificates/Python.png";
import PythonSoloLearn from "../assets/certificates/PythonSoloLearn.png";
import ResponsiveFlexBox from "../assets/certificates/ResponsiveFelxBox.png";
import ResponsiveWebApp from "../assets/certificates/ResponsiveWebApp.png";
import StaticWebApp from "../assets/certificates/StaticWebApp.png";

const Certifications = () => {
  const { isDark } = useTheme();
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Static Web App",
      img: StaticWebApp,
      issuer: "NxtWave",
      desc: "Built foundation in web development by mastering HTML structure, CSS layouts, and static site deployment.",
      techs: ["HTML5", "CSS3", "Bootstrap", "GitHub Pages"],
    },
    {
      title: "Responsive Web App",
      img: ResponsiveWebApp,
      issuer: "NxtWave",
      desc: "Focused on creating fluid layouts that work across all screen sizes using advanced CSS techniques.",
      techs: ["Media Queries", "Flexbox", "Responsive UI", "Mobile-First"],
    },
    {
      title: "Python",
      img: Python,
      issuer: "NxtWave",
      desc: "Learned core programming concepts, data structures, and problem-solving logic using Python.",
      techs: ["Python 3", "Logic Building", "Data Structures"],
    },
    {
      title: "Intermediate Python",
      img: PythonSoloLearn,
      issuer: "SoloLearn",
      desc: "Explored advanced Python concepts including decorators, generators, and functional programming.",
      techs: ["Functional Programming", "Decorators", "Exception Handling"],
    },
    {
      title: "Node JS",
      img: NodeJs,
      issuer: "NxtWave",
      desc: "Built scalable server-side applications and integrated REST APIs using the Node.js runtime.",
      techs: ["Node.js", "Express.js", "NPM", "V8 Engine"],
    },
    {
      title: "DataBase",
      img: DataBase,
      issuer: "NxtWave",
      desc: "Mastered SQL queries, database design, and managing relational data for full-stack applications.",
      techs: ["SQL", "SQLite", "DB Design", "Data Modeling"],
    },
    {
      title: "PCAP",
      img: PCAP,
      issuer: "Cisco",
      desc: "Certified associate level proficiency in Python programming as per Cisco Networking Academy standards.",
      techs: ["OOPs", "Modules", "Package Management", "PCAP Exam"],
    },
    {
      title: "IT Essentials",
      img: ItEssentials,
      issuer: "Cisco",
      desc: "Comprehensive understanding of computer hardware, software, and networking fundamentals.",
      techs: ["Hardware", "Networking", "Troubleshooting", "Operating Systems"],
    },
    {
      title: "Developer Foundations",
      img: DeveloperFoundations,
      issuer: "NxtWave",
      desc: "Understood Google's best practices for software development, cloud basics, and version control.",
      techs: ["Cloud Basics", "Dev Best Practices", "Google Cloud"],
    },
    {
      title: "Responsive Web Using Flex",
      img: ResponsiveFlexBox,
      issuer: "NxtWave",
      desc: "Advanced training in CSS Flexbox for complex alignment and modern UI structures.",
      techs: ["Flexbox", "UI Alignment", "Modern CSS"],
    },
    {
      title: "Dynamic Web App",
      img: DynamicWebApp,
      issuer: "NxtWave",
      desc: "Transformed static pages into interactive web applications using JavaScript and API integrations.",
      techs: ["JavaScript", "Fetch API", "DOM Manipulation", "JSON"],
    },
  ];

  return (
    <div className="pb-10 pt-5 relative min-h-screen">
      {/* --- Main Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
        {certificates.map((item, index) => (
          <div
            key={index}
            className={`group relative rounded-3xl p-4 border-3 transition-all duration-500 hover:-translate-y-2
              ${
                isDark ?
                  "bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-zinc-800 shadow-[10px_10px_25px_rgba(0,0,0,0.7)]"
                : "bg-gradient-to-br from-white to-[#f8fafc] border-white shadow-[0px_0px_10px_rgba(0,0,0,0.1)]"
              }`}
          >
            <div
              className={`relative aspect-[4/3] rounded-2xl overflow-hidden border mb-4 transition-all
              ${isDark ? "border-zinc-800 shadow-inner" : "border-slate-100 shadow-md"}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center">
                <div
                  onClick={() => setSelectedCert(item)}
                  className="translate-y-10 cursor-pointer group-hover:translate-y-0 transition-all duration-500 p-3 bg-white/20 rounded-2xl border border-white/30 text-white shadow-2xl hover:scale-110 active:scale-90"
                >
                  <Eye size={24} />
                </div>
              </div>
            </div>

            <div className="px-2">
              <div className="flex items-center gap-2 mb-1">
                <Award size={14} className="text-blue-500" />
                <span
                  className={`text-[10px] font-black uppercase tracking-widest ${isDark ? "text-zinc-500" : "text-zinc-400"}`}
                >
                  {item.issuer}
                </span>
              </div>
              <h3
                className={`text-md font-bold truncate tracking-tight ${isDark ? "text-zinc-100" : "text-zinc-800"}`}
              >
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* --- Popup Modal --- */}
      {selectedCert && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          />

          {/* Modal Container */}
          <div
            className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto md:overflow-hidden rounded-[2.5rem] border flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-300
            ${isDark ? "bg-[#0d0d0d] border-zinc-800" : "bg-white border-white"}`}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className={`absolute cursor-pointer top-6 right-6 z-20 p-2 rounded-full border transition-all hover:rotate-90 active:scale-75
                ${isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-slate-100 border-slate-200 text-zinc-800"}`}
            >
              <X size={20} />
            </button>

            {/* Left: Certificate Preview */}
            <div
              className={`md:w-3/5 p-6 md:p-12 flex items-center justify-center
              ${isDark ? "bg-zinc-900/10" : "bg-slate-50/50"}`}
            >
              <div
                className={`p-2 rounded-3xl  border shadow-2xl hover:-rotate-2 transition-all duration-300 ease-in-out
                ${isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-slate-100"}`}
              >
                <img
                  src={selectedCert.img}
                  alt={selectedCert.title}
                  className="rounded-2xl w-full max-h-[60vh]  object-contain"
                />
              </div>
            </div>

            {/* Right: Info Section */}
            <div
              className={`md:w-2/5 p-8 md:p-12 flex flex-col justify-center border-l
              ${isDark ? "border-zinc-800/50" : "border-slate-100"}`}
            >
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="text-blue-500" size={18} />
                  <span className="text-blue-500 text-xs font-black uppercase tracking-widest">
                    {selectedCert.issuer}
                  </span>
                </div>
                <h2
                  className={`text-3xl font-black tracking-tight leading-tight ${isDark ? "text-white" : "text-zinc-900"}`}
                >
                  {selectedCert.title}
                </h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h4
                    className={`text-[10px] font-black uppercase tracking-[0.2em] mb-3 ${isDark ? "text-zinc-500" : "text-zinc-400"}`}
                  >
                    Brief Description
                  </h4>
                  <p
                    className={`text-sm leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
                  >
                    {selectedCert.desc}
                  </p>
                </div>

                <div>
                  <h4
                    className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${isDark ? "text-zinc-500" : "text-zinc-400"}`}
                  >
                    Technologies Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.techs.map((tech, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold border transition-all
                        ${isDark ? "bg-zinc-900/50 border-zinc-800 text-zinc-300" : "bg-white border-slate-200 text-zinc-700 shadow-sm"}`}
                      >
                        <CheckCircle2 size={12} className="text-blue-500" />
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
