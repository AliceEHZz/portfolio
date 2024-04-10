import { projects, type Project } from "@/projectDB";
import Link from "next/link";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "./ui/card";
import Image from "next/image";
import { buttonVariants } from "./ui/button";

const TechStackBadge: React.FC<{ tech: string }> = ({ tech }) => (
	<span className="inline-block bg-gray-50 rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2 border border-primary">
		{tech}
	</span>
);

export function ProjectCard({ project }: { project: Project }) {
	const projectUrlPath = `/project/${project.id}`;
	return (
		<Card className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 m-4 flex flex-col border-primary">
			<CardHeader>
				<div className="relative w-full h-56 overflow-hidden rounded-lg">
					<Image
						src={project.previewImage}
						alt={`Preview of ${project.title}`}
						layout="fill"
						objectFit="contain" // Adjust objectFit to "contain"
						objectPosition="center" // Optional: Adjusts the position of the image within the container
					/>
				</div>
			</CardHeader>
			<div className="flex-grow">
				<CardContent className="pb-0 pl-2">
					<CardTitle className="text-gray-600">{project.title}</CardTitle>
					<CardDescription className="mt-2 text-gray-600">
						{project.subtitle}
					</CardDescription>

					<div className="flex flex-wrap justify-start items-center p-4">
						{project.techStacks.map((tech, index) => (
							<TechStackBadge key={index} tech={tech} />
						))}
					</div>
				</CardContent>
			</div>
			<CardFooter>
				<div className="flex justify-center">
					<Link
						href={projectUrlPath}
						passHref
						className={buttonVariants({ variant: "default" })}
					>
						View More
					</Link>
				</div>
			</CardFooter>
		</Card>
	);
}
