import Link from "next/link";

export default function NavBar() {
	return (
		<nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
			<ul className="flex justify-center space-x-10 py-4">
				<li>
					<Link
						href="/"
						className="text-gray-600 hover:text-primary font-semibold"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						href="/#projects"
						className="text-gray-600 hover:text-primary font-semibold"
					>
						Projects
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className="text-gray-600 hover:text-primary font-semibold"
					>
						About
					</Link>
				</li>

				<li>
					<Link
						href="/#contact-me"
						className="text-gray-600 hover:text-primary font-semibold"
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
}
