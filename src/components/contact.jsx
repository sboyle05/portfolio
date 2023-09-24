import React, { useState, useRef } from 'react';
import './contact.css';
import { useStyles } from '../App';
import bird from '../assets/bird.gif';
import LI from '../assets/LI.png';
import github from '../assets/github.png';

const Contact = () => {
	const [showBird, setShowBird] = useState(false);
	const [birdStyle, setBirdStyle] = useState({});
	const classes = useStyles();
	const buttonRef = useRef(null);
	const [formData, setFormData] = useState({
    user_email: '',
    from_name: '',
    message: '',
  });

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setBirdStyle({
        position: 'fixed',
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        animation: 'flyBird 7s forwards',
        width: '120px',
        height: 'auto',
      });
    }

    setShowBird(true);
    setTimeout(() => setShowBird(false), 5000);


    const API_GATEWAY_ENDPOINT = 'https://n1ah3h4xg4.execute-api.us-east-1.amazonaws.com/test/send-email';

    fetch(API_GATEWAY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from_name: formData.from_name,
        user_email: formData.user_email,
        message: formData.message,
    }),
    })
      .then((response) => response.json())
      .then((data) => console.log('Email sent successfully:', data))
      .catch((error) => console.error('Error sending email:', error));

    setFormData({
      from_name: '',
      user_email: '',
      message: '',
    });
  };

	return (
		<section className={`${classes.contentContainer} aboutContainer`}>
			<section className='contactContainer'>
				<h2 className='contactTitle'>Contact</h2>
				<section className='reachOut'>
					<p>
						Reach out via LinkedIn, follow me on Github, or simply shoot me an email
						below.

					</p>
          <section className='contactIcons'>
					<a href='https://www.linkedin.com/in/samboyle12/'>
						<img id='lI' src={LI} alt='linkedIn' />
					</a>
          <a
									href='https://github.com/sboyle05'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img id='githubIconContact' src={github} alt='githubicon'></img>
								</a>
                </section>
				</section>
				<section className='emailContainer'>
        <form onSubmit={handleSubmit}>
        <input
  className='yourName'
  type='text'
  name='from_name'
  placeholder='Your Name'
  value={formData.from_name}
  onChange={handleChange}
  required
/>
    <input
        className='yourEmail'
        type='email'
        name='user_email'
        placeholder='Your Email'
        value={formData.user_email}
        onChange={handleChange}
        required
    />
    <textarea
        className='yourMessage'
        name='message'
        placeholder='Your Message'
        value={formData.message}
        onChange={handleChange}
        required
    />
    <button
        ref={buttonRef}
        id='submitEmail'
        type='submit'
        disabled={!formData.user_email || !formData.message}
    >
        Send
    </button>
    {showBird && <img src={bird} alt='Flying bird' style={birdStyle} />}
</form>
				</section>
			</section>
		</section>
	);
};

export default Contact;
