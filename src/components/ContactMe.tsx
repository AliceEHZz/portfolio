import Image from "next/image";
import Link from "next/link";
import MailToButton from "./MailToButton";

export default function ContactSection() {
	return (
		<section id="contact-me" className="text-center bg-secondary">
			<h1 className="text-3xl text-primary font-bold mt-10">Contact</h1>
			<div className="flex items-center justify-center space-x-4 py-5">
				<Link
					href="https://github.com/AliceEHZz"
					passHref
					className="inline-block hover:scale-110"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image src="/github.svg" alt="GitHub" width={70} height={70} />
				</Link>
				<Link
					href="https://www.linkedin.com/in/alicelin23/"
					passHref
					className="inline-block hover:scale-110"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image src="/linkedin.svg" alt="LinkedIn" width={70} height={70} />
				</Link>
				<MailToButton email="meiyellmya@gmail.com" value="Contact Me" />
			</div>
		</section>
	);
}
