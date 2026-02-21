import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";
import { projectsData } from "../Data/projects";
import { IoIosArrowBack } from "react-icons/io";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark, handelTheme } = useTheme();
  const [currentImg, setCurrentImg] = useState(0);

  const project = projectsData.find((p) => p.id === id);

  const nextImg = useCallback(() => {
    if (!project) return;
    setCurrentImg((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  }, [project]);

  const prevImg = useCallback(() => {
    if (!project) return;
    setCurrentImg((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const timer = setInterval(nextImg, 5000);
    return () => clearInterval(timer);
  }, [nextImg, project]);

  if (!project) return null;

  return (
    <div
      className={`min-h-screen py-16 md:py-10 px-4 md:px-10 lg:px-20 animate-in fade-in duration-500 transition-colors duration-700
        ${isDark ? "bg-[radial-gradient(circle_at_top_left,_#1a1a1a_0%,_#000000_100%)]" : "bg-[linear-gradient(135deg,_#f8fafc_0%,_#e2e8f0_100%)]"}`}
    >
      {/* Fixed Theme Toggle for Mobile/Desktop */}
      <div className="fixed top-4 right-4 z-[100]">
        <button
          onClick={handelTheme}
          className={`p-2.5 rounded-full text-xl cursor-pointer transition-all duration-300 active:scale-90 border
                  ${
                    isDark ?
                      "bg-[#1a1a1a] border-zinc-800 text-yellow-400 shadow-[4px_4px_10px_#000]"
                    : "bg-white border-zinc-200 text-zinc-800 shadow-[5px_5px_15px_#cbd5e1]"
                  }`}
        >
          {isDark ?
            <MdOutlineDarkMode />
          : <MdOutlineLightMode />}
        </button>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Master Card */}
        <div
          className={`relative rounded-3xl md:rounded-4xl py-6 md:py-10 border transition-all duration-500 overflow-hidden
          ${
            isDark ?
              "bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-zinc-800 shadow-2xl"
            : "bg-gradient-to-br from-white to-[#f8fafc] border-white shadow-xl"
          }`}
        >
          {/* Back Button - Positioned better for mobile */}
          <button
            onClick={() => navigate("/portfolio")}
            className={`flex items-center absolute cursor-pointer top-4 left-4 md:top-6 md:left-8 gap-2 text-[11px] md:text-[13px] font-black uppercase tracking-[0.2em] transition-all z-50
            ${isDark ? "text-zinc-200 hover:text-blue-400" : "text-zinc-400 hover:text-blue-600"}`}
          >
            <IoIosArrowBack size={18} />{" "}
            <span className="hidden sm:inline">Back to Projects</span>
            <span className="sm:hidden">Back</span>
          </button>

          {/* Carousel Section: Responsive Widths */}
          <div className="w-full flex justify-center px-4 mt-8 md:mt-4">
            <div
              className={`relative rounded-xl md:rounded-2xl border-2 md:border-6 ${isDark ? "border-neutral-800" : "border-neutral-100"} 
              w-full md:w-[85%] lg:w-[75%] aspect-video group overflow-hidden`}
            >
              <div
                className="flex transition-transform duration-1000 ease-in-out h-full"
                style={{ transform: `translateX(-${currentImg * 100}%)` }}
              >
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover flex-shrink-0"
                  />
                ))}
              </div>

              {/* Navigation Arrows: Hidden on very small touch screens, visible on hover for others */}
              <button
                onClick={prevImg}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-4 rounded-xl bg-black/40 backdrop-blur-md text-white opacity-0 md:group-hover:opacity-100 transition-all hover:bg-blue-600"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-4 rounded-xl bg-black/40 backdrop-blur-md text-white opacity-0 md:group-hover:opacity-100 transition-all hover:bg-blue-600"
              >
                <FaChevronRight size={14} />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
                {project.images.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 md:h-1.5 transition-all rounded-full ${currentImg === i ? "w-6 md:w-8 bg-blue-500" : "w-1.5 md:w-2 bg-white/40"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Info Area: Padding adjusted for mobile */}
          <div className="p-5 md:p-12 space-y-8 md:space-y-12">
            {/* Header: Title & Links */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6">
              <div className="space-y-2 md:space-y-3 w-full">
                <h1
                  className={`text-2xl md:text-5xl font-black tracking-tighter leading-tight ${isDark ? "text-white" : "text-zinc-900"}`}
                >
                  {project.title}
                </h1>
                <p className="text-blue-500 text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.25em]">
                  {project.type}{" "}
                  <span className="mx-1 md:mx-2 opacity-20">|</span>{" "}
                  {project.category}
                </p>
              </div>

              <div className="flex gap-2 md:gap-3 w-full md:w-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 md:flex-none flex justify-center p-3 md:p-4 rounded-xl md:rounded-2xl border transition-all active:scale-95
                    ${isDark ? "bg-[#111] border-zinc-800 text-white" : "bg-white border-slate-200 text-zinc-800 shadow-sm"}`}
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 md:flex-none flex justify-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all active:scale-95"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
            </div>

            <hr
              className={`border-t ${isDark ? "border-zinc-800" : "border-zinc-200"}`}
            />

            {/* Content Body */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h4
                  className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest ${isDark ? "text-zinc-600" : "text-zinc-400"}`}
                >
                  Project Overview
                </h4>
                <p
                  className={`text-sm md:text-lg leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
                >
                  {project.description}
                </p>
              </div>

              {/* Technologies Grid */}
              <div className="space-y-4 md:space-y-6">
                <h4
                  className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest ${isDark ? "text-zinc-600" : "text-zinc-400"}`}
                >
                  Technical Stack
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {project.techs.map((tech, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl border transition-all
                      ${isDark ? "bg-black/20 border-zinc-800/50 text-zinc-300" : "bg-white border-slate-100 text-zinc-700 shadow-sm"}`}
                    >
                      <span className="text-xl md:text-2xl opacity-90">
                        {tech.icon}
                      </span>
                      <span className="text-[9px] md:text-[11px] font-bold tracking-tight uppercase">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
