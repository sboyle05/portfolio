import React from 'react';
import './home.css';
import { useStyles } from '../App';
import TypingEffect from './typingEffect';

const Home = () => {
  const sentences = ['Full Stack Software Engineer', 'Leader', 'Puzzle Solver', 'Explorer', 'Gamer', 'Creator', 'Foodie', 'Loyal' ];
  const classes = useStyles();
  return (
    <section className={`${classes.contentContainer} aboutContainer`}>
    <section className='homeContainer'>
      <h2 id='titleName'>Sam Boyle</h2>
      <TypingEffect id="sentencesTyped"data={sentences} delay={2000} />
    </section>
    </section>
  );
};

export default Home;
