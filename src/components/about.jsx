import React, { useEffect } from 'react';
import { useStyles } from '../App';
import './about.css';
// import sam from '../assets/sam.jpeg';
// import sam2 from '../assets/sam2.png';
// import sam3 from '../assets/sam3.jpeg';
// import sam4 from '../assets/sam4.jpeg';
// import sam5 from '../assets/sam5.jpeg';
// import sam6 from '../assets/sam6.jpeg';
const About = () => {
	const classes = useStyles();

	useEffect(() => {
		const setVhVariable = () => {
			document.documentElement.style.setProperty(
				'--vh',
				`${window.innerHeight * 0.01}px`
			);
		};

		window.addEventListener('resize', setVhVariable);
		setVhVariable();

		return () => {
			window.removeEventListener('resize', setVhVariable);
		};
	}, []);
	return (
		<section className={`${classes.contentContainer} aboutContainer`}>
			<section className='aboutContainer'>
				<h2 id='titleAbout'>Sam’s World: Code, Cuisine, and Curiosity</h2>
				<section className='aboutParagraph'>
					<p>
						Sam Boyle is a full-stack software engineer with a diverse
						background, combining a multifaceted approach to problem-solving in
						software development with leadership skills, global experience, and
						a passion for culinary arts.
					</p>
					<p>
						Holding a Bachelor's degree in Counter Terrorism, Security, and
						Intelligence from Edith Cowan University in Australia and an
						Associate's in Enology and Viticulture from Walla Walla Community
						College, Sam's academic journey reflects his broad interests. His
						decade-long overseas residency, including in China, Australia, and
						Germany, and travels to 30 countries have endowed him with an
						international perspective and a love for global cuisines and
						cultures.
					</p>
					<p>
						Before embracing software engineering, Sam acquired managerial
						acumen in varied roles, such as a Business Office Manager at
						Brookdale Senior Living and a General Manager in Australia, honing
						skills in HR, financial management, and even winemaking. Furthering
						his commitment to tech, Sam is also a proud graduate of App Academy,
						having successfully completed a rigorous 6-month full-time
						full-stack software engineering bootcamp, where he deepened his
						skills in coding and software development.
					</p>
					<p>
						Sam is excited about contributing his eclectic experiences and
						continuous learning ethos to the tech industry, focusing on
						unraveling the endless puzzles in programming. When not immersed in
						coding, Sam relishes exploring international dishes, traveling, and
						spending quality time with his family.
					</p>
					<p>
						Eager to blend his analytical and creative skills, Sam is keen on
						offering his unique experiences and culinary passion to a
						forward-thinking company, aiming to expand his software engineering
						skills and solve programming puzzles, including those in the
						kitchen.
					</p>
				</section>

				<section className='photos'>
					<img id='samPic' src='https://d1jca6dx52tygx.cloudfront.net/sam2.png' alt='sam'></img>
					<img id='samPic' src='https://d1jca6dx52tygx.cloudfront.net/sam3.jpeg' alt='sam'></img>
					<img id='samPic1' src='https://d1jca6dx52tygx.cloudfront.net/sam.jpeg' alt='sam'></img>
					<img id='samPic' src='https://d1jca6dx52tygx.cloudfront.net/sam4.jpeg' alt='sam'></img>
					<img id='samPic' src='https://d1jca6dx52tygx.cloudfront.net/sam5.jpeg' alt='sam'></img>
					<img id='samPic' src='https://d1jca6dx52tygx.cloudfront.net/sam6.jpeg' alt='sam'></img>
				</section>
			</section>
		</section>
	);
};

export default About;
