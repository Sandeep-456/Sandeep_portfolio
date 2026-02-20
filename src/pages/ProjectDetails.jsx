import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
} from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";
import { projectsData } from "../Data/projects";
import { IoIosArrowBack } from "react-icons/io";
import { IoBackspace } from "react-icons/io5";

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
      className={`py-5 px-17 h-screen animate-in fade-in duration-500 ${isDark ? "bg-[radial-gradient(circle_at_top_left,_#1a1a1a_0%,_#000000_100%)]" : "bg-[linear-gradient(135deg,_#f8fafc_0%,_#e2e8f0_100%)]"}`}
    >
      <div className="absolute top-6 right-4 z-[100]">
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
      <div className="w-full h-full overflow-auto no-scrollbar rounded-4xl mx-auto space-y-6">
        {/* Master Card */}
        <div
          className={`relative rounded-4xl py-10 border transition-all duration-500 overflow-hidden
          ${
            isDark ?
              "bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-zinc-800 shadow-[10px_10px_25px_rgba(0,0,0,0.7)]"
            : "bg-gradient-to-br from-white to-[#f8fafc] border-white shadow-[0px_10px_30px_rgba(203,213,225,0.5)]"
          }`}
        >
          {/* Back Button */}
          <button
            onClick={() => navigate("/portfolio")}
            className={`flex items-center absolute cursor-pointer top-5 left-5 gap-2 text-[13px] font-black uppercase tracking-[0.2em] transition-all ml-2
            ${isDark ? "text-zinc-200 hover:text-blue-400" : "text-zinc-400 hover:text-blue-600"}`}
          >
            <IoIosArrowBack size={20} /> Back
          </button>
          {/* Top: Carousel */}
          <div className="w-full flex justify-center">
            <div
              className={`relative rounded-2xl border-6 ${isDark ? "border-neutral-800" : "border-neutral-100"} w-[70%] h-110 group aspect-video overflow-hidden border-inherit`}
            >
              <div
                className="flex transition-transform duration-1000 cubic-bezier(0.23, 1, 0.32, 1) h-full"
                style={{ transform: `translateX(-${currentImg * 100}%)` }}
              >
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Project View"
                    className="w-full h-full object-cover flex-shrink-0"
                  />
                ))}
              </div>

              <button
                onClick={prevImg}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-black/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-600"
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-black/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-600"
              >
                <FaChevronRight size={16} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 transition-all rounded-full ${currentImg === i ? "w-8 bg-blue-500" : "w-2 bg-white/40"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom: Info Area */}
          <div className="p-8 md:p-12 space-y-12">
            {/* Header: Title & Links */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="space-y-3">
                <h1
                  className={`text-4xl md:text-5xl font-black tracking-tighter leading-none ${isDark ? "text-white" : "text-zinc-900"}`}
                >
                  {project.title}
                </h1>
                <p className="text-blue-500 text-[11px] font-black uppercase tracking-[0.25em]">
                  {project.type} <span className="mx-2 opacity-20">|</span>{" "}
                  {project.category}
                </p>
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-4 rounded-2xl border transition-all hover:scale-110 active:scale-95
                    ${isDark ? "bg-[#111] border-zinc-800 text-white" : "bg-white border-slate-100 text-zinc-800 shadow-sm"}`}
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all hover:scale-110 active:scale-95"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
            </div>

            <hr
              className={`border p-0 mt-0 ${isDark ? "border-zinc-600" : "border-zinc-200"}`}
            />

            {/* Content Body */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h4
                  className={`text-[10px] font-black uppercase tracking-widest ${isDark ? "text-zinc-600" : "text-zinc-400"}`}
                >
                  Project Overview
                </h4>
                <p
                  className={`text-base md:text-lg leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
                >
                  {project.description}
                </p>
              </div>

              {/* Technologies with Icons */}
              <div className="space-y-6 pt-4">
                <h4
                  className={`text-[10px] font-black uppercase tracking-widest ${isDark ? "text-zinc-600" : "text-zinc-400"}`}
                >
                  Technical Stack
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {project.techs.map((tech, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all hover:scale-[1.02]
                      ${isDark ? "bg-black/40 border-zinc-800/50 text-zinc-300" : "bg-white border-slate-100 text-zinc-700 shadow-sm"}`}
                    >
                      <span className="text-2xl opacity-90">{tech.icon}</span>
                      <span className="text-[11px] font-bold tracking-tight uppercase">
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
