// import ContactForm from "./ContactForm";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
// import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// interface MainProps {
// 	icon?: IconDefinition;
// 	page?: "home" | "contact";
// }

// const MainContact = ({ icon = faKeyboard }: MainProps) => {
// 	return (
// 		<main className="min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-15rem)] items-center justify-center flex py-8 px-0 sm:px-8 md:px-16 md:py-0">
// 			<div className="py-16 px-6 sm:px-8 md:px-16 bg-custom3/30 h-full flex flex-row justify-center items-center gap-12 md:min-h-[calc(100vh-18rem)] w-full">
// 				<div className="flex flex-col justify-center w-full">
// 					<div className="text-custom3 text-xl md:text-2xl w-3/4 md:w-1/2">
// 						<h1 className="p-4">
// 							<b>Contact</b>
// 						</h1>
// 					</div>
// 					<div className="w-full">
// 						{/* <div className="text-custom3 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl  w-3/4 md:w-1/2 "> */}
// 						<ContactForm />
// 						{/* <div>Nom</div>
// 						<div>Téléphone</div>
// 						<div>Email</div>
// 						<div>Message</div> */}
// 					</div>
// 				</div>
// 				<div className="text-custom3 w-1/2 flex justify-center items-center">
// 					<FontAwesomeIcon
// 						icon={icon}
// 						className="text-custom3 w-2/3 sm:w-1/2 max-w-[20rem] opacity-50 hover:opacity-100 transition-all duration-200 cursor-pointer"
// 					/>
// 				</div>
// 			</div>
// 		</main>
// 	);
// };

// export default MainContact;

// "use client";
// import { useRef } from "react";
// import ContactForm, { ContactFormRef } from "./ContactForm";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
// import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// interface MainProps {
// 	icon?: IconDefinition;
// 	page?: "home" | "contact";
// }

// const MainContact = ({ icon = faKeyboard }: MainProps) => {
// 	const formRef = useRef<ContactFormRef>(null);

// 	const handleIconClick = () => {
// 		// Soumettre le formulaire lorsqu'on clique sur l'icône
// 		if (formRef.current) {
// 			formRef.current.submitForm();
// 		}
// 	};

// 	return (
// 		<main className="min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-15rem)] items-center justify-center flex py-8 px-0 sm:px-8 md:px-16 md:py-0">
// 			<div className="py-16 px-6 sm:px-8 md:px-16 bg-custom3/30 h-full flex flex-row justify-center items-center gap-12 md:min-h-[calc(100vh-18rem)] w-full">
// 				<div className="flex flex-col justify-center w-full">
// 					<div className="text-custom3 text-xl md:text-2xl w-3/4 md:w-1/2">
// 						<h1 className="p-4">
// 							<b>Contact</b>
// 						</h1>
// 					</div>
// 					<div className="w-full">
// 						<ContactForm ref={formRef} />
// 					</div>
// 				</div>
// 				<div className="text-custom3 w-1/2 flex justify-center items-center">
// 					<FontAwesomeIcon
// 						icon={icon}
// 						className="text-custom3 w-2/3 sm:w-1/2 max-w-[20rem] opacity-50 hover:opacity-100 transition-all duration-200 cursor-pointer"
// 						onClick={handleIconClick}
// 						role="button"
// 						aria-label="Soumettre le formulaire"
// 						tabIndex={0}
// 					/>
// 				</div>
// 			</div>
// 		</main>
// 	);
// };

// export default MainContact;

// "use client";
// import { useRef } from "react";
// import ContactForm, { ContactFormRef } from "./ContactForm";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
// import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// interface MainProps {
// 	icon?: IconDefinition;
// 	page?: "home" | "contact";
// }

// const MainContact = ({ icon = faKeyboard }: MainProps) => {
// 	const formRef = useRef<ContactFormRef>(null);

// 	const handleIconClick = () => {
// 		// Soumettre le formulaire lorsqu'on clique sur l'icône
// 		if (formRef.current) {
// 			formRef.current.submitForm();
// 		}
// 	};

// 	return (
// 		<main className="min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-15rem)] items-center justify-center flex py-8 px-0 sm:px-8 md:px-16 md:py-0">
// 			<div className="py-16 px-6 sm:px-8 md:px-16 bg-custom3/30 h-full flex flex-row justify-center items-center gap-12 md:min-h-[calc(100vh-18rem)] w-full">
// 				<div className="flex flex-col justify-center w-full">
// 					<div className="text-custom3 text-xl md:text-2xl w-3/4 md:w-1/2">
// 						<h1 className="p-4">
// 							<b>Contact</b>
// 						</h1>
// 					</div>
// 					<div className="w-full">
// 						<ContactForm ref={formRef} />
// 					</div>
// 				</div>
// 				<div className="text-custom3 w-1/2 flex justify-center items-center">
// 					{/* Envelopper l'icône dans un bouton accessible */}
// 					<button
// 						onClick={handleIconClick}
// 						className="bg-transparent border-0 p-0 cursor-pointer"
// 						aria-label="Soumettre le formulaire"
// 					>
// 						<FontAwesomeIcon
// 							icon={icon}
// 							className="text-custom3 w-2/3 sm:w-1/2 max-w-[20rem] opacity-50 hover:opacity-100 transition-all duration-200"
// 							// Suppression des attributs qui causent le conflit
// 						/>
// 					</button>
// 				</div>
// 			</div>
// 		</main>
// 	);
// };

// export default MainContact;

"use client";
import { useRef } from "react";
import ContactForm, { ContactFormRef } from "./ContactForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface MainProps {
	icon?: IconDefinition;
	page?: "home" | "contact";
}

const MainContact = ({ icon = faKeyboard }: MainProps) => {
	const formRef = useRef<ContactFormRef>(null);

	const handleIconClick = () => {
		// Soumettre le formulaire lorsqu'on clique sur l'icône
		if (formRef.current) {
			formRef.current.submitForm();
		}
	};

	return (
		<main className="min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-15rem)] items-center justify-center flex py-8 px-0 sm:px-8 md:px-16 md:py-0">
			<div className="py-16 px-6 sm:px-8 md:px-16 bg-custom3/30 h-full flex flex-row justify-center items-center gap-12 md:min-h-[calc(100vh-18rem)] w-full">
				<div className="flex flex-col justify-center w-full">
					<div className="text-custom3 text-xl md:text-2xl w-3/4 md:w-1/2">
						<h1 className="p-4">
							<b>Contact</b>
						</h1>
					</div>
					<div className="w-full">
						<ContactForm ref={formRef} />
					</div>
				</div>
				<div className="text-custom3 w-1/2 flex justify-center items-center">
					{/* Appliquer les classes de taille au bouton lui-même */}
					<button
						onClick={handleIconClick}
						className="bg-transparent border-0 p-0 cursor-pointer w-2/3 sm:w-1/2 max-w-[20rem] text-custom3"
						aria-label="Soumettre le formulaire"
					>
						<FontAwesomeIcon
							icon={icon}
							className="w-full h-full opacity-50 hover:opacity-100 transition-all duration-200"
						/>
					</button>
				</div>
			</div>
		</main>
	);
};

export default MainContact;
