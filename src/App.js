import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import { Button, ButtonGroup, Divider as MuiDivider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from './components/themeProvider';

export const useStyles = makeStyles((theme) => ({
	buttonGroup: {
		position: 'absolute',
		top: '50px',
		left: '50%',
		transform: 'translateX(-50%)',
		zIndex: 1000,
	},
	contentContainer: {
		paddingTop: '0px',
	},
	button: {
		margin: theme.spacing(1),
		borderRight: '0 !important',
		'&:hover': {
			backgroundColor: '#ddd',
		},
	},
	toggleThemeButton: {
		position: 'absolute',
		top: '10px',
		right: '10px',
	},
}));

const Divider = () => {
	const { theme } = useTheme();
	return (
		<MuiDivider
			orientation='vertical'
			flexItem
			style={{
				backgroundColor:
					theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)',
				marginTop: '10.5px',
				marginBottom: '10.5px',
			}}
		/>
	);
};

function App() {
	const { theme, toggleTheme } = useTheme();
	const classes = useStyles({ theme });

	const lightVideoSrcMp4 = 'https://d1jca6dx52tygx.cloudfront.net/dunes.mp4';
	const lightVideoSrcWebm = 'https://d1jca6dx52tygx.cloudfront.net/dunes.webm';
	const darkVideoSrcMp4 = 'https://d1jca6dx52tygx.cloudfront.net/magic.mp4';
	const darkVideoSrcWebm = 'https://d1jca6dx52tygx.cloudfront.net/magic.webm';

	return (
		<Router>
			<div style={{ position: 'relative' }}>
				<video
					key={theme}
					playsInline
					autoPlay
					muted
					loop
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						position: 'fixed',
						zIndex: '-1',
					}}
				>
					<source
						src={theme === 'light' ? lightVideoSrcMp4 : darkVideoSrcMp4}
						type='video/mp4'
					/>
					<source
						src={theme === 'light' ? lightVideoSrcWebm : darkVideoSrcWebm}
						type='video/webm'
					/>
				</video>
				<ButtonGroup className={classes.buttonGroup} variant='text'>
					<Button
						style={{
							color:
								theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)',
						}}
						className={classes.button}
						component={Link}
						to='/'
					>
						Home
					</Button>
					<Divider />
					<Button
						style={{
							color:
								theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)',
						}}
						className={classes.button}
						component={Link}
						to='/about'
					>
						About
					</Button>
					<Divider />
					<Button
						style={{
							color:
								theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)',
						}}
						className={classes.button}
						component={Link}
						to='/projects'
					>
						Projects
					</Button>
					<Divider />
					<Button
						style={{
							color:
								theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)',
						}}
						className={classes.button}
						component={Link}
						to='/contact'
					>
						Contact
					</Button>
				</ButtonGroup>
				<Button
					style={{
						color: theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)',
					}}
					className={classes.toggleThemeButton}
					onClick={toggleTheme}
				>
					{theme === 'light' ? 'Dark Mode' : 'Light Mode'}
				</Button>
				<Routes>
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
