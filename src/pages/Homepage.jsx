import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "../components/header";
import CardMobile from "../components/cardMobile.jsx";
import CardDesktop from "../components/cardDesktop.jsx";
import { projectsObject } from "../components/projects-obj.jsx";
import { projectObjectDesk } from "../components/projects-obj.jsx";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { MdPhoneIphone, MdLaptop } from "react-icons/md";


export default function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState("mobile");

 
  const gifRefs = useRef([]);

  
  useEffect(() => {
    projectsObject.forEach((project, index) => {
      const img = new Image();
      img.src = project.imageMobile;
      img.onload = () => {
        gifRefs.current[index] = img;
      };
    });
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < projectsObject.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projectsObject.length - 1
    );
  };

  const playGif = () => {
    if (gifRefs.current[currentIndex]) {
      gifRefs.current[currentIndex].play();
    }
  };

  const pauseGif = () => {
    if (gifRefs.current[currentIndex]) {
      gifRefs.current[currentIndex].pause();
    }
  };

  return (
    <HomepageContainer>
      <Header />
      <DeviceSelector>
        <DeviceButton
          selected={selectedDevice === "mobile"}
          onClick={() => setSelectedDevice("mobile")}
        >
          <MdPhoneIphone size={20} />
        </DeviceButton>
        <DeviceButton
          selected={selectedDevice === "desktop"}
          onClick={() => setSelectedDevice("desktop")}
        >
          <MdLaptop size={20} />
        </DeviceButton>
      </DeviceSelector>
      <CarouselContainer>
        <NavButton onClick={prevSlide}>
          <MdArrowBack size={60} />
        </NavButton>
        {selectedDevice === "mobile" ? (
          <CardMobile
            image={projectsObject[currentIndex].imageMobile}
            title={projectsObject[currentIndex].title}
            description={projectsObject[currentIndex].description}
            technologies={projectsObject[currentIndex].technologies}
            icon={projectsObject[currentIndex].icon}
          />
        ) : (
          <CardDesktop
            image={projectObjectDesk[currentIndex].imageDesktop}
            title={projectObjectDesk[currentIndex].title}
            description={projectObjectDesk[currentIndex].description}
            technologies={projectObjectDesk[currentIndex].technologies}
            icon={projectObjectDesk[currentIndex].icon}
          />
        )}
        <NavButton onClick={nextSlide}>
          <MdArrowForward size={60} />
        </NavButton>
      </CarouselContainer>
    </HomepageContainer>
  );
}

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  min-width: 100vw;
  @media (max-width: 650px) {
    max-width: 414px;
    min-width: 414px;
  }
`;

const DeviceSelector = styled.div`
  display: flex;
  position: fixed;
  top: 100px;
  right: 10px;
  display: flex;
  align-items: left;
`;

const DeviceButton = styled.button`
  background-color: ${(props) => (props.selected ? "#174F80" : "transparent")};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5%;
  width: 60px;
  height: 60px;
  margin-right: 10px;
 

  svg {
    fill: ${(props) => (props.selected ? "#fff" : "#174F80")};
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 896px;
`;

const NavButton = styled.button`
  z-index: 10;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #174F80;
    &:hover {
      fill: #007bff;
      transform: scale(1.05); 
      background-color: transparent;
    }
  }
`;
