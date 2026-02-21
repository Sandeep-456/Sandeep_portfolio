import { MdSchool, MdWork, MdCode } from "react-icons/md";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiPython,
  SiMysql,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";
import { TbFileDownload } from "react-icons/tb";

function Resume() {
  const { isDark } = useTheme();

  const education = [
    {
      title: "Computer Science Engineering",
      institution: "Dr. Paulraj Engineering College",
      location: "Yatapaka, EG, AP",
      period: "2022 — 2025",
    },
    {
      title: "Electrical & Electronics Engineering",
      institution: "Smt. B. Seetha Polytechnic College",
      location: "Bhimavaram, WG, AP",
      period: "2019 — 2022",
    },
    {
      title: "High School",
      institution: "Sun Shine School",
      location: "Palakollu, WG, AP",
      period: "2019",
    },
  ];

  const experience = [
    {
      title: "Full Stack Developer ",
      company: "Aspire Next",
      location: "Hyderabad, Kondapur",
      period: "Jan 2025 — Feb 2026",
      desc: "Developing high-performance user interfaces and collaborating on MERN stack projects with a focus on seamless UX.",
    },
  ];

  const skills = [
    {
      name: "JavaScript",
      level: 90,
      icon: <SiJavascript className="text-yellow-500" />,
    },
    { name: "Python", level: 80, icon: <SiPython className="text-blue-500" /> },
    {
      name: "React.js",
      level: 92,
      icon: <SiReact className="text-cyan-400" />,
    },
    {
      name: "Tailwind CSS",
      level: 95,
      icon: <SiTailwindcss className="text-sky-400" />,
    },
    {
      name: "Node.js",
      level: 85,
      icon: <SiNodedotjs className="text-green-500" />,
    },
    {
      name: "Express.js",
      level: 85,
      icon: (
        <SiExpress className={isDark ? "text-zinc-400" : "text-zinc-600"} />
      ),
    },
    {
      name: "BootStrap",
      level: 99,
      icon: <FaBootstrap className="text-indigo-600" />,
    },
    { name: "HTML5", level: 98, icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", level: 95, icon: <SiCss3 className="text-blue-500" /> },
    { name: "PHP", level: 70, icon: <SiPhp className="text-indigo-400" /> },
    { name: "SQL", level: 82, icon: <SiMysql className="text-blue-600" /> },
    {
      name: "MongoDB",
      level: 80,
      icon: <SiMongodb className="text-emerald-500" />,
    },
  ];

  return (
    <div className=" mx-auto pb-20 pt-5 px-4 space-y-16">
      {/* 1. EDUCATION WITH SIDE TIMELINE */}
      <div className="space-y-12">
        <section>
          <div className="flex  justify-between">
            <div className="flex items-center gap-3 mb-10">
              <MdSchool className="text-blue-500 text-3xl" />
              <h2
                className={`text-2xl font-black uppercase tracking-widest ${isDark ? "text-white" : "text-zinc-900"}`}
              >
                Education
              </h2>
            </div>
            <div>
              <a
                href="https://drive.google.com/uc?export=download&id=1GuXkxWCoBwucbSBz4K9qJuuX02juoLNb"
                download="Sandeep_Indugula_Resume.pdf"
                className="inline-flex items-center text-[8px] md:text-[13px] gap-2 cursor-pointer text-blue-600 hover:text-blue-700 font-semibold transition-all active:scale-95"
              >
                <TbFileDownload className="text-[12px] md:text-[17px]" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
          <div className="relative border-l-4 border-blue-500/20 ml-4 space-y-10">
            {education.map((item, i) => (
              <div key={i} className="relative pl-10 group">
                <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-transform group-hover:scale-125" />
                <div
                  className={`px-6 py-4 rounded-2xl border-2 transition-all flex justify-between items-start
                  ${isDark ? "bg-[#0f172a] border-zinc-800" : "bg-white border-zinc-100 shadow-sm"}`}
                >
                  <div className="space-y-2">
                    <h4
                      className={`text-lg font-bold mt-1 ${isDark ? "text-white" : "text-zinc-800"}`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`text-md font-medium ${isDark ? "text-zinc-300" : "text-neutral-500"}`}
                    >
                      {item.institution}
                    </p>
                    <p
                      className={`text-xs font-medium ${isDark ? "text-zinc-400" : "text-zinc-400"}`}
                    >
                      {item.location}
                    </p>
                  </div>
                  <div>
                    <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest">
                      {item.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/*2.Experience */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <MdWork className="text-blue-500 text-3xl" />
            <h2
              className={`text-2xl font-black uppercase tracking-widest ${isDark ? "text-white" : "text-zinc-900"}`}
            >
              Experience
            </h2>
          </div>

          <div className="relative border-l-4 border-blue-500/20 ml-4">
            <div className="relative pl-10 group">
              <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <div
                className={`p-8 rounded-3xl border-2 transition-all 
                ${isDark ? "bg-[#0f172a] border-zinc-800" : "bg-white border-zinc-100 shadow-sm"}`}
              >
                <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest">
                  {experience[0].period}
                </span>
                <h3
                  className={`text-2xl font-black mt-2 ${isDark ? "text-white" : "text-zinc-900"}`}
                >
                  {experience[0].title}
                </h3>
                <p className="text-sm font-bold text-zinc-500 mb-4">
                  {experience[0].company} • {experience[0].location}
                </p>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
                >
                  {experience[0].desc}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 3. SKILLS - SINGLE COLUMN WITH PERCENTAGE BARS */}
      <section>
        <div className="flex items-center gap-3 mb-10">
          <MdCode className="text-blue-500 text-3xl" />
          <h2
            className={`text-2xl font-black uppercase tracking-widest ${isDark ? "text-white" : "text-zinc-900"}`}
          >
            Technical Stack
          </h2>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2
        ${
          isDark ?
            "bg-[#111] border-zinc-800 shadow-[8px_8px_16px_rgba(0,0,0,0.5)] hover:border-blue-500/50"
          : "bg-white border-zinc-300 shadow-[8px_8px_20px_#e2e8f0] hover:border-blue-400"
        }`}
            >
              {/* Animated Background Glow (Dark Mode only) */}
              {isDark && (
                <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}

              {/* Logo Container */}
              <div
                className={`text-4xl mb-3 transition-transform duration-300 group-hover:scale-110`}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <span
                className={`text-[10px] font-black uppercase tracking-widest text-center ${
                  isDark ?
                    "text-zinc-400 group-hover:text-white"
                  : "text-zinc-600 group-hover:text-zinc-900"
                }`}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resume;
