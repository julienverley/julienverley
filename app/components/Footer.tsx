const Footer = () => {
	return (
		<footer className="px-6 sm:px-8 md:px-16 w-full h-[8rem] md:h-[9rem] flex justify-around md:justify-between items-center flex-col md:flex-row ">
			<div className="flex flex-row justify between gap-6 w-full md:justify-normal">
				<a
					href="https://github.com/julienverley"
					target="_blank"
					rel="noopener noreferrer"
					className="text-custom4 bg-custom3/10 text-sm md:text-lg px-6 sm:px-8 py-3 text-center min-w-[8rem] cursor-pointer hover:bg-custom3/30 hover:text-custom3 transition-all duration-200 w-full md:hover:py-14"
				>
					<div className="flex flex-row justify-between">
						<div>Javascript</div>
						<div>React</div>
						<div>Next</div>
					</div>
				</a>
			</div>
			<div className="flex flex-row justify-between gap-6 w-full md:justify-end my-3 md:my-0 items-center">
				<a
					href="https://openclassrooms.com/fr"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="text-custom4 bg-custom3/10 text-sm md:text-lg px-5 py-3 text-center min-w-[8rem] cursor-pointer hover:bg-custom3/30 hover:text-custom3 transition-all duration-200 md:hover:py-14 h-full">
						Mentorat
					</div>
				</a>
				<a
					href="https://vexinweb.fr/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="text-custom4 bg-custom3/10 text-sm md:text-lg px-5 py-3 text-center min-w-[8rem] cursor-pointer hover:bg-custom3/30 hover:text-custom3 transition-all duration-200 md:hover:py-14 h-full">
						Services
					</div>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
