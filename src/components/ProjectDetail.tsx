import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/projectDB";
import ProjectDescription from "@/components/ProjectDescription";
import { buttonVariants } from "@/components/ui/button";
import { projects } from "@/projectDB";

export default function ProjectDetail({ project }: { project: Project }) {
	// Find the index of the current project
	const currentIndex = projects.findIndex((p) => p.id === project.id);

	// Determine if the current project is the first or last
	const isFirstProject = currentIndex === 0;
	const isLastProject = currentIndex === projects.length - 1;

	return (
		<div className="max-w-4xl mx-auto px-4 py-8">
			<div className="text-center mb-2">
				<div className="relative w-full h-96 mb-4">
					<Image
						src={project.previewImage}
						alt={`Preview of ${project.title}`}
						layout="fill"
						objectFit="contain"
						objectPosition="center"
					/>
				</div>
				<h1 className="text-4xl font-bold mb-4">{project.title}</h1>
				<p className="text-lg mb-4">{project.subtitle}</p>
			</div>
			<div className="flex flex-wrap justify-center mb-8">
				{project.techStacks.map((tech, index) => (
					<span
						key={index}
						className="bg-secondary hover:bg-primary hover:text-white text-sm py-1 px-4 rounded-lg m-2"
					>
						{tech}
					</span>
				))}
			</div>
			<div className="flex justify-center gap-4 mb-4">
				<Link
					href={project.github}
					className={buttonVariants({ variant: "default" })}
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</Link>
				<Link
					href={project.demo}
					className={buttonVariants({ variant: "default" })}
					target="_blank"
					rel="noopener noreferrer"
				>
					Demo
				</Link>
			</div>
			<div className="mb-4 text-xl">
				<ProjectDescription projectId={project.id} />
			</div>

			{/* Conditional navigation for previous and next projects */}
			<div className="flex justify-between items-center mt-8">
				{!isFirstProject && (
					<Link
						href={`/project/${projects[currentIndex - 1].id}`}
						className="text-lg font-semibold"
					>
						← Previous Project
					</Link>
				)}

				{!isLastProject && (
					<Link
						href={`/project/${projects[currentIndex + 1].id}`}
						className="text-lg font-semibold"
					>
						Next Project →
					</Link>
				)}
			</div>
		</div>
	);
}
