import { GitHubCalendar } from "react-github-calendar";
import {
  Code2,
  Globe,
  Database,
  Smartphone,
  Layout as LayoutIcon,
  Zap,
} from "lucide-react";

import { useTheme } from "../Context/ThemeContext";

function About({}) {
  const { isDark } = useTheme();

  const services = [
    {
      title: "Web App Development",
      desc: "Full-scale MERN applications with a focus on scalability and clean architecture.",
      icon: <Globe size={20} />,
      WatermarkIcon: <Globe size={100} />,
      accent: "blue",
    },
    {
      title: "API Integration",
      desc: "Seamlessly connecting third-party services, payment gateways, and custom REST APIs.",
      icon: <Zap size={20} />,
      WatermarkIcon: <Zap size={100} />,
      accent: "cyan",
    },
    {
      title: "Database Management",
      desc: "Optimizing MongoDB schemas and handling data integrity for high-load systems.",
      icon: <Database size={20} />,
      WatermarkIcon: <Database size={100} />,
      accent: "indigo",
    },
    {
      title: "Responsive Design",
      desc: "Mobile-first layouts that ensure a perfect experience across all device sizes.",
      icon: <Smartphone size={20} />,
      WatermarkIcon: <Smartphone size={100} />,
      accent: "emerald",
    },
    {
      title: "Backend Architecture",
      desc: "Building robust server-side logic and secure authentication using Node.js.",
      icon: <Code2 size={20} />,
      WatermarkIcon: <Code2 size={100} />,
      accent: "rose",
    },
    {
      title: "UI/UX Implementation",
      desc: "Turning Figma designs into pixel-perfect React components with smooth animations.",
      icon: <LayoutIcon size={20} />,
      WatermarkIcon: <LayoutIcon size={100} />,
      accent: "violet",
    },
  ];

  return (
    <div className="space-y-12 pb-10">
      {/* 1. Introduction Section */}
      <section className="animate-in fade-in duration-700">
        <p
          className={`leading-relaxed text-base mb-3 font-medium ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
        >
          I’m a{" "}
          <span className="text-blue-500">Junior Full Stack Developer</span> who
          enjoys the puzzle of building complex, reliable web applications. With
          a B.Tech background and a deep love for the MERN stack, I specialize
          in making different technologies talk to each other—whether that's
          integrating AI facial recognition for secure exams or syncing
          real-time payments through Razorpay.
        </p>
        <p
          className={`leading-relaxed mb-3 text-base font-medium ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
        >
          I’m equally passionate about the "how it works" and the "how it
          looks." I’ve moved from building robust backends with Node.js and
          MySQL/MongoDB to designing tactile, modern interfaces using
          Claymorphism and Framer Motion. My goal is always the same: to create
          secure, high-performance tools that are actually a joy for people to
          use.
        </p>
        <p
          className={`leading-relaxed mb-3 text-base font-medium ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
        >
          I thrive in collaborative environments and love turning a difficult
          technical challenge into a seamless user experience.
        </p>
      </section>

      {/* 2. Services Section - 6-Card Grid */}
      <section>
        <h3
          className={`text-lg font-bold tracking-tight mb-8 ${isDark ? "text-white" : "text-zinc-800"}`}
        >
          Services I Provide
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border-3 relative overflow-hidden transition-all duration-300 hover:scale-[1.01] group
      ${
        isDark ?
          "bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-zinc-800 shadow-[8px_8px_20px_rgba(0,0,0,0.5)]"
        : "bg-gradient-to-br from-white to-[#f8fafc] border-slate-100 shadow-[5px_5px_17px_#e2e8f0]"
      }`}
            >
              {/* Background Watermark Icon */}
              <div
                className={`absolute -bottom-4 -right-4 -rotate-30 group-hover:-rotate-12  transition-all duration-500 opacity-[0.1] group-hover:opacity-[0.08] group-hover:scale-110 pointer-events-none
        ${isDark ? "text-white/30" : "text-blue-900/40"}`}
              >
                {service.WatermarkIcon}
              </div>

              {/* Content stays on top */}
              <div className="relative z-10">
                <div
                  className={`p-3 w-fit rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-110
          ${isDark ? "bg-zinc-900 text-blue-400 shadow-inner" : "bg-blue-50 text-blue-600"}`}
                >
                  {service.icon}
                </div>
                <h4
                  className={`text-xl font-bold mb-2 ${isDark ? "text-zinc-100" : "text-zinc-800"}`}
                >
                  {service.title}
                </h4>
                <p
                  className={`text-[15px] leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. GitHub Contributions - Carved Inset Style */}
      <section
        className={`p-8 rounded-[2.5rem] border transition-all
          ${
            isDark ?
              "bg-[#0a0a0a] border-zinc-900 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.8)]"
            : "bg-[#f8fafc] border-slate-200 shadow-[inset_4px_4px_10px_#cbd5e1]"
          }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3
            className={`text-lg font-bold ${isDark ? "text-white" : "text-zinc-800"}`}
          >
            Git Contributions
          </h3>
          <a
            href="https://github.com/Sandeep-456"
            target="_blank"
            className="text-xs font-medium text-blue-500 hover:underline"
          >
            Visit GitHub
          </a>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="min-w-[700px] opacity-80">
            <GitHubCalendar
              username="Sandeep-456"
              colorScheme={isDark ? "dark" : "light"}
              fontSize={12}
              blockSize={11}
              blockMargin={5}
            />
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section>
        <h3
          className={`text-lg font-bold mb-6 ${isDark ? "text-white" : "text-zinc-800"}`}
        >
          What Mentors Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              quote:
                "Sandeep is a dedicated developer with a strong grasp of full-stack integration.",
              author: "Team Lead @ Aspire Next",
            },
            {
              quote:
                "Quick learner who consistently delivers high-quality React components.",
              author: "Senior Dev @ Aspire Next",
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-[1.5rem] border
                ${
                  isDark ?
                    "bg-[#111] border-zinc-800 shadow-[6px_6px_15px_rgba(0,0,0,0.4)]"
                  : "bg-white border-slate-100 shadow-[6px_6px_15px_#e2e8f0]"
                }`}
            >
              <p
                className={`text-sm italic mb-4 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
              >
                "{t.quote}"
              </p>
              <p className="text-[11px] font-bold text-blue-500 uppercase tracking-wider">
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
