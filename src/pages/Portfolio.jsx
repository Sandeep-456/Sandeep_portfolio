import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import { projectsData } from "../Data/projects";

function Portfolio() {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="pb-10 pt-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className={`group rounded-2xl border p-4 transition-all duration-500 hover:-translate-y-2
              ${
                isDark ?
                  "bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-zinc-800 shadow-[12px_12px_30px_rgba(0,0,0,0.6)]"
                : "bg-gradient-to-br from-white to-[#f8fafc] border-white shadow-[3px_1px_8px_2px_#f2f2f2]"
              }`}
          >
            <div
              className={`relative h-52 w-full rounded-3xl overflow-hidden mb-6 border transition-all
              ${isDark ? "border-zinc-800 shadow-inner" : "border-slate-100 shadow-md"}`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Conditional Rendering for Links */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-blue-600/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-center gap-4 backdrop-blur-[2px]">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-white/10 rounded-2xl border border-white/20 text-white hover:bg-white/30 transition-all hover:scale-110 active:scale-95"
                    title="View Source"
                  >
                    <FaGithub size={22} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-white/10 rounded-2xl border border-white/20 text-white hover:bg-white/30 transition-all hover:scale-110 active:scale-95"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="p-4 cursor-pointer bg-white/10 rounded-2xl border border-white/20 text-white hover:bg-white/30 transition-all hover:scale-110 active:scale-95"
                  title="Project Details"
                >
                  <FaEye size={22} />
                </button>
              </div>
            </div>

            <div className="px-3 pb-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-500">
                  {project.type}
                </span>
                <div className="flex gap-1">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className={`text-[8px] px-2 py-0.5 rounded-full border ${isDark ? "border-zinc-800 text-zinc-500" : "border-slate-200 text-zinc-400"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3
                className={`text-xl font-bold truncate ${isDark ? "text-zinc-100" : "text-zinc-800"}`}
              >
                {project.title}
              </h3>
              <div
                className={`h-[1px] w-full my-4 ${isDark ? "bg-zinc-800/50" : "bg-slate-100"}`}
              />

              <button
                onClick={() => navigate(`/project/${project.id}`)}
                className={`w-full py-2.5 cursor-pointer rounded-xl text-xs font-bold uppercase tracking-widest transition-all
                ${isDark ? "bg-zinc-900 text-zinc-300 hover:bg-blue-600 hover:text-white" : "bg-slate-50 text-zinc-600 hover:bg-blue-600 hover:text-white"}`}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
