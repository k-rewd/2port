import Image from 'next/image';

export default function ProjectsSection() {
	const projects = [
		{
			id: 1,
			title: "Sonamu Studios",
			description: "Tattoo shop located in Koreantown, Los Angeles created with ReactJS.",
			image: "/sonamu.png",
			link: "https://preeminent-sprite-8fbfbd.netlify.app/",
		},
		{
			id: 2,
			title: "InGenius",
			description: "Fullstack application for annotating text online, allowing users to analyze and annotate texts from songs, literature, historical documents, and web content. ReactJS, Flask, PostgreSQL",
			image: "/geniusplash.gif",
			link: "https://geniuskelly-fries.onrender.com/",
		},
		{
			id: 3,
			title: "Playground",
			description: "My playground to learn parallax, animations, and other fun frontend tricks revolving around JavaScript and CSS",
			image: "/playground.gif",
			link: "#",
		},
		{
			id: 4,
			title: "JobJr",
			description: "[Internship] Fully automated scripts with the purpose of scraping and filling out required job application data; Selenium, BS4",
			image: "/jobsjr.gif",
			link: "https://github.com/k-rewd/jjrscripts",
		},
		
	];

	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
					Featured Projects
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
						>
							<div className="aspect-video bg-gray-700 relative">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">
									{project.title}
								</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">
									{project.description}
								</p>
								<div className="flex gap-2">
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
									>
										View Project →
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
