function Card({ children, className = "", isDark }) {
  return (
    <div
      className={`
        rounded-2xl
        lg:rounded-4xl
        transition-all 
        duration-700 

        ${
          isDark ?
            "bg-gradient-to-br from-[#1a1a1a] to-[#050505] border-zinc-800 shadow-[20px_20px_50px_rgba(0,0,0,0.9),-5px_-5px_20px_rgba(255,255,255,0.02)]"
          : "bg-gradient-to-br from-[#ffffff] to-[#f8fafc] border-white shadow-[20px_20px_50px_#cbd5e1,-15px_-15px_30px_#ffffff]"
        } 
        ${className}
      `}
    >
      {/* This inner wrapper ensures the children follow the 3D structure */}
      {children}
    </div>
  );
}

export default Card;
