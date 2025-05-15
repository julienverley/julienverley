"use client";
import {
	FC,
	useState,
	useRef,
	useImperativeHandle,
	forwardRef,
	useEffect,
} from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

interface FormData {
	name: string;
	email: string;
	message: string;
}

export interface ContactFormRef {
	submitForm: () => void;
	isFormValid: () => boolean;
}

const validationSchema = Yup.object<FormData>({
	name: Yup.string().required("Votre nom est requis"),
	email: Yup.string()
		.email("Email invalide")
		.required("Votre email est requis"),
	message: Yup.string().required("Votre message est requis"),
});

const ContactForm: FC<{ ref: React.Ref<ContactFormRef> }> = forwardRef(
	(_, ref) => {
		const [isSubmitting, setIsSubmitting] = useState(false);
		const [submitStatus, setSubmitStatus] = useState<{
			success: boolean;
			message: string;
		} | null>(null);
		const [showStatus, setShowStatus] = useState(false);
		const formikRef = useRef<FormikProps<FormData>>(null);

		// États pour suivre le focus des champs
		const [nameFocused, setNameFocused] = useState(false);
		const [emailFocused, setEmailFocused] = useState(false);
		const [messageFocused, setMessageFocused] = useState(false);

		// Effet pour gérer l'apparition et la disparition du message
		useEffect(() => {
			if (submitStatus) {
				setShowStatus(true);
				const timer = setTimeout(() => {
					setShowStatus(false);
					// Optionnel: nettoyer le statut après l'animation de sortie
					setTimeout(() => {
						setSubmitStatus(null);
					}, 500); // Délai correspondant à la durée de l'animation de sortie
				}, 5000);

				return () => clearTimeout(timer);
			}
		}, [submitStatus]);

		// Exposer la méthode submitForm via la ref
		useImperativeHandle(ref, () => ({
			submitForm: () => {
				if (formikRef.current) {
					formikRef.current.submitForm();
				}
			},
			isFormValid: () => {
				if (formikRef.current) {
					return (
						formikRef.current.isValid &&
						formikRef.current.dirty &&
						!formikRef.current.isSubmitting
					);
				}
				return false;
			},
		}));

		const initialValues: FormData = {
			name: "",
			email: "",
			message: "",
		};

		const handleSubmit = async (
			values: FormData,
			{ resetForm }: { resetForm: () => void }
		) => {
			setIsSubmitting(true);
			setSubmitStatus(null);

			try {
				// IDs EmailJS
				const serviceId = "service_9yuhwis";
				const templateId = "template_0asojaa";
				const publicKey = "dyqOGcZNNcNTQ_ko8";

				const result = await emailjs.send(
					serviceId,
					templateId,
					{
						from_name: values.name,
						from_email: values.email,
						message: values.message,
					},
					publicKey
				);

				console.log("Réponse EmailJS :", result);

				if (result.status === 200) {
					setSubmitStatus({
						success: true,
						message: "Votre message a été envoyé",
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

		// Fonction pour vérifier si un email est valide
		const isEmailValid = (email: string) => {
			return email && email.includes("@") && email.includes(".");
		};

		return (
			<section className="w-full" id="">
				<div className="w-full relative">
					{/* Message de statut avec animation déplacé en bas */}
					<Formik
						innerRef={formikRef}
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
						validateOnChange={true}
					>
						{({ errors, touched, values }) => {
							// Déterminer les classes de bordure pour chaque champ

							// Pour le champ nom:
							// - Bordure rouge si le champ est vide et en focus
							// - Bordure blanche si le champ a du contenu et est en focus
							// - Pas de bordure si le champ n'est pas en focus
							const nameBorderClass = nameFocused
								? values.name
									? "border-white"
									: "border-red-400"
								: "border-transparent";

							// Pour le champ email:
							// - Bordure rouge si le champ est en focus et vide OU si l'email est invalide
							// - Bordure blanche si l'email est valide et en focus
							// - Pas de bordure si le champ n'est pas en focus et l'email est valide
							const emailBorderClass = emailFocused
								? isEmailValid(values.email)
									? "border-white"
									: "border-red-400"
								: values.email && !isEmailValid(values.email)
								? "border-red-400"
								: "border-transparent";

							// Pour le champ message:
							// - Bordure rouge si le champ est vide et en focus
							// - Bordure blanche si le champ a du contenu et est en focus
							// - Pas de bordure si le champ n'est pas en focus
							const messageBorderClass = messageFocused
								? values.message
									? "border-white"
									: "border-red-400"
								: "border-transparent";

							return (
								<Form className="flex flex-col gap-4 mx-auto w-full text-sm md:text-2xl lg:text-4xl">
									<div className="flex flex-col gap-2 w-full">
										<Field
											name="name"
											type="text"
											placeholder={
												errors.name && touched.name
													? errors.name
													: "Ecrivez votre nom ici"
											}
											className={`px-4 py-2 border bg-transparent ${nameBorderClass} focus:outline-none transition-all text-white ${
												errors.name && touched.name
													? "placeholder-red-400"
													: "placeholder-custom3"
											}`}
											required
											aria-required="true"
											// Gérer le focus et le blur pour le champ nom
											onFocus={() => setNameFocused(true)}
											onBlur={() => setNameFocused(false)}
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
											className={`px-4 py-2 border bg-transparent ${emailBorderClass} focus:outline-none transition-all text-white ${
												(errors.email && touched.email) ||
												(values.email && !isEmailValid(values.email))
													? "placeholder-red-400"
													: "placeholder-custom3"
											}`}
											required
											aria-required="true"
											// Gérer le focus et le blur pour le champ email
											onFocus={() => setEmailFocused(true)}
											onBlur={() => setEmailFocused(false)}
										/>
									</div>
									<div className="flex flex-col gap-2 w-full">
										<Field
											as="textarea"
											name="message"
											rows={3}
											placeholder={
												errors.message && touched.message
													? errors.message
													: "Votre message ici"
											}
											className={`px-4 py-2 border bg-transparent ${messageBorderClass} focus:outline-none transition-all text-white resize-none ${
												errors.message && touched.message
													? "placeholder-red-400"
													: "placeholder-custom3"
											}`}
											required
											aria-required="true"
											// Gérer le focus et le blur pour le champ message
											onFocus={() => setMessageFocused(true)}
											onBlur={() => setMessageFocused(false)}
										/>
									</div>

									{isSubmitting && (
										<div
											className={`fixed left-0 bottom-1/4 z-50 p-4 text-sm shadow-lg transition-transform duration-500 ${
												isSubmitting ? "translate-x-0" : "-translate-x-full"
											} bg-custom3 text-custom1`}
											style={{
												maxWidth: "80%",
												borderTopRightRadius: "0.5rem",
												borderBottomRightRadius: "0.5rem",
												opacity: 0.8,
											}}
										>
											Envoi en cours...
										</div>
									)}

									{/* Bouton caché qui permet la soumission du formulaire mais n'est pas visible */}
									<button
										type="submit"
										className="hidden"
										disabled={isSubmitting}
									>
										Envoyer
									</button>
									{submitStatus && (
										<div
											className={`fixed left-0 top-1/4 z-50 p-4 text-sm shadow-lg transition-transform duration-500 ${
												showStatus ? "translate-x-0" : "-translate-x-full"
											} ${
												submitStatus.success
													? "bg-custom3 text-custom1"
													: "bg-red-400 text-white"
											}`}
											style={{
												maxWidth: "80%",
												borderTopRightRadius: "0.5rem",
												borderBottomRightRadius: "0.5rem",
												opacity: 0.8,
											}}
										>
											{submitStatus.message}
										</div>
									)}
								</Form>
							);
						}}
					</Formik>
				</div>
			</section>
		);
	}
);

ContactForm.displayName = "ContactForm";

export default ContactForm;
