import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import profile from "/profile.jpg";

import bnsProjectPicture from "/bnsProjectPicture.png";
import taAralProjectPicture from "/taAralProjectPicture.png";
import todoApp from "/todoApp.png";
import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaNodeJs,
	FaGitAlt,
	FaGithub,
	FaDatabase,
	FaPython,
	FaPhp,
	FaJava,
	FaReacteurope,
	FaJava as FaJavaIcon,
	FaCode,
	FaFigma,
} from "react-icons/fa";

import {
	SiNextdotjs,
	SiTailwindcss,
	SiFirebase,
	SiMongodb,
	SiDjango,
} from "react-icons/si";
import { FiCopy } from "react-icons/fi";
import { PiRobotBold } from "react-icons/pi";
import { DiVisualstudio } from "react-icons/di";
import ContactMe from "./ContactMe";
const projects = [
	{
		title: "BNS Assist",
		stack: ["Next.js", "MongoDB", "React", "Firebase", "Tailwind CSS"],
		description:
			"A barangay healthcare management system with multi-portal support for admins, health workers, and citizens.",
		fullDescription:
			"BNS Assist is a comprehensive healthcare platform designed to streamline barangay-level health operations. The system features dedicated portals for administrators, healthcare workers (BNS), and residents. It handles patient records, nutrition tracking, vaccine logs, child and maternal health monitoring, and real-time reporting. Built with Next.js for performance and Firebase for authentication and real-time data syncing, this project empowers local communities with accessible health tech.",
		image: bnsProjectPicture,
		repo: "",
		live: "https://bns-assist.vercel.app/",
		isRepoPrivate: true,
	},

	{
		title: "Ta-Aral Tutoring",
		stack: ["Django", "PostgreSQL", "Firebase", "Tailwind CSS"],
		description:
			"Peer tutoring platform for students to book, review, and earn token rewards for participation.",
		fullDescription:
			"Ta-Aral is a learning support platform that connects students with peer tutors in real time. It allows learners to book sessions, rate tutors, and earn token-based incentives that can be redeemed for extra resources or perks. The backend is powered by Django with PostgreSQL for relational data handling, while Firebase is used for authentication and real-time notifications. It’s designed to promote collaborative learning and academic engagement.",
		image: taAralProjectPicture,
		repo: "https://ta-aral.example.com",
		live: "https://ta-aral-m5rg.vercel.app",
		isRepoPrivate: true,
	},

	{
		title: "Simple Todo App",
		stack: ["Next.js", "Typescript", "Firebase", "Tailwind CSS"],
		description:
			"A next js todo web application using firebase with realtime changes.",
		fullDescription:
			"This Simple Todo App is built using Next.js, Firebase, and Tailwind CSS. It features a clean and responsive UI where users can add, edit, delete, and mark tasks as completed. Firebase Realtime Database ensures instant syncing of todos across sessions and devices. It supports authentication, enabling personal task management per user. The app is ideal for individuals who need a lightweight and efficient way to manage daily tasks, with modern frontend performance and real-time backend integration.",
		image: todoApp,
		repo: "https://ta-aral.example.com",
		live: "https://todoapp-d5ch.vercel.app/",
		isRepoPrivate: true,
	},
];

const skills = [
	// Web Basics
	{ name: "HTML", icon: <FaHtml5 className="text-orange-600 text-2xl" /> },
	{ name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-2xl" /> },
	{ name: "JavaScript", icon: <FaJs className="text-yellow-500 text-2xl" /> },

	// Frontend Frameworks
	{ name: "React", icon: <FaReact className="text-cyan-400 text-2xl" /> },
	{ name: "Next.js", icon: <SiNextdotjs className="text-gray-800 text-2xl" /> },
	{
		name: "React Native",
		icon: <FaReacteurope className="text-blue-400 text-2xl" />,
	},

	// Styling
	{
		name: "Tailwind CSS",
		icon: <SiTailwindcss className="text-sky-400 text-2xl" />,
	},

	// Backend & Databases
	{ name: "Node.js", icon: <FaNodeJs className="text-green-600 text-2xl" /> },
	{
		name: "Firebase",
		icon: <SiFirebase className="text-yellow-400 text-2xl" />,
	},
	{ name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl" /> },
	{
		name: "PostgreSQL",
		icon: <FaDatabase className="text-blue-800 text-2xl" />,
	},
	{ name: "Django", icon: <SiDjango className="text-green-900 text-2xl" /> },

	// Programming Languages
	{ name: "Python", icon: <FaPython className="text-yellow-500 text-2xl" /> },
	{ name: "PHP", icon: <FaPhp className="text-indigo-500 text-2xl" /> },
	{ name: "C#", icon: <FaCode className="text-purple-600 text-2xl" /> },
	{ name: "Java", icon: <FaJavaIcon className="text-red-600 text-2xl" /> },
];

const toolsAndPlatforms = [
	{ name: "Git", icon: <FaGitAlt className="text-orange-500 text-2xl" /> },
	{ name: "GitHub", icon: <FaGithub className="text-black text-2xl" /> },
	{
		name: "VS Code",
		icon: <DiVisualstudio className="text-blue-600 text-2xl" />,
	},
	{ name: "Figma", icon: <FaFigma className="text-pink-500 text-2xl" /> },
	{
		name: "ChatGPT",
		icon: <PiRobotBold className="text-green-600 text-2xl" />,
	},
];

const itemVariants = {
	hidden: { opacity: 0, y: 20, scale: 0.9 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			delay: i * 0.08,
			type: "spring",
			stiffness: 100,
			damping: 12,
		},
	}),
};

export default function App() {
	const [copied, setCopied] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);
	const email = "imdavenickole@gmail.com"; // Replace with your email

	const handleCopy = () => {
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000); // reset after 2s
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="relative min-h-screen w-full overflow-x-hidden bg-white font-sans"
		>
			{!selectedProject ? (
				<>
					<div className="relative z-10 text-black">
						<header className="flex justify-between items-center px-6 md:px-16 py-4 sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-200">
							{/* Logo */}
							<motion.h1
								initial={{ x: -40, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.6 }}
								className="text-2xl font-extrabold tracking-wide flex items-center gap-1 text-gray-800"
							>
								<motion.span
									animate={{ y: [0, -2, 0] }}
									transition={{
										repeat: Infinity,
										duration: 2,
										ease: "easeInOut",
									}}
								>
									DN
								</motion.span>
								<span className="text-green-500 text-3xl">.</span>
							</motion.h1>

							{/* Navigation */}
							<nav className="hidden md:flex gap-10 text-gray-700 font-semibold tracking-wide">
								{["home", "projects", "about"].map((item) => (
									<motion.a
										key={item}
										href={`#${item}`}
										whileHover={{ scale: 1.05 }}
										className="relative hover:text-green-500 transition"
									>
										{item.charAt(0).toUpperCase() + item.slice(1)}
										<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
									</motion.a>
								))}
							</nav>

							{/* Contact Button */}
							<motion.a
								href="#contactme"
								whileHover={{
									scale: 1.1,
									boxShadow: "0 0 12px rgba(34, 197, 94, 0.5)",
								}}
								transition={{ type: "spring", stiffness: 200, damping: 10 }}
								className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-md inline-flex items-center justify-center"
								aria-label="Contact Me"
							>
								<MessageCircle className="w-5 h-5" />
							</motion.a>
						</header>

						<main className="">
							<section
								id="home"
								className="relative flex flex-col items-center justify-center text-center px-6 py-24 min-h-[90vh] overflow-hidden bg-white font-sans"
							>
								{/* Hero Text Content */}
								<motion.div
									initial={{ opacity: 0, y: 40 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8 }}
									className="z-10 max-w-3xl"
								>
									<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
										Building <span className="text-green-600">scalable</span>{" "}
										and
										<br />
										<span className="italic text-gray-600">
											user-focused
										</span>{" "}
										web solutions
									</h1>

									<p className="mt-6 text-gray-700 text-lg">
										I'm <strong className="text-gray-900">Dave</strong>, a web
										developer based in the Philippines. I specialize in crafting
										clean, and maintainable applications that solve real-world
										problems.
									</p>

									<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
										<motion.a
											href="#contactme"
											whileHover={{ scale: 1.05 }}
											className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-700 transition inline-block"
										>
											Contact Me
										</motion.a>
										<div
											className="flex items-center gap-2 text-green-500 cursor-pointer hover:text-green-300 transition"
											onClick={handleCopy}
										>
											<FiCopy className="text-lg" />
											<span className="font-medium">{email}</span>
											{copied && (
												<span className="ml-2 text-green-400 text-sm">
													Copied!
												</span>
											)}
										</div>
									</div>
								</motion.div>

								{/* Scroll Down Indicator */}
								<div className="absolute bottom-6 z-10 flex flex-col items-center gap-4 w-full">
									{[18, 14, 10].map((size, idx) => (
										<motion.div
											key={idx}
											animate={{ y: [0, 6, 0] }}
											transition={{
												repeat: Infinity,
												duration: 1.5,
												delay: idx * 0.2,
											}}
											style={{ width: `${size}px`, height: `${size}px` }}
											className="border-b-4 border-r-4 border-green-600 rotate-45"
										/>
									))}
								</div>
							</section>

							{/* Projects */}
							<section
								id="projects"
								className="py-20 px-6 md:px-16 bg-white text-gray-800"
							>
								<div className="max-w-7xl mx-auto space-y-16">
									{/* Section Title */}
									<div className="flex items-center gap-2">
										<h2 className="text-4xl md:text-5xl font-extrabold">
											Selected Works
										</h2>
										<span className="text-green-500 text-5xl font-bold">.</span>
									</div>

									{/* Projects */}
									{projects.map((project, idx) => (
										<motion.div
											key={idx}
											initial={{ opacity: 0, scale: 0.95, y: 60 }}
											whileInView={{ opacity: 1, scale: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.6,
												delay: idx * 0.3,
												ease: "easeOut",
											}}
											className={`relative group flex flex-col md:flex-row gap-12 items-center ${
												idx % 2 === 1 ? "md:flex-row-reverse" : ""
											}`}
										>
											{/* Project Text */}
											<motion.div
												initial={{ x: idx % 2 === 0 ? -80 : 80, opacity: 0 }}
												whileInView={{ x: 0, opacity: 1 }}
												transition={{ duration: 0.6, delay: 0.2 + idx * 0.3 }}
												className="flex-1 space-y-6 bg-gray-50 border border-gray-200 p-8 rounded-xl shadow-md"
											>
												<h3 className="text-2xl md:text-3xl font-bold text-green-600">
													{project.title}
												</h3>

												{/* Tech Stack */}
												<div className="flex flex-wrap gap-2">
													{project.stack.map((tech, i) => (
														<motion.span
															key={i}
															initial={{ opacity: 0, y: 10 }}
															whileInView={{ opacity: 1, y: 0 }}
															transition={{ delay: i * 0.1 }}
															className="text-xs bg-green-600 text-white px-3 py-1 rounded-full shadow hover:scale-105 transition duration-300"
														>
															{tech}
														</motion.span>
													))}
												</div>

												<p className="text-gray-600 text-base leading-relaxed max-w-xl">
													{project.description}
												</p>
											</motion.div>

											{/* Project Image */}
											<motion.div
												onClick={() => setSelectedProject(project)}
												whileHover={{ scale: 1.05, rotate: 1 }}
												transition={{ type: "spring", stiffness: 120 }}
												className="flex-1 w-full overflow-hidden rounded-xl shadow-lg border border-green-500"
											>
												<img
													src={project.image}
													alt={project.title}
													className="w-full h-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-105"
												/>
											</motion.div>
										</motion.div>
									))}
								</div>
							</section>

							{/* Skills */}
							<section id="skills" className="py-16 bg-white px-16">
								<div className="flex items-center gap-2 mb-6">
									<h2 className="text-4xl font-extrabold text-center w-full">
										⚡ Tech Arsenal
									</h2>
								</div>

								{/* Languages & Frameworks */}
								<div className="mb-10">
									<h3 className="text-2xl font-bold text-green-600 mb-4">
										Languages & Frameworks
									</h3>
									<motion.div
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true }}
										className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center px-4"
									>
										{skills.map((skill, i) => (
											<motion.div
												key={i}
												custom={i}
												variants={itemVariants}
												whileHover={{
													scale: 1.1,
													rotate: [0, 1.5, -1.5, 0],
													boxShadow: "0 0 15px #22c55e",
												}}
												className="relative bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-green-500 shadow-xl hover:shadow-green-300 transition-all duration-300 group"
											>
												<div className="flex flex-col items-center gap-3">
													{skill.icon}
													<p className="text-lg font-semibold text-gray-800 group-hover:text-green-600">
														{skill.name}
													</p>
												</div>
												<div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-300" />
											</motion.div>
										))}
									</motion.div>
								</div>

								{/* Tools & Platforms */}
								<div>
									<h3 className="text-2xl font-bold text-green-600 mb-4">
										Tools & Platforms
									</h3>

									<motion.div
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true }}
										className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center px-4"
									>
										{toolsAndPlatforms.map((tool, i) => (
											<motion.div
												key={i}
												custom={i}
												variants={itemVariants}
												whileHover={{
													scale: 1.1,
													rotate: [0, 1.5, -1.5, 0],
													boxShadow: "0 0 15px #22c55e",
												}}
												className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-green-500 shadow-md hover:shadow-green-300 transition-all duration-300 group"
											>
												<div className="flex flex-col items-center gap-3">
													{tool.icon}
													<p className="text-lg font-semibold text-gray-800 group-hover:text-green-600">
														{tool.name}
													</p>
												</div>
												<div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-300" />
											</motion.div>
										))}
									</motion.div>
								</div>
							</section>

							<section
								id="about"
								className="relative min-h-screen w-full px-8 py-24 bg-gradient-to-b from-white to-gray-100 text-gray-800 overflow-hidden"
							>
								{/* Floating Background Accent */}
								<div className="absolute -top-20 -left-20 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-30 -z-10 animate-pulse" />
								<div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-200 rounded-full filter blur-2xl opacity-20 -z-10 animate-ping" />

								<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
									{/* Profile with Shadow and Motion */}
									<motion.div
										initial={{ opacity: 0, x: -60 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 1 }}
										className="flex justify-center"
									>
										<div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-[5px] border-green-600 shadow-2xl transform hover:scale-105 transition duration-500">
											<motion.img
												src={profile}
												alt="Dave - Profile"
												animate={{ y: [0, -10, 0] }}
												transition={{ repeat: Infinity, duration: 3 }}
												className="w-full h-full object-cover"
											/>
										</div>
									</motion.div>

									{/* Text with Typing-Like Reveal */}
									<motion.div
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true }}
										transition={{ staggerChildren: 0.3 }}
										className="text-center md:text-left space-y-6"
									>
										<motion.h2
											variants={{
												hidden: { opacity: 0, y: 20 },
												visible: { opacity: 1, y: 0 },
											}}
											className="text-4xl md:text-5xl font-extrabold text-green-600"
										>
											About Me
										</motion.h2>

										<motion.p
											variants={{
												hidden: { opacity: 0, y: 20 },
												visible: { opacity: 1, y: 0 },
											}}
											className="text-lg md:text-xl text-gray-700 leading-relaxed"
										>
											Hi, I’m <span className="font-semibold">Dave</span> — a
											full stack developer from the Philippines with a passion
											for building digital experiences that are clean,
											functional, and delightful to use.
										</motion.p>

										<motion.p
											variants={{
												hidden: { opacity: 0, y: 20 },
												visible: { opacity: 1, y: 0 },
											}}
											className="text-lg md:text-xl text-gray-700 leading-relaxed"
										>
											My approach to development is disciplined and
											detail-oriented. I value clean code, consistent workflows,
											and continuous improvement. Whether working independently
											or in a team, I’m committed to delivering reliable
											solutions that meet real-world requirements.
										</motion.p>
										<motion.div
											variants={{
												hidden: { opacity: 0, y: 20 },
												visible: { opacity: 1, y: 0 },
											}}
											className="mt-6 flex justify-center md:justify-start gap-6"
										>
											<a
												href="https://www.linkedin.com/in/dave-nickole-de-mesa-972683352"
												target="_blank"
												rel="noopener noreferrer"
												className="text-gray-700 hover:text-green-600 transition text-2xl"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													className="w-6 h-6"
													viewBox="0 0 24 24"
												>
													<path d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.2 2.3-2.4 4.7-2.4 5 0 5.9 3.3 5.9 7.6V24h-5V15.4c0-2.1-.1-4.8-2.9-4.8-2.9 0-3.3 2.3-3.3 4.6V24h-5V8z" />
												</svg>
											</a>

											<a
												href="https://github.com/DevNickole"
												target="_blank"
												rel="noopener noreferrer"
												className="text-gray-700 hover:text-green-600 transition text-2xl"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													className="w-6 h-6"
													viewBox="0 0 24 24"
												>
													<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.6-1.5-1.4-1.9-1.4-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.2 1.4 4 .9.1-.9.5-1.4.8-1.8-2.5-.3-5.1-1.3-5.1-5.9 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.8-.4s1.9.1 2.8.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.6-2.6 5.6-5.1 5.9.5.5.9 1.3.9 2.6v3.8c0 .3.2.7.8.6C20.7 21.4 24 17.1 24 12 24 5.65 18.35.5 12 .5z" />
												</svg>
											</a>
										</motion.div>
									</motion.div>
								</div>
							</section>
							<ContactMe />
						</main>

						<footer className="bg-gray-100 text-black py-10">
							<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
								{/* Left: Branding */}
								<div className="text-center md:text-left">
									<p className="text-xl font-semibold text-green-400">
										DevNickole
									</p>
									<p className="text-sm text-gray-400 mt-1">
										Crafting clean & scalable web solutions.
									</p>
								</div>

								{/* Center: Navigation */}
								<div className="flex gap-6 text-sm">
									<a
										href="#projects"
										className="hover:text-green-400 transition duration-300"
									>
										Projects
									</a>
									<a
										href="#about"
										className="hover:text-green-400 transition duration-300"
									>
										About
									</a>
									<a
										href="#contact"
										className="hover:text-green-400 transition duration-300"
									>
										Contact
									</a>
								</div>

								{/* Right: Copyright */}
								<div className="text-center md:text-right text-xs text-gray-500">
									© 2025{" "}
									<span className="text-green-400 font-semibold">
										DevNickole
									</span>
									. All rights reserved.
								</div>
							</div>
						</footer>
					</div>
				</>
			) : (
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="h-[100vh] overflow-x-auto space-y-10 p-8 bg-gray-50 rounded-xl shadow-lg border border-gray-200"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-green-600">
						{selectedProject.title}
					</h2>

					<img
						src={selectedProject.image}
						alt={selectedProject.title}
						className="w-full h-fit object-cover rounded-lg shadow"
					/>

					<p className="text-gray-700 text-lg leading-relaxed">
						{selectedProject.fullDescription || selectedProject.description}
					</p>

					{/* Tech Stack */}
					<div className="flex flex-wrap gap-2">
						{selectedProject.stack.map((tech, i) => (
							<span
								key={i}
								className="text-sm bg-green-600 text-white px-3 py-1 rounded-full shadow"
							>
								{tech}
							</span>
						))}
					</div>

					{/* Links Section */}
					<div className="flex gap-4 pt-4">
						{selectedProject.repo && !selectedProject.isRepoPrivate && (
							<a
								href={selectedProject.repo}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-800 transition"
							>
								🔗 View Repository
							</a>
						)}

						{selectedProject.isRepoPrivate && (
							<div className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-300 px-4 py-2 rounded-md bg-gray-100">
								🔒 Private Repository — access available upon request
							</div>
						)}
						{selectedProject.live && (
							<a
								href={selectedProject.live}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-800 transition"
							>
								🌐 Visit Live Site
							</a>
						)}
					</div>

					<div className="pt-6">
						<button
							onClick={() => setSelectedProject(null)}
							className="text-green-600 border border-green-600 px-5 py-2 rounded-full font-semibold hover:bg-green-600 hover:text-white transition"
						>
							← Back to Projects
						</button>
					</div>
				</motion.div>
			)}
		</motion.div>
	);
}
