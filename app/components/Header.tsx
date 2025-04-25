import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
	return (
		<header className="px-6 sm:px-8 md:px-16 w-full h-[4rem] md:h-[6rem] flex justify-between items-center">
			<Link href="./">
				<div className="mx-1 px-5 py-3 text-custom3 text-md md:text-xl cursor-pointer bg-custom3/10 hover:bg-custom3/30 transition-all duration-200 hover:py-5 md:px-10 md:hover:py-9">
					Julien Verley
				</div>
			</Link>
			<div className="flex flex-row items-center justify-end gap-6">
				<Link
					href="https://linkedin.com/in/julienverley"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-1 px-5 py-3 text-custom3 text-sm md:text-lg cursor-pointer bg-custom3/10 hover:bg-custom3/30 transition-all duration-200 hover:py-6 md:px-10 md:hover:py-10"
				>
					<FontAwesomeIcon icon={faLinkedin} className="w-4 md:w-5" />
				</Link>
				<Link
					href="/contact"
					className="mx-1 px-5 py-3 text-custom3 text-sm md:text-lg cursor-pointer bg-custom3/10 hover:bg-custom3/30 transition-all duration-200 hover:py-6 md:px-10 md:hover:py-10"
				>
					<FontAwesomeIcon icon={faEnvelope} className="w-4 md:w-5" />
				</Link>
			</div>
		</header>
	);
};
export default Header;
