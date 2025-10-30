import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import myImg from '../assets/myimg2.jpg';

const About = ({ darkMode }) => {
    const [theme, setTheme] = useState(darkMode);
    const icon = myImg;

  useEffect(() => {
    setTheme(darkMode);
  }, [darkMode]);

    return (
		<section
			id="about"
			className={`min-h-screen flex items-center pt-2.5 px-2 transition-colors duration-300 ${
          theme
            ? "bg-black"
            : "bg-white"
        }`}
		>
    <div className='w-full max-w-7xl pb-6 px-4 mx-auto sm:px-8 mt-24'>
      <motion.blockquote
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`relative grid items-center md:grid-cols-3 rounded-xl ${
          theme
            ? "bg-gray-900 shadow-cyan-500/20"
            : "bg-white shadow-xl"
        }`}
      >
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden object-cover w-full h-full rounded-l-xl md:block"
          style={{ clipPath: "polygon(0 0%, 100% 0%, 75% 100%, 0% 100%)" }}
          src={icon}
          alt="Profile"
        />

        <article className="relative p-6 md:p-8 md:col-span-2">
          <svg
            className={`absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12 md:block ${
              theme ? "text-cyan-600" : "text-gray-900"
            }`}
            width="256"
            height="256"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
              stroke="currentColor"
              strokeWidth="8"
            />
          </svg>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={`text-base sm:leading-relaxed md:text-2xl ${
                theme ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Hi, I'm Kurt. I'm a passionate software developer with a strong focus on web development.
              I specialize in building modern web applications using React, Tailwind CSS, and other technologies.
              My goal is to create beautiful, functional, responsive, and user-friendly interfaces that provide powerful user experiences.
              I'm also interested on creating games and stuff using Renpy and Unity.
            </motion.p>

            <motion.footer
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 md:space-x-0"
            >
              <img
                className="w-12 h-12 rounded-full md:hidden"
                src={icon}
                alt="Profile Mobile"
              />
              <span className={`font-bold text-lg ${
                theme ? "text-white" : "text-gray-800"
              }`}>
                -Kurt Pascua
              </span>
            </motion.footer>
          </div>
        </article>
      </motion.blockquote>
    </div>
</section>
  );
};

export default About;
