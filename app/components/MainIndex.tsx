import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface MainProps {
	icon?: IconDefinition;
	page?: "home" | "contact";
}

const MainIndex = ({ icon = faKeyboard }: MainProps) => {
	return (
		<main className="min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-15rem)] items-center justify-center flex py-8 px-0 sm:px-8 md:px-16 md:py-0">
			<div className="py-16 px-6 sm:px-8 md:px-16 bg-custom3/30 h-full flex flex-row justify-center items-center gap-12 md:min-h-[calc(100vh-18rem)] w-full">
				<div className="flex flex-col justify-center">
					<div className="text-custom3 text-xl md:text-2xl w-3/4 md:w-1/2">
						<h1>
							<b>frontend</b>
						</h1>
					</div>
					<div className="text-custom3 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl  w-3/4 md:w-1/2 ">
						<div className="tracking-normal">
							<b>Développeur</b>
						</div>
						<div className="traching-tight md:tracking-[0.5px]">
							d&apos;applications
						</div>
					</div>
				</div>
				<div className="text-custom3 w-1/2 flex justify-center items-center">
					{/* Utiliser un div avec une taille définie pour contenir l'icône */}
					<div className="w-2/3 sm:w-1/2 max-w-[20rem] text-center">
						<FontAwesomeIcon
							icon={icon}
							className="text-custom3 w-full h-full opacity-50"
						/>
					</div>
				</div>
			</div>
		</main>
	);
};

export default MainIndex;
