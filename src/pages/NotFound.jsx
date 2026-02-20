import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      {/* 3D Icon Container */}
      <div
        className={`relative p-10 rounded-[3rem] border-2 mb-8 transition-all duration-500
        ${
          isDark ?
            "bg-[#121212] border-zinc-800 shadow-[20px_20px_40px_rgba(0,0,0,0.8)]"
          : "bg-[#f8fafc] border-white shadow-[20px_20px_40px_rgba(0,0,0,0.05)]"
        }`}
      >
        <div className="absolute -top-6 -right-6 animate-bounce">
          <div className="p-4 rounded-2xl bg-red-500 text-white shadow-lg">
            <FaExclamationTriangle size={30} />
          </div>
        </div>

        <h1
          className={`text-8xl font-black tracking-tighter mb-2 ${isDark ? "text-white" : "text-zinc-900"}`}
        >
          404
        </h1>
        <p
          className={`text-sm font-bold uppercase tracking-[0.3em] ${isDark ? "text-zinc-500" : "text-zinc-400"}`}
        >
          Page Not Found
        </p>
      </div>

      {/* Message & Action */}
      <div className="max-w-md space-y-6">
        <p
          className={`leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
        >
          Oops! The digital path you're looking for doesn't exist or has been
          moved to a different coordinate.
        </p>

        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-3 mx-auto px-8 py-4 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest text-xs transition-all hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(37,99,235,0.3)]"
        >
          <FaHome size={18} />
          Back to Safety
        </button>
      </div>
    </div>
  );
};

export default NotFound;
