"use client";
import { FC, useState, useEffect, useRef } from "react";
// import { FC, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import Select, { StylesConfig } from "react-select";
import emailjs from "@emailjs/browser";

interface FormData {
	name: string;
	email: string;
	// phone?: string;
	// subject: string;
	message: string;
}

// const subjectOptions = [
// 	{ value: "devis", label: "Obtenir un devis personnalisé" },
// 	{ value: "info", label: "Demander des informations" },
// 	{ value: "autre", label: "Autre" },
// ] as const;

// type SubjectOption = (typeof subjectOptions)[number];

const validationSchema = Yup.object<FormData>({
	name: Yup.string().required("Votre nom est requis"),
	email: Yup.string()
		.email("Email invalide")
		.required("Votre email est requis"),
	// phone: Yup.string().optional(),
	// subject: Yup.string().required("Merci de sélectionner un sujet"),
	message: Yup.string().required("Votre message est requis"),
});

// const customStyles: StylesConfig<SubjectOption, false> = {
// 	control: (provided, state) => ({
// 		...provided,
// 		cursor: "pointer", // Ajoute le curseur pointer au contrôle
// 		// border: "none",
// 		padding: ".5rem",
// 		backgroundColor: "white",
// 		// borderRadius: "0.75rem",
// 		color: "#999",
// 		border: state.isFocused ? "1px solid #a8a29e" : "1px solid #e5e7eb", // Bordure stone-400 en focus
// 		boxShadow: state.isFocused ? "0 0 0 2px rgba(168, 162, 158, 0.3)" : "none", // Équivalent au ring
// 		transition: "all 0.2s ease",
// 		"&:hover": {
// 			borderColor: "#a8a29e", // stone-400
// 		},
// 	}),
// 	placeholder: (provided) => ({
// 		...provided,
// 		color: "#999",
// 	}),
// 	singleValue: (provided) => ({
// 		...provided,
// 		color: "#999",
// 	}),
// 	option: (provided, state) => ({
// 		...provided,
// 		cursor: "pointer", // Ajoute le curseur pointer au contrôle
// 		backgroundColor: state.isSelected ? "#f2f2f2" : "white",
// 		color: state.isSelected ? "#333" : "#666",
// 		"&:hover": {
// 			backgroundColor: "#e0e0e0",
// 		},
// 	}),
// 	menu: (provided) => ({
// 		...provided,
// 		cursor: "pointer", // Ajoute le curseur pointer au contrôle
// 		// borderRadius: "0.75rem",
// 		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
// 		marginTop: "5px", // Espacement entre l'input et le menu
// 	}),
// 	menuList: (provided) => ({
// 		...provided,
// 		// borderRadius: "0.75rem", // Assure-toi que c'est la même valeur que pour le menu
// 		padding: "4px", // Un peu de padding interne
// 	}),
// };

const ContactForm: FC = () => {
	const [isMounted, setIsMounted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<{
		success: boolean;
		message: string;
	} | null>(null);
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const initialValues: FormData = {
		name: "",
		email: "",
		// phone: "",
		// subject: "",
		message: "",
	};

	// Ajout de logs pour déboguer et améliorer la gestion des erreurs
	const handleSubmit = async (
		values: FormData,
		{ resetForm }: { resetForm: () => void }
	) => {
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			// Remplacer ces valeurs par vos IDs EmailJS
			const serviceId = "service_9yuhwis";
			const templateId = "template_0asojaa";
			const publicKey = "dyqOGcZNNcNTQ_ko8";

			// Préparer les données pour l'envoi
			// const subjectText =
			// 	subjectOptions.find((opt) => opt.value === values.subject)?.label ||
			// 	values.subject;

			console.log("Données envoyées à EmailJS :", {
				from_name: values.name,
				from_email: values.email,
				// from_phone: values.phone || "Non renseigné",
				// subject: subjectText,
				message: values.message,
			});

			const result = await emailjs.send(
				serviceId,
				templateId,
				{
					from_name: values.name,
					from_email: values.email,
					// from_phone: values.phone || "Non renseigné",
					// subject: subjectText,
					message: values.message,
				},
				publicKey
			);

			console.log("Réponse EmailJS :", result);

			if (result.status === 200) {
				setSubmitStatus({
					success: true,
					message: "Votre message a bien été envoyé !",
				});
				resetForm();
			} else {
				throw new Error("Échec de l'envoi du message");
			}
		} catch (error) {
			console.error("Erreur lors de l'envoi du message :", error);
			setSubmitStatus({
				success: false,
				message:
					"Une erreur est survenue lors de l'envoi du message. Veuillez réessayer ultérieurement.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="w-full" id="">
			<div className="w-full">
				{submitStatus && (
					<div
						className={`p-4 mb-6 text-center ${
							submitStatus.success
								? "bg-green-300 text-white"
								: "bg-red-300 text-white"
						}`}
					>
						{submitStatus.message}
					</div>
				)}

				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({
						errors,
						touched,
						// setFieldValue,
						// setFieldTouched,
						// validateField,
					}) => (
						<Form className="flex flex-col gap-4 mx-auto w-full text-sm">
							<div className="flex flex-col gap-2 w-full">
								<Field
									name="name"
									type="text"
									placeholder={
										errors.name && touched.name
											? errors.name
											: "Ecrivez votre nom ici"
									}
									className={`px-4 py-2 border bg-transparent border-transparent focus:outline-none focus:border-red-400 transition-all ${
										errors.name && touched.name ? "placeholder-red-400" : ""
									}`}
									required
									aria-required="true"
								/>
							</div>
							<div className="flex flex-col gap-2 w-full">
								<Field
									name="email"
									type="email"
									placeholder={
										errors.email && touched.email
											? errors.email
											: "Votre email ici"
									}
									className={`px-4 py-2 border bg-transparent border-transparent focus:outline-none focus:border-red-400 transition-all ${
										errors.email && touched.email ? "placeholder-red-400" : ""
									}`}
									required
									aria-required="true"
								/>
							</div>
							<div className="flex flex-col gap-2 w-full">
								<Field
									as="textarea"
									name="message"
									rows={2}
									placeholder={
										errors.message && touched.message
											? errors.message
											: "Votre message ici"
									}
									className={`px-4 py-2 border bg-transparent border-transparent focus:outline-none focus:border-red-400 transition-all ${
										errors.message && touched.message
											? "placeholder-red-400"
											: ""
									}`}
									required
									aria-required="true"
								/>
							</div>

							<button type="submit" className="">
								Envoyer
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</section>
	);
};

export default ContactForm;
