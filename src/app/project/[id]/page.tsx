import ProjectDetail from "@/components/ProjectDetail";
import { projects, type Project } from "@/projectDB";
import { notFound } from "next/navigation";

export default function Project({ params }: { params: { id: string } }) {

	const project = projects.find((project) => project.id === params.id);
	if (!project) {
		console.log("project not found");
		notFound();
	}

	return (
		<div className="flex flex-col divide-y mt-20">
			<ProjectDetail project={project} />
		</div>
	);
}
