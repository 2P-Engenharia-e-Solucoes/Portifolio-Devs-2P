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

const IconsContainer = styled.div`
    display: flex;
    
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%; 
  width: 80%;
  text-align: left;
  padding: 5%;
  font-size: 1rem; 
`;

const CardContainer = styled.div`
  display: flex;
  width: 50%;
  height: 50%;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s; 
  cursor: pointer; 
  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  }
`;

const Image = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 10px 10px 0 0;
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
  width: 20%;
  height: 20%;
`;
