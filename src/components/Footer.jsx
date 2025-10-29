import React from "react";
import { useEffect, useState } from 'react';

export default function Footer({ darkMode }) {
  const [theme, setTheme] = useState(darkMode);

  useEffect(() => {
    setTheme(darkMode);
  }, [darkMode]);


  return (
    <footer className={`py-12 px-8 transition-colors duration-300 ${
          theme
            ? "bg-black"
            : "bg-cyan-500"
        }`}>
      <div className="container mx-auto text-center">
        <p className="text-gray-500 text-sm">© 2025 Kurt Pascua. All rights reserved.</p>
      </div>
    </footer>
  );
}
