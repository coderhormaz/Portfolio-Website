"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { Code, Server, CircuitBoard, Paintbrush, PaintBucket, Wrench, LockKeyhole, Globe, Download } from "lucide-react";
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
		description: " React, Next.js, HTML5, CSS3, JavaScript",
		icon: <Code className="w-8 h-8 text-amber-400" />,
		variant: "purple",
	},
	{
		title: "Backend & Languages",
		description: "Node.js, Java, Python, Firebase",
		icon: <Server className="w-8 h-8 text-cyan-400" />,
		variant: "blue",
	},
	{
		title: "Blockchain & Web3",
		description: "Solidity, Smart Contracts, DApps, Ethereum, Solana",
		icon: <CircuitBoard className="w-8 h-8 text-emerald-400" />,
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
		icon: <PaintBucket className="w-8 h-8 text-rose-400" />,
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
		description: "Three.js, GSAP, Framer Motion",
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
	return (
		<section className="py-16 sm:py-20 relative w-full overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				{/* Section Header */}
				<div className="text-center mb-12 sm:mb-16">
					<ScrollReveal>
						<div className="flex items-center gap-3 justify-center mb-4">
							<span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400/60" />
							<span className="text-xs font-medium tracking-[0.2em] uppercase text-amber-400/70">Who I Am</span>
							<span className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400/60" />
						</div>
						<h2
							className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white"
						>
							About Me
						</h2>
					</ScrollReveal>
					<ScrollReveal delay={0.15}>
						<p
							className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed px-4"
						>
							I&apos;m a passionate Information Technology student and aspiring developer currently pursuing my diploma at <a href="https://techshala.vpt.edu.in/developer" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">Vidyalankar Polytechnic</a>. 
							As a cybersecurity intern at Secure Cyber Future and team leader of Code Snipers (selected for Smart India Hackathon 2024), 
							I love creating innovative digital solutions that blend cutting-edge technology with practical applications.
						</p>
					</ScrollReveal>
				</div>

				{/* Skills Grid */}
				<StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-16" staggerDelay={0.06}>
					{skills.map((skill) => (
						<StaggerItem key={skill.title} className="h-full">
							<div className="group h-full rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.05] hover:border-white/[0.12] hover:shadow-[0_8px_32px_rgba(0,0,0,0.16),0_0_40px_rgba(245,158,11,0.03)] transition-all duration-300 p-4 sm:p-5 flex flex-col items-center text-center gap-3 glass-shine">
								<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/[0.06] backdrop-blur-md border border-white/[0.08] flex items-center justify-center group-hover:scale-105 group-hover:bg-white/[0.1] transition-all duration-300">
									{skill.icon}
								</div>
								<h3 className="text-sm sm:text-base font-semibold text-white leading-tight">
									{skill.title}
								</h3>
								<p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
									{skill.description}
								</p>
							</div>
						</StaggerItem>
					))}
				</StaggerContainer>

				{/* Experience Timeline */}
				<div className="mt-16 sm:mt-20" id="experience">
					<ScrollReveal>
						<h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
							Experience & Journey
						</h3>
					</ScrollReveal>

					<div className="max-w-4xl mx-auto">
						
						<div className="space-y-6 sm:space-y-8">
							
							{[
								{
									year: "September 26-28, 2025",
									title: "ETHGlobal New Delhi Participant",
									company: "ETHGlobal Hackathon",
									description:
										"Selected as a participant in ETHGlobal New Delhi, the world's most prestigious Blockchain hackathons. Collaborated with top developers, founders, and ecosystem leaders to design and build innovative decentralized applications, pushing the boundaries of scalability, security, and real-world adoption in the Ethereum ecosystem.",
								},
								{
									year: "August 22-23, 2025",
									title: "BNB Hack Bombay Participant",
									company: "BNB Chain Hackathon",
									description:
										"Selected participant in BNB Hack Bombay, a prestigious Web3 hackathon focused on AI, DeSoc, DeSci, and DePIN technologies. Collaborated with industry leaders to build innovative decentralized solutions on BNB Chain.",
								},
								{
									year: "August 16-17, 2025",
									title: "Avalanche Hackathon Participant",
									company: "Avalanche Mumbai Hackathon",
									description:
										"Selected for the prestigious Avalanche hackathon in Mumbai, working with cutting-edge blockchain technology including Avalanche Interchain Messaging (ICM) and Encrypted EVM Runtime Compiler (EERC). Built innovative Web3 solutions with industry experts.",
								},
								{
									year: "June 2025 - August 2025",
									title: "Cyber Security Intern",
									company: "Secure Cyber Future",
									description:
										"Currently pursuing a 3-month cybersecurity internship, gaining hands-on experience in security protocols, threat analysis, and protection strategies.",
								},
								{
									year: "November 2024",
									title: "Team Leader - Code Snipers",
									company: "Smart India Hackathon (SIH)",
									description:
										"Led the 'Code Snipers' team and successfully got selected for the prestigious Smart India Hackathon 2024, demonstrating leadership and innovative problem-solving skills.",
								},
								{
									year: "July 2023 - Present",
									title: "Diploma in Information Technology",
									company: "Vidyalankar Polytechnic",
									description:
										"Pursuing a 3-year diploma in Information Technology, focusing on modern programming languages, web development, and emerging technologies.",
								},
								{
									year: "2017 - 2023",
									title: "SSC (Secondary School Certificate)",
									company: "Sharda Mandir",
									description:
										"Completed secondary education from Maharashtra State Board with 76% marks, building a strong foundation in academics and technical subjects.",
								},
							].map((experience, index) => (
								<ScrollReveal key={index} delay={index * 0.08} direction={index % 2 === 0 ? "left" : "right"}>
									<Card className="glass-card glass-shine border-white/[0.06] hover:border-white/[0.1] transition-colors duration-500">
										<CardContent className="p-4 sm:p-6">
											<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
												<div className="sm:w-32 text-amber-400 font-semibold text-sm sm:text-base">
													{experience.year}
												</div>
												<div className="flex-1"> <ShineBorder shineColor={["#F59E0B", "#22D3EE", "#F97316"]} />
													<h4 className="text-lg sm:text-xl font-semibold text-white mb-1">
														{experience.title}
													</h4>
													<p className="text-amber-300/70 mb-2 text-sm sm:text-base">
														{experience.company}
													</p>
													<p className="text-slate-400 text-sm sm:text-base leading-relaxed">
														{experience.description}
													</p>
												</div>
											</div>
										</CardContent>
									</Card>
								</ScrollReveal>
							))}
						</div>
					</div>
				</div>

				{/* Professional Experience & Education */}
				<div className="mt-8 sm:mt-12" id="professional-experience">
					<ScrollReveal>
						<div className="max-w-4xl mx-auto">
							<Card className="glass-card glass-shine border-white/[0.06]">
								<CardContent className="p-4 sm:p-6 text-center">
									<div className="mb-4">
										<h4 className="text-xl sm:text-2xl font-semibold text-white mb-3">
											Download My Resume
										</h4>
										<p className="text-slate-400 mb-4 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
											Get a comprehensive overview of my professional experience, education, technical skills, and achievements. 
											My resume includes detailed information about my projects, internships, and academic background.
										</p>
										<a
											href="/Hormaz_Resume.pdf"
											download="Hormaz_Resume.pdf"
											onClick={(e) => {
												e.preventDefault();
												const link = document.createElement('a');
												link.href = '/Hormaz_Resume.pdf';
												link.download = 'Hormaz_Resume.pdf';
												document.body.appendChild(link);
												link.click();
												document.body.removeChild(link);
											}}
											className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(245,158,11,0.15)]"
										>
											<Download className="w-5 h-5 mr-2" />
											Download Resume
										</a>
									</div>
									
									
								</CardContent>
							</Card>
						</div>
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
