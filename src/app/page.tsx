import { projects, type Project } from "@/projectDB";
import { ProjectCard } from "@/components/ProjectCard";
import ContactSection from "@/components/ContactMe";

export default function Home() {
	return (
		<main className="flex flex-col justify-center text-center space-y-16">
			<div className="p-40 flex flex-col justify-center space-y-4 bg-secondary">
				<div>
					<h1 className="text-7xl text-primary font-bold">
						hi, I&apos;m Alice Lin
					</h1>
				</div>
				<div className="text-3xl text-gray-600">
					<p>Full Stack Developer</p>
				</div>
			</div>
			{/*  */}
			<section id="projects" className="my-80 text-center">
				<h1 className="text-3xl text-primary font-bold mb-10">
					Project Experience
				</h1>
				<div className="flex flex-wrap justify-center">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</section>
			<ContactSection />
		</main>
	);
}
