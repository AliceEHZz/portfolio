import Image from "next/image";
import Link from "next/link";
const PicTokDes = () => {
	return (
		<>
			<div className="space-y-6 text-justify">
				<h2 className="text-2xl font-bold text-center">Introduction</h2>
				<p>
					PicTok emerges as a pioneering solution designed to redefine the way
					visually impaired individuals engage with digital visual content. In a
					world where social interactions and connections increasingly rely on
					visual media, PicTok&rsquo;s mission is to ensure that no one is left
					on the sidelines. This project embarked on a journey to transform
					static images into rich auditory narratives, leveraging the latest
					advancements in artificial intelligence and cloud computing.
				</p>

				<h2 className="text-2xl font-bold text-center">
					Problem Identification
				</h2>
				<p>
					Individuals with visual impairments often find themselves excluded
					from the visual narrative that dominates social media and digital
					communication. The inability to see photos shared by friends and
					family on social platforms creates a barrier to full participation in
					social life. This gap not only affects their ability to engage with
					content but also limits their opportunities for social interactions,
					leading to a sense of isolation.
				</p>

				<h2 className="text-2xl font-bold text-center">
					The Development Journey
				</h2>
				<p>
					The initial vision for PicTok was straightforward: convert images into
					sounds that convey the essence of the visual content to visually
					impaired users. However, as the project evolved, it became clear that
					the true value lay not just in enabling access to visual content but
					in fostering community and interaction among users. This shift in
					focus led to a richer, more interactive app design that encourages
					sharing, commenting, and connecting over shared experiences.
				</p>
				<p>
					The choice of the tech stack was crucial in realizing this vision.
					Technologies like Typescript, React, and Tailwind CSS were selected
					for their ability to create a responsive and accessible user
					interface, while Figma facilitated collaborative design. On the
					backend, Supabase and AWS provided the necessary infrastructure for
					data management and global accessibility. The incorporation of
					AudioGen from Meta and GPT-4-Vision-Preview from OpenAI was
					instrumental in transforming images into immersive auditory
					experiences.
				</p>

				<h2 className="text-2xl font-bold text-center">
					Enhancements and Outcomes
				</h2>
				<p>
					One of the significant enhancements during development was the
					optimization of processing speed through AWS edge functions. By
					leveraging these capabilities along with JavaScript&rsquo;s
					Promise.all, the team significantly reduced the processing time for
					converting images to audio descriptions from over a minute to less
					than 16 seconds. This improvement not only enhanced user satisfaction
					but also contributed to the app&rsquo;s overall accessibility and
					usability.
				</p>

				<h2 className="text-2xl font-bold text-center">
					Reflections and Learnings
				</h2>
				<p>
					The journey of developing PicTok highlighted the paramount importance
					of user experience, especially in applications designed for
					individuals with disabilities. The feedback on loading speeds and
					processing times underscored the need for not just functional but also
					fast and efficient service delivery. The project team learned valuable
					lessons in optimizing application performance and the importance of
					continuous user feedback in guiding development priorities.
				</p>

				<h2 className="text-2xl font-bold text-center">Conclusion</h2>
				<p>
					PicTok stands as a testament to the power of technology to bridge gaps
					and create inclusive spaces for everyone, regardless of physical
					limitations. By turning visual content into auditory experiences, the
					app opens up a new world of social interaction for the visually
					impaired. The development journey, with its focus on community
					building and technical optimization, demonstrates a commitment to not
					just solving a problem but enhancing the social fabric of the digital
					age.
				</p>
			</div>
		</>
	);
};
const receiptRadarDes = () => {
	return (
		<>
			<div className="space-y-6 text-justify">
				<h2 className="text-2xl font-bold text-center">Introduction</h2>
				<p>Project TWO</p>

				<h2 className="text-2xl font-bold text-center">
					Problem Identification
				</h2>
				<p>xx</p>

				<h2 className="text-2xl font-bold text-center">
					The Development Journey
				</h2>
				<p>xx</p>
				<p>xx</p>

				<h2 className="text-2xl font-bold text-center">
					Enhancements and Outcomes
				</h2>
				{/* Consider adding a before-and-after image comparison here */}
				<p>xx</p>

				<h2 className="text-2xl font-bold text-center">
					Reflections and Learnings
				</h2>
				<p>xx</p>
				<p>xx</p>

				<h2 className="text-2xl font-bold text-center">Conclusion</h2>
				<p>xx</p>
			</div>
			;
		</>
	);
};
const businessWebsiteRedesignDes = () => {
	return (
		<div className="space-y-6 text-justify">
			<h2 className="text-2xl font-bold text-center">Introduction</h2>
			<p>
				Embarking on the journey to redesign the website for BWI Business World
				Inc., a Vancouver-based wholesale supplier with a rich 23-year history,
				was not just a project; it was a challenge I eagerly accepted. My goal
				was to rejuvenate BWI&rsquo;s online presence, transforming it into a
				beacon of user-friendliness and modern design principles.
			</p>

			<h2 className="text-2xl font-bold text-center">Problem Identification</h2>
			<p>
				From my first interaction with BWI&rsquo;s original website, it was
				clear that despite the company&rsquo;s impressive credentials, the
				site&rsquo;s user experience was lacking. Navigational issues in the
				menu bars, overlaid texts and images, and outdated aesthetics not only
				hampered usability but can often also impact a business&rsquo;s image.
				After recognizing these issues, I was motivated to bring about changes
				with notable front-end issues.
			</p>

			<h2 className="text-2xl font-bold text-center">
				The Development Journey
			</h2>
			<p>
				My plan for BWI was a website that epitomizes clarity, ease of
				navigation, and responsiveness. Leveraging a tech stack of Next.js,
				React, and Tailwind CSS, I aimed to craft an interface that feels both
				inviting and intuitive to every visitor, whether they&rsquo;re on
				desktop or mobile. The choice of Next.js was driven by its SEO
				advantages and server-side rendering capabilities, React&rsquo;s
				component-based architecture facilitated rapid development, and Tailwind
				CSS allowed for custom, responsive design without the overhead of
				writing custom CSS.
			</p>
			<p>
				The project wasn&rsquo;t just about coding; it was a holistic design
				approach. Starting with a Figma prototype allowed me to iterate on user
				feedback early in the process to ensure the final product wouldn&rsquo;t
				just meet but exceed user expectations.
			</p>

			<h2 className="text-2xl font-bold text-center">
				Enhancements and Outcomes
			</h2>
			<div className="mt-4">
				<Link href="/images/website-redesign/compare.png">
					<Image
						src="/images/website-redesign/compare.png"
						alt="Pictok Home"
						width={1000}
						height={1000}
					/>
				</Link>
			</div>

			<p>With meticulous attention to detail, I introduced:</p>

			<ul className="list-disc ml-6">
				<li>A serene, minimalist design to enhance readability.</li>
				<li>
					A reimagined navigation structure, making information discovery
					effortless.
				</li>
				<li>
					An interactive homepage banner, creating engaging entry points to key
					sections.
				</li>
				<li>
					Distinct delineations between different product categories,
					streamlining the user journey.
				</li>
			</ul>
			<p>
				The site was optimized for mobile users to ensure a seamless experience
				across all devices.
			</p>
			<h2 className="text-2xl font-bold text-center">
				Reflections and Learnings
			</h2>
			<p>
				This project was a profound learning opportunity which underlines the
				importance of user-centered design and the power of visual simplicity.
				Facing challenges like simplifying complex content layouts taught me
				resilience and the value of iterative testing. Looking ahead, I&rsquo;m
				excited to apply these insights to future projects, continually
				improving my craft.
			</p>
			<p>
				Looking back, I see avenues for further improvement, such as deeper A/B
				testing for user interaction and expanding the site&rsquo;s footer for
				enhanced engagement. These are not just tasks but opportunities for
				growth and refinement. Additionally, I recognize the importance of speed
				improvements to ensure optimal performance for all users, especially
				those accessing the site on mobile devices. Scalability is also a
				crucial consideration to accommodate future growth and increased
				traffic.
			</p>
			<h2 className="text-2xl font-bold text-center">Conclusion</h2>
			<p>
				Redesigning BWI&rsquo;s website was a challenge in my professional
				development. It provides invaluable experience in tackling real-world
				web design challenges. In addition, it stands as a testament to my
				commitment to excellence through development and my relentless pursuit
				of user satisfaction. As I move forward, I&rsquo;m eager to bring this
				dedication and insight to new projects, pushing boundaries and creating
				memorable online experiences.
			</p>
		</div>
	);
};
const chatNetDes = () => {
	return (
		<>
			<div className="space-y-6 text-justify">
				<h2 className="text-2xl font-bold text-center">Introduction</h2>
				<p>
					In the modern workplace, where teams are often distributed across
					different locations and time zones, efficient and effective
					communication is paramount. ChatNet rises to meet this challenge as an
					innovative team chat application that integrates the capabilities of
					ChatGPT to enhance team collaboration and decision-making processes.
					By marrying the immediacy of team chat with the intelligence of AI,
					ChatNet aims to redefine workplace communication, making it more
					productive and insightful.
				</p>

				<h2 className="text-2xl font-bold text-center">
					Problem Identification
				</h2>
				<p>
					Traditional team chat applications facilitate basic communication but
					often fall short when it comes to managing and making sense of the
					vast amounts of information exchanged daily. Teams struggle to track
					decisions, follow up on tasks, or quickly access specific pieces of
					conversation. Furthermore, the inability to directly interact with AI
					for immediate insights or summaries exacerbates the challenge of
					sifting through chat histories to extract relevant information.
				</p>

				<h2 className="text-2xl font-bold text-center">
					The Development Journey
				</h2>
				<p>
					The development of ChatNet was marked by a strategic selection of
					technologies, aimed at creating a seamless and intelligent team chat
					experience with support of the cutting-edge AI technology. The app
					supports creating and deleting chat rooms, setting admin privileges,
					and inviting friends or colleagues, thereby offering flexibility in
					managing team interactions. The innovation didn&apos;t stop there; the
					development team introduced CLI commands to enhance user control over
					the chat flow. Commands like &quot;-h&quot; for accessing chat history
					and &quot;-chatgpt&quot; for initiating an AI-powered discussion
					analysis are examples of how ChatNet simplifies complex tasks. The
					ability to attribute messages to specific users (&quot;what did Alice
					say&quot;) and to respond to inquiries based on chat context
					(&quot;answer Alice&apos;s question&quot;) further exemplifies the
					app&apos;s advanced functionality.
				</p>
				<p>
					At its core, JavaScript and Node.js provided the foundation for
					building a responsive and scalable application, with Express.js and
					Socket.io enabling real-time, bidirectional communication essential
					for live chat functionality. The integration of GPT-4 introduced
					advanced AI capabilities, allowing the application to interpret chat
					histories and respond intelligently within conversations. Front-end
					design was streamlined with Tailwind CSS for a modern, user-friendly
					interface, while EJS facilitated dynamic content rendering. Prisma ORM
					played a critical role in efficient database management, ensuring
					smooth data operations behind the scenes. This tech stack was pivotal
					in transforming the initial concept into a robust platform that
					enhances team collaboration through AI-driven insights and
					interactions.
				</p>

				<h2 className="text-2xl font-bold text-center">
					Enhancements and Outcomes
				</h2>
				<p>
					Looking ahead, ChatNet plans to introduce a wider range of AI
					chatbots, giving users the power to choose which AI to interact with.
					This will enable teams to compare answers from different AIs, such as
					Gemini, to facilitate better-informed decision-making. Another
					upcoming feature is the ability to download and share chat history
					scripts. This will significantly enhance communication with external
					teams, providing them with comprehensive insights into discussions and
					decisions.
				</p>

				<h2 className="text-2xl font-bold text-center">
					Reflections and Learnings
				</h2>
				<p>
					The development of ChatNet underscored the importance of user-centric
					design in creating effective collaborative tools. Incorporating
					feedback from early users, the team learned the value of providing
					flexible, intuitive controls over AI interactions and the need for
					clear, accessible chat histories. The project demonstrated the
					potential of AI to not just support but actively enhance team
					communication, offering insights and efficiencies previously
					unattainable.
				</p>

				<h2 className="text-2xl font-bold text-center">Conclusion</h2>
				<p>
					ChatNet represents a significant leap forward in team collaboration
					software, blending the immediacy and familiarity of chat with the
					depth and versatility of AI. By enabling more efficient communication,
					smarter decision-making, and better information management, ChatNet
					sets a new standard for what team chat applications can achieve. As it
					continues to evolve, incorporating more AI capabilities and
					user-driven enhancements, ChatNet is poised to become an indispensable
					tool for teams seeking to capitalize on the benefits of AI-powered
					collaboration.
				</p>
			</div>
		</>
	);
};

const projectDescriptions = {
	PicTok: PicTokDes,
	ChatNet: chatNetDes,
	"business-website-redesign": businessWebsiteRedesignDes,
	"receipt-radar": receiptRadarDes,
};

export default function ProjectDescription({
	projectId,
}: {
	projectId: string;
}) {
	const DescriptionComponent =
		projectDescriptions[projectId as keyof typeof projectDescriptions];

	if (!DescriptionComponent) {
		return <div>No project description available.</div>;
	}

	return <DescriptionComponent />;
}
