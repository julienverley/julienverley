import Header from "../components/Header";
import MainContact from "../components/MainContact";
import Footer from "../components/Footer";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const metadata = {
	title: "Julien Verley | contact",
	description: "Page contact du portfolio",
};

const contactPage = () => {
	return (
		<div className="bg-custom2 flex flex-col">
			<Header />
			<MainContact icon={faEnvelope} />
			<Footer />
		</div>
	);
};
export default contactPage;
