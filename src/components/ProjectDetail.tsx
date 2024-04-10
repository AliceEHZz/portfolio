import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/projectDB";
import ProjectDescription from "@/components/ProjectDescription";
import { buttonVariants } from "@/components/ui/button";

export default function ProjectDetail({ project }: { project: Project }) {
	return (
		<div className="max-w-4xl mx-auto px-4 py-8">
			<div className="text-center mb-2">
				<div className="relative w-full h-96 mb-4">
					<Image
						src={project.previewImage}
						alt={`Preview of ${project.title}`}
						layout="fill"
						objectFit="cover"
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
		</div>
	);
}
