import React, { useState, useEffect } from 'react';
import './typingEffect.css';


const TypingEffect = ({ data, speed = 100, eraseSpeed = 100, delay = 2000 }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (index >= data.length) setIndex(0);

    const typeOrErase = () => {
      if (isDeleting) {
        setText((cur) => cur.slice(0, cur.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % data.length);
        }
      } else {
        setText((cur) => cur + data[index].charAt(cur.length));
        if (text === data[index]) setIsDeleting(true);
      }
    };

    const timer = isDeleting
      ? setTimeout(typeOrErase, eraseSpeed)
      : text === data[index]
      ? setTimeout(typeOrErase, delay)
      : setTimeout(typeOrErase, speed);

    return () => clearTimeout(timer);
  }, [text, index, isDeleting, data, speed, eraseSpeed, delay]);

  return (
    <div className='typing-effect'>
      <span>{text}</span><span className='cursor'>&#124;</span>
    </div>
  );
};

export default TypingEffect
