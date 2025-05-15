import Header from "./components/Header";
import MainIndex from "./components/MainIndex";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<div className="bg-custom2 flex flex-col">
			<Header />
			{/* <Main icon={faKeyboard} /> */}
			<MainIndex />
			<Footer />
		</div>
	);
}
