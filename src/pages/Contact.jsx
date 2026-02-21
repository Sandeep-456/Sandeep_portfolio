import { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
// import { Ai } from "../assets/lottiefiles/AiContact.lottie";
import Ai from "../assets/lottiefiles/AiContact.lottie";

import { useTheme } from "../Context/ThemeContext";

function Contact() {
  const { isDark } = useTheme();
  const form = useRef();

  const refinedInputStyle = `
    w-full p-4 rounded-xl outline-none transition-all duration-300 border
    ${
      isDark ?
        "bg-[#0a0a0a] border-zinc-800/50 text-zinc-200 placeholder-zinc-700 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.4)] focus:border-blue-500/40"
      : "bg-[#fcfdfe] border-zinc-200/60 text-zinc-800 placeholder-zinc-400 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.02)] focus:border-blue-500/30"
    }
  `;

  // const inputStyle = `w-full p-4 rounded-[1.5rem] outline-none transition-all duration-300 border
  //   ${
  //     isDark ?
  //       "bg-[#0a0a0a] border-zinc-900 text-white placeholder-zinc-600 shadow-[inset_4px_4px_8px_#000] focus:border-blue-500/50"
  //     : "bg-[#f8fafc] border-slate-200 text-zinc-800 placeholder-zinc-400 shadow-[inset_4px_4px_8px_#cbd5e1] focus:border-blue-500/50"
  //   }`;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zkj7m2o",
        "template_zwh1new",
        form.current,
        "lW9qDD_4y4fLA1I41",
      )
      .then(
        () => alert("Message Sent Successfully!"),
        () => alert("Error, try again."),
      );
  };

  return (
    <div className="flex flex-col gap-8 pt-5 pb-10 max-w-4xl mx-auto">
      {/* 1. Visual Header Section - Replace with Lottie later */}
      <div
        className={`w-full rounded-2xl lg:rounded-4xl p-8 border overflow-hidden flex flex-col md:flex-row items-center gap-8 transition-all
        ${
          isDark ?
            "bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-zinc-800 shadow-[10px_10px_30px_#000]"
          : "bg-gradient-to-br from-white to-[#f8fafc] border-white shadow-[10px_10px_30px_#cbd5e1]"
        }`}
      >
        {/* Placeholder for Image/Lottie */}
        <div
          className={`w-full md:w-1/2 aspect-video rounded-[2rem] overflow-hidden border shadow-inner
          ${isDark ? "border-zinc-800 bg-black/40" : "border-slate-100 bg-blue-50/50"}`}
        >
          {/* <img
            src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Illustration"
            className="w-full h-full object-cover mix-blend-multiply opacity-80"
          /> */}
          <DotLottieReact src={Ai} loop autoplay />
        </div>

        <div className="md:w-1/2 space-y-4">
          <h3
            className={`text-3xl font-black uppercase tracking-tighter ${isDark ? "text-white" : "text-zinc-900"}`}
          >
            Let's Build <br />{" "}
            <span className="text-blue-500">Something Great</span>
          </h3>
          <p
            className={`text-sm leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
          >
            I'm currently available for freelance work or full-time
            opportunities. If you have a project in mind, reach out!
          </p>
        </div>
      </div>

      {/* 2. Contact Form - Solid Plate */}
      <div
        className={`p-5 lg:p-10 rounded-2xl lg:rounded-4xl border transition-all
        ${
          isDark ?
            "bg-[#0d0d0d] border-zinc-900 shadow-[15px_15px_35px_#000]"
          : "bg-white border-white shadow-[8px_8px_35px_#cbd5e1]"
        }`}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 animate-in fade-in duration-500"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label
                className={`text-[9px] font-black uppercase tracking-[0.2em] ml-1 opacity-60 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
              >
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="John Doe"
                required
                className={refinedInputStyle}
              />
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label
                className={`text-[9px] font-black uppercase tracking-[0.2em] ml-1 opacity-60 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
              >
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="john@example.com"
                required
                className={refinedInputStyle}
              />
            </div>
          </div>

          {/* Your Message */}
          <div className="space-y-1.5">
            <label
              className={`text-[9px] font-black uppercase tracking-[0.2em] ml-1 opacity-60 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
            >
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="5"
              required
              className={`${refinedInputStyle} resize-none`}
            />
          </div>

          {/* Refined 3D Button */}
          <button
            type="submit"
            className={`
          w-full py-4 rounded-xl font-bold uppercase tracking-[0.15em] text-[10px]
          flex items-center justify-center gap-2 transition-all duration-500
          ${
            isDark ?
              "bg-blue-600/90 text-white hover:bg-blue-600 shadow-[0_4px_15px_rgba(37,99,235,0.2)] hover:shadow-[0_8px_25px_rgba(37,99,235,0.4)]"
            : "bg-blue-600 text-white hover:bg-blue-700 shadow-[0_4px_12px_rgba(37,99,235,0.15)] hover:shadow-[0_10px_20px_rgba(37,99,235,0.25)]"
          }
          active:scale-[0.98]
        `}
          >
            <Send size={14} strokeWidth={2.5} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
