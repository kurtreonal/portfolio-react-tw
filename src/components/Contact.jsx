import { useEffect, useState } from "react";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import gmail from "../assets/gmail.svg";
import discord from "../assets/discord.svg";
import linkedin from "../assets/linkedin.svg";

const contact = [
  { name: "Facebook", type: "Kurt Pascua", icon: facebook, href: "https://www.facebook.com/kortnazuc"},
  { name: "Github", type: "@kurtreonal", icon: github, href: "https://github.com/kurtreonal"},
  { name: "Gmail", type: "@kurtreonal26", icon: gmail, href: "https://accounts.google.com/b/0/AddMailService"},
  { name: "Discord", type: "setsuna_yuki26", icon: discord, href: "https://discord.com/users/583321890873933906"},
  { name: "LinkedIn", type: "Kurt Pascua", icon: linkedin, href: "https://www.linkedin.com/in/kurt-pascua-2b4b25221/"}
];

export default function Contact({ darkMode }) {
  const [theme, setTheme] = useState(darkMode);

  useEffect(() => {
    setTheme(darkMode);
  }, [darkMode]);

  return (
    <section
      id="contact"
      className={`py-20 px-8 transition-colors duration-300 ${
        theme
          ? "bg-linear-to-b from-black to-gray-900"
          : "bg-linear-to-b from-white to-cyan-500 text-gray-800"
      }`}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          <span
            className={`bg-linear-to-r ${
              theme
                ? "from-cyan-400 via-pink-500 to-green-400"
                : "from-blue-600 via-purple-600 to-emerald-600"
            } bg-clip-text text-transparent bg-size-[300%_300%] animate-[textGradient_8s_linear_infinite]`}
          >
            Contact
          </span>{" "}
          <span className={theme ? "text-white" : "text-gray-800"}>Me</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {contact.map((s) => (
            <div
              key={s.name}
              className={`rounded-xl p-6 text-center backdrop-blur-lg border transition-all hover:scale-105 ${
                theme
                  ? "bg-white/5 border-white/10 text-white"
                  : "bg-white border-gray-200 text-gray-800 shadow-lg"
              }`}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${
                  theme ? "bg-white/10" : "bg-gray-100"
                }`}
              >
                <a href={s.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer">
                <img
                  src={s.icon}
                  alt={s.name}
                  className="w-10 h-10"
                /></a>
              </div>
              <h3 className="font-bold">{s.name}</h3>
              <p
                className={`text-sm ${
                  theme ? "opacity-70" : "text-gray-600"
                }`}

              >
                {s.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
