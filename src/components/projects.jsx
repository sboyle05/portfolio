import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from '../App';
import './projects.css';
import WTC from '../assets/WTC.png';
import AWN from '../assets/AWN.jpg';
import github from '../assets/github.png';

const Projects = () => {
	const classes = useStyles();

	return (
		<section className={`${classes.contentContainer} aboutContainer`}>
			<section className='projectContainer'>
				<h2 id='projectsTitle'>Projects</h2>
				<section className='projectLinks'>
					<section className='individualProject'>
						<a
							href='https://what-to-cook.onrender.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								id='wtcLink'
								src='https://d1jca6dx52tygx.cloudfront.net/WTC.png'
								alt='wtc logo'
							/>
						</a>
						<section className='projectInfo'>
							<h3 className='projectName'>What-to-Cook</h3>
							<p>
								Created out of my love of cooking for others, What-to-Cook isn't
								your traditional recipe site. You provide your ingredients and
								WtC will provide you with recipes. Finding new recipes and
								creating your own recipes, is just the beginning. Wtc has a
								built in meal planner and a shopping list that work with the
								recipes and ingredients within. Click the WtC logo to visit the
								site or see under the hood by clicking the github icon.
								<a
									href='https://github.com/sboyle05/what-to-cook'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img id='githubIcon' src={github} alt='githubicon'></img>
								</a>
							</p>
						</section>
					</section>
					<section className='individualProject'>
						<a
							href='https://apocalypse-weather-now.onrender.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								id='awnLink'
								src='https://d1jca6dx52tygx.cloudfront.net/AWN.jpg'
								alt='awn logo'
							/>
						</a>{' '}
						<section className='projectInfo'>
							<h3 className='projectName'>Apocalypse Weather Now</h3>
							<p>
								An App Academy group project that puts a twist on your
								traditional weather site. AWN is for those that live in a world
								of disasters. Utilizing real live weather data and converting it
								into our apocalyptic situations that you may want to avoid. Use
								our customized map to check on whats happening all over the
								world. On top of that is stories and tips from the survivors in
								this terrifying new world.
								<a
									href='https://github.com/SonQHoang/Apocalypse-Weather-Now/wiki'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img id='githubIcon' src={github} alt='githubicon'></img>
								</a>
							</p>
						</section>
					</section>
				</section>

				<p>The Magic Behind It All</p>
				<section className='iconContainer'>
					<img
						className='techIcon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg'
						alt='icon'
					/>

					<img
						className='techIcon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
						alt='icon'
					/>

					<img
						className='techIcon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'
						alt='icon'
					/>

					<img
						className='techIcon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
						alt='icon'
					/>

					<img
						className='techIcon'
						alt='icon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg'
					/>

					<img
						className='techIcon'
						alt='icon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
					/>

					<img
						className='techIcon'
						alt='icon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
					/>
					<img
						className='techIcon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
						alt='icon'
					/>
					<img
						className='techIcon'
						alt='icon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'
					/>

					<img
						className='techIcon'
						alt='icon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
					/>
					<img
						className='techIcon'
						alt='icon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg'
					/>
					<img
						className='techIcon'
						alt='icon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg'
					/>

					<img
						className='techIcon'
						alt='icon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
					/>

					<img
						className='techIcon'
						alt='icon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg'
					/>

					<img
						className='techIcon'
						alt='icon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg'
					/>

					<img
						className='techIcon'
						alt='icon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original-wordmark.svg'
					/>

					<img
						className='techIcon'
						alt='icon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
					/>
				</section>
			</section>
		</section>
	);
};

export default Projects;
