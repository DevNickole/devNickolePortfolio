import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const fadeInUp = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactMe = () => {
	const [formData, setFormData] = useState({
		title: "",
		name: "",
		from_email: "",
		message: "",
	});
	const [isSent, setIsSent] = useState(false);
	const [error, setError] = useState(null);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				formData,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(() => {
				setIsSent(true);
				setFormData({ title: "", name: "", from_email: "", message: "" });
				setTimeout(() => setIsSent(false), 5000);
			})
			.catch((err) => {
				console.error("EmailJS Error:", err);
				setError("Something went wrong. Please try again later.");
			});
	};

	return (
		<div id="contactme" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-white px-4">
			<motion.section
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={fadeInUp}
				className="bg-white w-full max-w-2xl p-8 md:p-12 rounded-3xl shadow-lg"
			>
				<h2 className="text-4xl font-extrabold text-center text-green-700 mb-8">
					Contact Me
				</h2>

				<form onSubmit={handleSubmit} className="space-y-5">
					<input
						type="text"
						name="title"
						required
						placeholder="Subject Title"
						value={formData.title}
						onChange={handleChange}
						className="w-full border border-gray-300 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
					<input
						type="text"
						name="name"
						required
						placeholder="Your Name"
						value={formData.name}
						onChange={handleChange}
						className="w-full border border-gray-300 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
					<input
						type="email"
						name="from_email"
						required
						placeholder="Your Email"
						value={formData.from_email}
						onChange={handleChange}
						className="w-full border border-gray-300 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
					<textarea
						name="message"
						required
						placeholder="Your Message"
						value={formData.message}
						onChange={handleChange}
						className="w-full border border-gray-300 p-4 rounded-lg h-32 resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
					></textarea>

					<button
						type="submit"
						className="w-full py-3 bg-green-600 text-white text-lg font-semibold rounded-lg transition-transform hover:bg-green-700 hover:scale-105"
					>
						Send Message
					</button>

					{isSent && (
						<p className="text-green-600 text-center mt-2">
							Message sent successfully!
						</p>
					)}
					{error && <p className="text-red-600 text-center mt-2">{error}</p>}
				</form>
			</motion.section>
		</div>
	);
};

export default ContactMe;
