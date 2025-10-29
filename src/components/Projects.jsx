import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import echarting from "../assets/echarting.jpg";
import hummsart from "../assets/hummsArtMuseum.jpg";
import quesys from "../assets/quesys.jpg";
import gym from "../assets/gymmanagement.jpg";
import sInfo from "../assets/studentinfo.jpg";

const projects = [
	{
		title: "E-Charting Platform",
		desc: "E-charting web application for medical professionals to create, manage, and share patient charts digitally.",
		tags: ["HTML5", "CSS", "PHP", "MySQL"],
		img: echarting,
		color: "text-cyan-400",
    lightColor: "text-blue-600",
    href: "https://github.com/kurtreonal/E-Charting.git",
	},
	{
		title: "Humms Art Museum",
		desc: "Art museum website showcasing collections, exhibitions, and events with an interactive user experience.",
		tags: ["Java", "MySQL"],
		img: hummsart,
		color: "text-pink-500",
    lightColor: "text-purple-600",
    href: "https://github.com/kurtreonal/Humss-Arts-Museum.git",
	},
	{
		title: "Queuing System",
		desc: "A queuing system web application to manage students flow and reduce wait times in service.",
		tags: ["HTML5", "CSS", "PHP", "MySQL"],
		img: quesys,
		color: "text-green-400",
    lightColor: "text-emerald-600",
    href: "https://github.com/kurtreonal/Queueing-System.git"
  },
  	{
		title: "Gym Management System",
		desc: "A comprehensive gym management system to handle memberships, scheduling, and payments efficiently.",
		tags: ["HTML5", "CSS", "PHP", "MySQL"],
		img: gym,
		color: "text-cyan-400",
      lightColor: "text-blue-600",
    href: "https://github.com/kurtreonal/gym_management.git"
	},
	{
		title: "Student Information System",
		desc: "A student information system to manage student records, grades, and schedule for educational institutions.",
		tags: ["HTML5", "CSS", "PHP", "MySQL"],
		img: sInfo,
		color: "text-pink-500",
    lightColor: "text-purple-600",
    href: "https://github.com/kurtreonal/Student_Information_Management_System.git",
	},
];

export default function Projects({ darkMode }) {
	const [theme, setTheme] = useState(darkMode);

	useEffect(() => {
		setTheme(darkMode);
	}, [darkMode]);

	const getCardVariants = (index) => {
		const directions = {
			0: { x: -100 },
			1: { opacity: 0, scale: 0.5 },
			2: { x: 100 },
		};

		const transitions = {
			0: {
				type: "spring",
				bounce: 0.4,
				duration: 1.2,
				delay: index * 0.2,
			},
			1: {
				duration: 0.8,
				delay: index * 0.2,
				ease: [0, 0.71, 0.2, 1.01],
			},
			2: {
				type: "spring",
				bounce: 0.4,
				duration: 1.2,
				delay: index * 0.2,
			},
		};

		return {
			hidden: {
				opacity: directions[index % 3].opacity || 0,
				...(directions[index % 3]),
			},
			visible: {
				opacity: 1,
				x: 0,
				scale: 1,
				transition: transitions[index % 3],
			},
		};
	};

	return (
		<section
			id="projects"
			className={`min-h-screen flex items-center pt-2.5 px-2 transition-colors duration-300 ${
          theme
            ? "bg-black"
            : "bg-white"
        }`}
		>
			<div className="container mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-4xl font-bold mb-12"
				>
					<span
						className={`bg-linear-to-r ${
							theme
								? "from-cyan-400 via-pink-500 to-green-400"
								: "from-blue-600 via-purple-600 to-emerald-600"
						} bg-clip-text text-transparent bg-size-[300%_300%] animate-[textGradient_8s_linear_infinite]`}
					>
						Featured
					</span>{" "}
					<span className={theme ? "text-white" : "text-gray-800"}>Projects</span>
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((p, i) => (
						<motion.div
							key={i}
							variants={getCardVariants(i)}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							whileHover={{ scale: 1.05 }}
							className={`rounded-xl overflow-hidden ${
								theme
									? "backdrop-blur-md border border-white/10 hover:shadow-lg hover:shadow-cyan-400/20"
									: "bg-white border border-gray-200 hover:shadow-lg hover:shadow-blue-500/30"
							} transition-all`}
						>
							<motion.img
								initial={{ scale: 1.2 }}
								whileInView={{ scale: 1 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true }}
								src={p.img}
								alt={p.title}
								className="w-full h-48 object-cover"
							/>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								viewport={{ once: true }}
								className="p-6"
							>
								<h3 className={`text-xl font-bold mb-2 ${
										theme ? "opacity-80" : "text-gray-800"
									}`}
								>{p.title}</h3>
								<p
									className={`mb-4 ${
										theme ? "opacity-80" : "text-black"
									}`}
								>
									{p.desc}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{p.tags.map((tag) => (
										<motion.span
											key={tag}
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											whileHover={{ scale: 1.1 }}
											className={`px-3 py-1 rounded-full text-sm ${
												theme ? "bg-white/10" : "bg-gray-800"
											}`}
										>
											{tag}
										</motion.span>
									))}
								</div>
								<motion.a
									whileHover={{ x: 10 }}
									href={p.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
									className={`${theme ? p.color : p.lightColor} hover:underline`}
								>
									View Project →
								</motion.a>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
