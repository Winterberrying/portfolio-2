import React, { Suspense, useState, useRef, useEffect } from 'react';
import Modal from '../components/Modal';
import { About, Contact, Hobbies, People, Projects } from '.';
import Loader from '../components/Loader';
import { AiOutlineClose } from 'react-icons/ai';
import Navbar from '../components/Navbar';
import { BubbleChat } from 'flowise-embed-react'

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Home = () => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isHobbyModalOpen, setIsHobbyModalOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const splineObject = useRef();
  const [isLoading, setIsLoading] = useState(true);

  const closeModals = () => {
    setIsAboutModalOpen(false);
    setIsContactModalOpen(false);
    setIsHobbyModalOpen(false);
    setIsPhotoModalOpen(false);
    setIsProjectModalOpen(false);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
    splineObject.current.emitEvent('keyDown', 'Mobile');
    console.log('Return Home');
  };

  const closeAboutModal = () => {
    setIsAboutModalOpen(false);
    splineObject.current.emitEvent('keyDown', 'shelf_simple');
    console.log('Return Home');
  };

  const closeHobbyModal = () => {
    setIsHobbyModalOpen(false);
    splineObject.current.emitEvent('keyDown', 'Guitar');
    console.log('Return Home');
  };

  const closePhotoModal = () => {
    setIsPhotoModalOpen(false);
    splineObject.current.emitEvent('keyDown', 'photo-2');
    console.log('Return Home');
  };

  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
    splineObject.current.emitEvent('keyDown', 'pc');
    console.log('Return Home');
  };

  const openAboutModal = () => {
    closeModals();
    setIsAboutModalOpen(true);
  };

  const openContactModal = () => {
    closeModals();
    setIsContactModalOpen(true);
  };

  const openHobbyModal = () => {
    closeModals();
    setIsHobbyModalOpen(true);
  };

  const openPhotoModal = () => {
    closeModals();
    setIsPhotoModalOpen(true);
  };

  const openProjectModal = () => {
    closeModals();
    setIsProjectModalOpen(true);
  };

  const onLoad = (spline) => {
    setIsLoading(false);
    splineObject.current = spline;
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      spline.setZoom(0.5);
    } else {
      spline.setZoom(1);
    }
  };

  const onMouseDown = (e) => {
    if (e.target.name === 'shelf_simple') {
      console.log('Shelf has been clicked!');
      setTimeout(() => {
        setIsAboutModalOpen(true);
      }, 3100);
    }
    if (e.target.name === 'Mobile') {
      console.log('Mobile has been clicked!');
      setTimeout(() => {
        setIsContactModalOpen(true);
      }, 3000);
    }
    if (e.target.name === 'Guitar') {
      console.log('Guitar has been clicked!');
      setTimeout(() => {
        setIsHobbyModalOpen(true);
      }, 3000);
    }
    if (e.target.name === 'photo-2') {
      console.log('Photo has been clicked!');
      setTimeout(() => {
        setIsPhotoModalOpen(true);
      }, 3000);
    }
    if (e.target.name === 'pc') {
      console.log('PC has been clicked!');
      setTimeout(() => {
        setIsProjectModalOpen(true);
      }, 3000);
    }
  };

  return (
    <div>
      <Navbar openAboutModal={openAboutModal} openContactModal={openContactModal} openHobbyModal={openHobbyModal} openPeopleModal={openPhotoModal} openProjectModal={openProjectModal}/>
      <section className="w-full h-screen relative">
        {isLoading && <Loader />}
        <Spline 
          scene="https://prod.spline.design/QQIbkWyjcZPVN9L4/scene.splinecode" 
          onMouseDown={onMouseDown} 
          onLoad={onLoad} 
        />
      </section>
      <BubbleChat
            chatflowid="faf8ef01-2c0e-4af1-89b5-d3ab4e9aaeff"
            apiHost="https://flowise-i9q4.onrender.com"
            theme={{    
              button: {
                  backgroundColor: '#aabfb8',
                  right: 20,
                  bottom: 20,
                  size: 48,
                  dragAndDrop: true,
                  iconColor: 'white',
                  // customIconSrc: '../public/chat.svg',
                  autoWindowOpen: {
                      autoOpen: true,
                      openDelay: 2,
                      autoOpenOnMobile: false
                  }
              },
              tooltip: {
                  showTooltip: true,
                  tooltipMessage: 'Hi There 👋!',
                  tooltipBackgroundColor: 'black',
                  tooltipTextColor: 'white',
                  tooltipFontSize: 16
              },
              disclaimer: {
                  title: 'Disclaimer',
                  message: "By using this chatbot, you agree to the <a target=\"_blank\" href=\"https://flowiseai.com/terms\">Terms & Condition</a>",
                  textColor: 'black',
                  buttonColor: '#3b82f6',
                  buttonText: 'Start Chatting',
                  buttonTextColor: 'white',
                  blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)',
                  backgroundColor: 'white'
              },
              customCSS: ``,
              chatWindow: {
                  showTitle: true,
                  showAgentMessages: true,
                  title: 'Flowise Bot',
                  // titleAvatarSrc: '../public/chat.svg',
                  welcomeMessage: "Hello! This is Chien Hui's Bot! Ask Me Anything!",
                  errorMessage: 'This is a custom error message',
                  backgroundColor: '#ffffff',
                  backgroundImage: 'enter image path or link',
                  height: 700,
                  width: 400,
                  fontSize: 16,
                  starterPrompts: [
                      "Tell me more about Chien Hui"
                  ],
                  starterPromptFontSize: 15,
                  clearChatOnReload: false,
                  sourceDocsTitle: 'Sources:',
                  renderHTML: true,
                  botMessage: {
                      backgroundColor: '#f7f8ff',
                      textColor: '#303235',
                      showAvatar: false,
                      avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png'
                  },
                  userMessage: {
                      backgroundColor: '#aabfb8',
                      textColor: '#ffffff',
                      showAvatar: false,
                      avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
                  },
                  textInput: {
                      placeholder: 'Type your question',
                      backgroundColor: '#ffffff',
                      textColor: '#303235',
                      sendButtonColor: '#aabfb8',
                      maxChars: 50,
                      maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                      autoFocus: true,
                      sendMessageSound: true,
                      sendSoundLocation: 'send_message.mp3',
                      receiveMessageSound: true,
                      receiveSoundLocation: 'receive_message.mp3'
                  },
                  feedback: {
                      color: '#303235'
                  },
                  dateTimeToggle: {
                      date: true,
                      time: true
                  },
                  footer: {
                      textColor: '#303235',
                      text: 'Powered by',
                      company: 'Flowise',
                      companyLink: 'https://flowiseai.com'
                  }
              }
            }}
      />
      <Modal isOpen={isAboutModalOpen}>
        <div className="flex flex-col h-full m-4 md:m-16 lg:ml-56 lg:mr-56">
          <div className="flex justify-end">
            <button className="sticky top-0 right-0 bg-none border-none cursor-pointer z-10 p-2 m-2 bg-white/80 rounded-full hover:bg-white transition" onClick={closeAboutModal}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <About />
        </div>
      </Modal>
      <Modal isOpen={isContactModalOpen}>
        <div className="flex flex-col h-full m-4 md:m-16 lg:ml-56 lg:mr-56">
          <div className="flex justify-end">
            <button className="sticky top-0 right-0 bg-none border-none cursor-pointer z-10 p-2 m-2 bg-white/80 rounded-full hover:bg-white transition" onClick={closeContactModal}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <Contact />
        </div>
      </Modal>
      <Modal isOpen={isHobbyModalOpen}>
        <div className="flex flex-col h-full m-4 md:m-16 lg:ml-56 lg:mr-56">
          <div className="flex justify-end">
            <button className="sticky top-0 right-0 bg-none border-none cursor-pointer z-10 p-2 m-2 bg-white/80 rounded-full hover:bg-white transition" onClick={closeHobbyModal} onTouchStart={closeHobbyModal}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <Hobbies />
        </div>
      </Modal>
      <Modal isOpen={isPhotoModalOpen}>
        <div className="flex flex-col h-full m-4 md:m-16 lg:ml-56 lg:mr-56">
          <div className="flex justify-end">
            <button className="sticky top-0 right-0 bg-none border-none cursor-pointer z-10 p-2 m-2 bg-white/80 rounded-full hover:bg-white transition" onClick={closePhotoModal}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <People />
        </div>
      </Modal>
      <Modal isOpen={isProjectModalOpen}>
        <div className="flex flex-col h-full m-4 md:m-16 lg:ml-56 lg:mr-56">
          <div className="flex justify-end">
            <button className="sticky top-0 right-0 bg-none border-none cursor-pointer z-10 p-2 m-2 bg-white/80 rounded-full hover:bg-white transition" onClick={closeProjectModal}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <Projects />
        </div>
      </Modal>
    </div>
  );
};

export default Home;
