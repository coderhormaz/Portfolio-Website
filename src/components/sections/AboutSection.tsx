"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import MobileCenterPixelCard from "@/components/ui/MobileCenterPixelCard";
import { useRevealAnimation, useIntersectionObserver } from "@/lib/animations";
import { Code, Server, CircuitBoard, Paintbrush, PaintBucket, Wrench, LockKeyhole, Globe } from "lucide-react";
import { ShineBorder } from "../magicui/shine-border";




type SkillVariant = "default" | "blue" | "yellow" | "pink" | "purple" | "cyan" | "emerald" | "amber";

interface Skill {
	title: string;
	description: string;
	icon: React.ReactNode;
	variant: SkillVariant;
}

const skills: Skill[] = [
	{
		title: "Frontend Development",
		description: "HTML5, CSS3, JavaScript, React, Vue, Angular",
		icon: <Code className="w-8 h-8 text-purple-400" />,
		variant: "purple",
	},
	{
		title: "Backend & Languages",
		description: "Python, Java, Node.js, Firebase",
		icon: <Server className="w-8 h-8 text-blue-400" />,
		variant: "blue",
	},
	{
		title: "Blockchain & Web3",
		description: "Solidity, Smart Contracts, DApps, Ethereum, Solana",
		icon: <CircuitBoard className="w-8 h-8 text-green-400" />,
		variant: "emerald",
	},
	{
		title: "Frameworks & Libraries",
		description: "Bootstrap, Tailwind CSS, jQuery, Sass",
		icon: <Paintbrush className="w-8 h-8 text-orange-400" />,
		variant: "amber",
	},
	{
		title: "Design & Tools",
		description: "Figma, Framer, Webflow",
		icon: <PaintBucket className="w-8 h-8 text-pink-400" />,
		variant: "pink",
	},
	{
		title: "Development Tools",
		description: "Git, GitHub, VS Code, Webpack, NPM",
		icon: <Wrench className="w-8 h-8 text-yellow-400" />,
		variant: "yellow",
	},
	{
		title: "Web Technologies",
		description: "Ajax, Three.js, GSAP, Framer Motion",
		icon: <Globe className="w-8 h-8 text-teal-400" />,
		variant: "cyan",
	},
	{
		title: "Security & Testing",
		description: "Ethical Hacking, Cybersecurity, Penetration Testing",
		icon: <LockKeyhole className="w-8 h-8 text-red-400" />,
		variant: "default",
	},
];

const AboutSection = () => {
	const titleRef = useRevealAnimation(200);
	const descriptionRef = useRevealAnimation(400);

	return (
		<section className="py-16 sm:py-20 relative w-full overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				{/* Section Header */}
				<div className="text-center mb-12 sm:mb-16">
					<h2
						ref={titleRef as React.RefObject<HTMLHeadingElement>}
						className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
					>
						About Me
					</h2>
					<p
						ref={descriptionRef as React.RefObject<HTMLParagraphElement>}
						className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
					>
						I'm a passionate developer who loves creating immersive digital
						experiences that blend cutting-edge technology with beautiful design.
						My focus is on building performant, accessible, and visually stunning
						web applications.
					</p>
				</div>

				{/* Skills Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-16">
					{skills.map((skill, index) => (
						<MobileCenterPixelCard 
							key={skill.title}
							variant={skill.variant}
							className="h-full min-h-[300px]"
						>
							<div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 p-4 sm:p-6 h-full justify-center">
								<div className="mb-2">{skill.icon}</div>
								<h3 className="text-lg sm:text-xl font-semibold text-white">
									{skill.title}
								</h3>
								<p className="text-white-400 text-sm leading-relaxed">
									{skill.description}
								</p>
							</div>
						</MobileCenterPixelCard>
					))}
				</div>

				{/* Experience Timeline */}
				<div className="mt-16 sm:mt-20">
					<h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
						Experience & Journey
					</h3>

					<div className="max-w-4xl mx-auto">
						
						<div className="space-y-6 sm:space-y-8">
							
							{[
								{
									year: "2024-Present",
									title: "Full-Stack Developer",
									company: "Freelance & Projects",
									description:
										"Building modern web applications with React, Next.js, and advanced animations. Specializing in responsive design and user experience.",
								},
								{
									year: "2023-2024",
									title: "Frontend Developer",
									company: "Digital Projects",
									description:
										"Created interactive websites using HTML5, CSS3, JavaScript, and modern frameworks like React and Vue.js.",
								},
								{
									year: "2022-2023",
									title: "Web Developer & Designer",
									company: "Creative Solutions",
									description:
										"Developed websites with focus on UI/UX design using Figma, Photoshop, and modern web technologies.",
								},
							].map((experience, index) => (
								<Card key={index} className="glass-card border-white/10">
									<CardContent className="p-4 sm:p-6">
										<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
											<div className="sm:w-32 text-purple-400 font-semibold text-sm sm:text-base">
												{experience.year}
											</div>
											<div className="flex-1"> <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
												<h4 className="text-lg sm:text-xl font-semibold text-white mb-1">
													{experience.title}
												</h4>
												<p className="text-purple-300 mb-2 text-sm sm:text-base">
													{experience.company}
												</p>
												<p className="text-gray-400 text-sm sm:text-base leading-relaxed">
													{experience.description}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
