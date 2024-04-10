import Link from "next/link";
import Image from "next/image";
interface MailToButtonProps {
	email: string; // The email address to send the email to
	value: string; // The value of the button
	subject?: string; // Optional email subject
	body?: string; // Optional email body
}

export default function MailToButton({
	email,
	value,
	subject,
	body,
}: MailToButtonProps) {
	const mailtoLink = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}${body ? `&body=${encodeURIComponent(body)}` : ""}`;

	return (
		<Link
			href={mailtoLink}
			style={{ textDecoration: "none" }}
			target="_blank"
			rel="noopener noreferrer"
			className="inline-block hover:scale-110"
		>
			<Image src="/mail.svg" alt="LinkedIn" width={70} height={70} />
		</Link>
	);
}
