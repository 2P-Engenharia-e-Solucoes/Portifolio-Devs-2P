import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import Card from "../components/cardMobile.jsx";
import { projectsObject } from "../components/projects-obj.jsx";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

export default function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <HomepageContainer>
      <Header />
      <CarouselContainer>
        <NavButton onClick={prevSlide}>
          <MdArrowBack size={60} />
        </NavButton>
        <Card
          image={projectsObject[currentIndex].image}
          title={projectsObject[currentIndex].title}
          description={projectsObject[currentIndex].description}
          technologies={projectsObject[currentIndex].technologies}
          icon={projectsObject[currentIndex].icon}
        />
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
    margin-top: 80px;
    min-height: 100vh;
    min-width: 100vw;
    @media (max-width: 650px) {
      max-width: 414px;
      min-width: 414px;
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
      fill: #007bff;
    }
`;