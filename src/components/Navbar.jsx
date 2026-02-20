const Navbar = ({ isDark, activeTab, setActiveTab }) => {
  const tabs = ["About", "Portfolio", "Resume", "Certifications", "Contact"];
  return (
    <nav
      className={`flex rounded-t-4xl items-center justify-between  rounded-clay ${isDark ? "bg-[#1e1e1e]" : "bg-white"}`}
    >
      <div>
        <p
          className={`ml-8 text-2xl font-bold ${isDark ? "text-white" : "text-black"} `}
        >
          Portfolio
        </p>
        <div className="ml-8 mt-1 rounded-2xl h-2 w-[50%] bg-blue-600"></div>
      </div>

      <div
        className={`p-4 flex-wrap gap-4 flex border-b-8 border-l-8 ${isDark ? "border-[#1a1a1a]" : "border-white"} rounded-bl-4xl`}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all
            ${isDark ? `${activeTab === tab.toLowerCase() ? "text-blue-400 shadow-inner scale-105" : "opacity-60 text-white hover:opacity-100"} bg-[#2a2a2a] hover:bg-[#333]` : "bg-[#f0f0f0] text-black hover:bg-white"}
            
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
