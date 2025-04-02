import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillInstagram } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="m-8 text-4xl font-extrabold tracking-tight text-center md:text-5xl lg:text-6xl text-black">Let's get in Contact</h1>
      <div className="flex flex-col space-y-4 items-center">
        <div className="flex items-center space-x-4">
          <AiFillGithub size={30}/>
          <p className="text-2xl font-normal lg:text-2xl text-gray-800 underline">
            <a href="https://github.com/Winterberrying" target="_blank">GitHub</a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <AiFillLinkedin size={30}/>
          <p className="text-2xl font-normal lg:text-2xl text-gray-800 underline">
            <a href="https://www.linkedin.com/in/chien-hui-lim-892829279/" target="_blank">LinkedIn</a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <AiFillInstagram size={30}/>
          <p className="text-2xl font-normal lg:text-2xl text-gray-800 underline">
            <a href="https://www.instagram.com/ch.bytes/" target="_blank">Instagram</a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <AiFillMail size={30}/>
          <p className="text-2xl font-normal lg:text-2xl text-gray-800 underline">
            <a href='mailto: chienhui.lim6@gmail.com' target="_blank">chienhui.lim6@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact;
