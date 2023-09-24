import React from 'react';
import './home.css';
import { useStyles } from '../App';
import TypingEffect from './typingEffect';
import { useTheme } from './themeProvider';
const Home = () => {
  const sentences = ['Full Stack Software Engineer', 'Leader', 'Puzzle Solver', 'Explorer', 'Gamer', 'Creator', 'Foodie', 'Loyal' ];
  const classes = useStyles();
  const { theme } = useTheme();
  return (
    <section className={`${classes.contentContainer} aboutContainer`}>
    <section className='homeContainer'>
      <h2 id='titleName'style={{ color: theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)' }}>Sam Boyle</h2>
      <span style={{ color: theme === 'light' ? 'var(--light-text)' : 'var(--dark-text)' }}>
  <TypingEffect id="sentencesTyped" data={sentences} delay={2000} />
</span>
    </section>
    </section>
  );
};

export default Home;
