import styled from "styled-components";
import React from "react";

export default function Card(props) {
   let imagens = props.icon;
  return (
    <CardContainer>
      <Image src={props.image} />
      <Details>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <Technologies>{props.technologies}</Technologies>
        <IconsContainer>
        {imagens.map((icon, index) => (
          <Icon
            key={index}
            src={icon}
          />
        ))}
        </IconsContainer> 
      </Details>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-width: 300px;
  width: 45%;
  height: 45%;
  max-height: 800px;
  max-width: 800px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s; 
  cursor: pointer; 
  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); 
  }
  @media (max-width: 650px) {
    flex-wrap: wrap;
    max-width: 300px;
  }
`;

const Image = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 10px 10px 0 0;
  @media (max-width: 650px) {
    width: 80%;
    border-radius: 10px 10px 0 0;
    margin-bottom: 20px;
    min-height: 500px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 40%; 
  height: 100%;
  max-height: 100%;
  padding: 5%;
  font-size: 1rem; 
  @media (max-width: 650px) {
    min-height: 200px;
    width: 100%;
  }
  @media (min-width: 650px) {
    min-height: 300px;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Description = styled.h3`
  font-size: 1rem;
`;

const Technologies = styled.h3`
  font-size: 1rem;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const IconsContainer = styled.div`
    display: flex; 
    max-width: 500px;
`