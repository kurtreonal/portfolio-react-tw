import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function Hero({ darkMode }) {
  const [theme, setTheme] = useState(darkMode);

  useEffect(() => {
    setTheme(darkMode);
  }, [darkMode]);

  return (
    //hero section
    <ParallaxProvider>
      <section id="hero" className={`min-h-screen flex items-center pt-24 px-8 transition-colors duration-300 ${
          theme
            ? "bg-linear-to-b from-gray-900 to-black"
            : "bg-linear-to-b from-cyan-500 to-white"
        }`}>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Parallax translateY={[-20, 20]} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <br />Welcome! I am<br />
                <span className={`bg-linear-to-r ${
                  theme
                    ? 'from-cyan-400 via-pink-500 to-green-400'
                    : 'from-cyan-400 via-emerald-800 to-purple-800'} bg-clip-text text-transparent bg-size-[300%_300%] animate-[textGradient_8s_linear_infinite]`}>
                  Kurt Pascua.
                </span>
              </h1>
            </motion.div>

            <motion.p
              className={`text-lg max-w-lg ${theme ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              Crafting immersive digital experiences with cutting-edge tech. Focused on performance, design, and seamless functionality.
            </motion.p>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a href="#contact">
              <button className={`px-6 py-3 rounded-lg font-medium transition-all ${
                theme
                  ? 'bg-linear-to-r from-cyan-400 to-pink-500 hover:shadow-lg hover:shadow-cyan-500/30'
                  : 'bg-linear-to-r from-blue-600 to-green-600 text-white hover:shadow-lg hover:shadow-blue-500/30'
                }`}>
                View Projects
              </button>
              </a>
              <a href="#contact">
                <button className={`px-6 py-3 rounded-lg transition-all ${
                  theme
                    ? 'border border-white/20 hover:bg-white/10'
                    : 'border border-gray hover:bg-gray-100 text-gray-900 hover:shadow-lg hover:shadow-gray-300'
                }`}>
                  Contact Me
                </button>
              </a>
            </motion.div>
          </Parallax>

          <Parallax translateY={[20, -20]} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-1 backdrop-blur-md transition-all ${
                theme
                  ? 'border border-white/10 bg-black/20'
                  : 'border border-gray-200 bg-white/50 shadow-xl'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
                alt="Developer Coding"
                className="rounded-xl w-full h-auto"
              />
            </motion.div>
          </Parallax>
        </div>
      </section>
    </ParallaxProvider>
  );
}
