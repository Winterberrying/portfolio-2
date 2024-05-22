import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="m-8 text-4xl font-extrabold tracking-tight text-center md:text-5xl lg:text-6xl dark:text-black">Let's get in touch.</h1>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <AiFillGithub size={30}/>
          <p className="text-2xl font-normal lg:text-xl dark:text-black underline">
            <a href="https://github.com/Limchienhui" target="_blank">GitHub</a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <AiFillLinkedin size={30}/>
          <p className="text-2xl font-normal lg:text-xl dark:text-black underline">
            <a href="https://www.linkedin.com/in/chien-hui-lim-892829279/" target="_blank">LinkedIn</a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <AiFillMail size={30}/>
          <p className="text-2xl font-normal lg:text-xl dark:text-black underline">
            <a href='mailto: limcerise1@gmail.com' target="_blank">Gmail</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact;
