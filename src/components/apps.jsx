import React from 'react';
import { useStyles } from '../App';
import { useTheme } from './themeProvider';
import './apps.css';

const Apps = () => {
	const classes = useStyles();
	const { theme } = useTheme();

	return (
		<section className={`${classes.contentContainer} appsContainer`}>
			<h2
				style={{
					color: theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)',
				}}
				id='appsTitle'
			>
				Apps Developed by Boyle Development
			</h2>
			<section className='appsList'>
				<section className='individualApp'>
					<h3 className='appName'>Reading Light Ad Free</h3>
          <img
								id='AppIcon'
								src={require('../assets/ReadingLight.png')}
								alt='Reading Light logo'
							/>
					<p>
						An ad-free reading light app that uses your phone screen to
						illuminate your book. Customize the light's color, brightness, and
						size to create a comfortable reading experience.
					</p>
				</section>
				<section className='individualApp'>
					<h3 className='appName'>Eggcellent Sales Tracker</h3>
          <img
								id='AppIcon'
								src={require('../assets/eggcellentSales.png')}
								alt='Reading Light logo'
							/>
					<p>
          Eggcellent Sales is a simple and intuitive sales tracking app designed for small businesses, initially inspired by tracking egg sales. The app enables users to record sales, manage customer information, track products, monitor expenses, and generate insights for their business. With an easy-to-use interface, Eggcellent Sales is ideal for business owners who need a straightforward solution to manage transactions, stay organized, and grow their business efficiently.
					</p>
				</section>
			</section>

			<section className='privacyPolicy'>
				<h3>Privacy Policy</h3>
				<p>
					All of our apps do not collect, store, or share any personal
					information. This app does not require an internet connection, and
					no data is transmitted from the app to any external services.
				</p>
			</section>
		</section>
	);
};

export default Apps;
