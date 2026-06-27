"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { Code, Server, CircuitBoard, Paintbrush, PaintBucket, Wrench, LockKeyhole, Globe, Download, Sparkles, Smartphone } from "lucide-react";
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
		title: "Frontend & Mobile",
		description: "Next.js, React, React Native, Expo, TypeScript, Tailwind CSS",
		icon: <Code className="w-8 h-8 text-amber-400" />,
		variant: "purple",
	},
	{
		title: "Backend & Infrastructure",
		description: "PostgreSQL, Python, VPS/DevOps, Nginx, REST APIs, Authentication",
		icon: <Server className="w-8 h-8 text-cyan-400" />,
		variant: "blue",
	},
	{
		title: "Web3 & Blockchain",
		description: "Solidity, Ethereum, Smart Contracts, DeFi, NFTs, EVM Chains",
		icon: <CircuitBoard className="w-8 h-8 text-emerald-400" />,
		variant: "emerald",
	},
	{
		title: "AI & Agents",
		description: "Generative AI, AI Agents, NLP, Gemini, OpenCV, Pyth Oracle",
		icon: <Sparkles className="w-8 h-8 text-violet-400" />,
		variant: "purple",
	},
	{
		title: "Design & Creative",
		description: "Figma, Framer, Webflow, Adobe XD, Photoshop, Premiere Pro",
		icon: <PaintBucket className="w-8 h-8 text-rose-400" />,
		variant: "pink",
	},
	{
		title: "Animation & 3D",
		description: "Three.js, GSAP, Framer Motion, CSS Animations",
		icon: <Globe className="w-8 h-8 text-teal-400" />,
		variant: "cyan",
	},
	{
		title: "Dev Tools",
		description: "Git, GitHub, VS Code, Bootstrap, jQuery, Webpack",
		icon: <Wrench className="w-8 h-8 text-yellow-400" />,
		variant: "yellow",
	},
	{
		title: "Security & Hacking",
		description: "Ethical Hacking, Penetration Testing, SQL Injection, XSS, Google Dorking",
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
							Versatile Full Stack Developer, UI/UX Designer, and Web3 Engineer with 3+ years of experience building high-impact web applications, scalable admin platforms, and blockchain-powered systems. Contributed to{" "}
							<a href="https://aiskool.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">AISkool.com</a>{" "}
							by architecting authentication systems and migrating infrastructure to self-hosted PostgreSQL. IT Department Head at{" "}
							<a href="https://techshala.vpt.edu.in" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">Techshala</a>,{" "}
							published mobile app developer (<em>Parsi Calendar</em> on Google Play), and active hackathon competitor with <strong className="text-white">15+ hackathons</strong> and <strong className="text-amber-400">2 first-place wins</strong>.
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
									year: "2026",
									badge: "🥇 1st Place",
									title: "ETH Mumbai 2026 — AI Trading Agent",
									company: "ETH Mumbai Hackathon",
									description:
										"Won first place building a conversational blockchain trading agent. Implemented natural language trade execution, multi-chain swaps, real-time market analytics via Pyth Oracle, and secure private key management.",
								},
								{
									year: "2026",
									badge: "🥇 1st Place",
									title: "Industrial Hackathon 2026",
									company: "Industrial Hackathon",
									description:
										"Won first place at the Industrial Hackathon 2026, delivering an innovative solution that outperformed competing teams across all judging criteria.",
								},
								{
									year: "2025 – Present",
									title: "Full Stack Developer",
									company: "AISkool.com — AI & Robotics EdTech",
									description:
										"Redesigned admin panel, architected a complete authentication system with RBAC, built backend APIs from scratch, and led full database migration from Supabase to self-hosted PostgreSQL on a dedicated VPS with zero data loss. Managed Nginx, SSL, and security hardening.",
								},
								{
									year: "2025 – Present",
									title: "IT Department Head",
									company: "Techshala — Vidyalankar Polytechnic",
									description:
										"Led the college's student IT body. Architected and delivered techshala.vpt.edu.in — a 10-module admin platform covering events management, leaderboards, a freelance module, VAC learning tracks, and role-based access control.",
								},
								{
									year: "September 2025",
									title: "ETHGlobal New Delhi — Participant",
									company: "ETHGlobal Hackathon",
									description:
										"Built an AI-powered blockchain trading assistant for the Ethereum ecosystem. Implemented natural language blockchain operations, multi-chain asset management, and real-time analytics.",
								},
								{
									year: "2025",
									title: "ETHOnline 2025 — Global Payment System",
									company: "ETHOnline Hackathon",
									description:
										"Created a UPI-style blockchain payment platform enabling instant global transfers with low fees using PYUSD on Arbitrum.",
								},
								{
									year: "2025",
									title: "Ethical Hacking Intern",
									company: "Secure Cyber Future",
									description:
										"Trained in offensive security: SQL Injection, XSS, Google Dorking, Brute Force, and Vulnerability Assessment. Conducted structured penetration testing exercises with remediation-focused reporting.",
								},
								{
									year: "November 2024",
									title: "Team Leader — Code Snipers",
									company: "Smart India Hackathon (SIH)",
									description:
										"Led the Code Snipers team to selection for the prestigious Smart India Hackathon 2024, demonstrating technical leadership and innovative problem-solving.",
								},
								{
									year: "2023 – Present",
									title: "Diploma in Information Technology",
									company: "Vidyalankar Polytechnic",
									description:
										"Pursuing a 3-year Diploma in Information Technology with a focus on full stack development, web3, and modern software engineering.",
								},
								{
									year: "2016 – 2023",
									title: "Higher Secondary Certificate (HSC)",
									company: "Sharda Mandir High School",
									description:
										"Completed secondary and higher secondary education, building a strong foundation in mathematics, science, and computer studies.",
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
													<div className="flex items-center gap-2 mb-1 flex-wrap">
														<h4 className="text-lg sm:text-xl font-semibold text-white">
															{experience.title}
														</h4>
														{"badge" in experience && experience.badge && (
															<span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
																{experience.badge}
															</span>
														)}
													</div>
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
