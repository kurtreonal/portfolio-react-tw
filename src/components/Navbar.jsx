
export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10 py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 via-pink-500 to-green-400 bg-clip-text text-transparent animate-[textGradient_6s_linear_infinite]">
          PORTFOLIO<span className="text-white"></span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646A9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
