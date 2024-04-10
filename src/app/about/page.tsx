import { Button } from "@/components/ui/button";
import Image from "next/image";
import { skills } from "@/projectDB";
export default function About() {
	return (
		<div className="mt-20 flex flex-col items-center space-y-10 px-4 md:px-10 lg:px-20">
			<h1 className="text-3xl text-primary font-bold">Alice Lin</h1>
			<h2>A Great Vancouver Full Stack Web Developer </h2>
			<div className="space-y-6 max-w-3xl">
				<p className="text-lg text-gray-600">
					I&apos;m an energetic and inquisitive former investment banking
					analyst turned aspiring Full Stack Web Developer. My six years in the
					fast-paced world of finance sharpened my eye for detail and fostered a
					strong sense of teamwork. It was during countless hours of online
					research that I developed a fascination for web design, functionality
					and noticed how some sites stood out from the rest. This sparked a
					career pivot towards web development, driven by a desire to blend
					creativity with technology.
				</p>
				<p className="text-lg text-gray-600">
					Completing my studies at BCIT in Full Stack Web Development in 2024, I
					deepened my expertise in a broad range of technologies and programming
					concepts, including but not limited to Next.js, TypeScript, C#, OOP,
					Express.js, Node.js, ASP.NET, PHP, OpenAI GPT models, and Python.
				</p>
				<p className="text-lg text-gray-600">
					My mission? To develop web apps that address real-world pain points,
					offering solutions that are not only useful and accessible to users
					but also harness the power of the latest technologies. My goal is to
					build applications that aren&apos;t just functional but are crafted to
					improve the public&apos;s digital experience to make everyday tasks
					simpler and more enjoyable.
				</p>
				<p className="text-lg text-gray-600">
					As I continue to explore the ever-evolving landscape of web
					technologies, I am excited about the prospect of contributing to
					meaningful projects. I&apos;m eager to collaborate with like-minded
					individuals and teams who are passionate about making an impact
					through innovation.
				</p>
				<p className="text-lg text-gray-600">
					I aim to leverage my unique blend of analytical expertise from banking
					and my newfound passion for tech to create digital solutions that
					truly make a difference. If you&apos;re on a mission to create web
					experiences that genuinely benefit users and society, let&apos;s
					connect. Together, we can build something remarkable.
				</p>
			</div>
			<div className="mt-10 flex flex-col mx-10 space-y-4">
				<div className="justify-center text-center">
					<h2 className="text-3xl font-semibold text-gray-800">Skills</h2>
				</div>
				<div className="flex flex-wrap justify-center gap-10">
					{skills.map((skillCategory, index) => (
						<div key={index} className="flex-1 min-w-[240px]">
							<h3 className="text-2xl text-primary font-bold mb-2">
								{skillCategory.category}
							</h3>
							<ul className="list-disc space-y-2 text-lg text-gray-600 pl-10">
								{skillCategory.skills.map((skill, skillIndex) => (
									<li key={skillIndex}>{skill}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			{/* <Button>
				<a href="/resume.pdf" download="resume.pdf">
					View Resume
				</a>
			</Button> */}
		</div>
	);
}
