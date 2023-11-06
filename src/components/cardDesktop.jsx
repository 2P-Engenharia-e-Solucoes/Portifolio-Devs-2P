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
                    {imagens.map((icon, index) => (<Icon key={index} src={icon}/>))}
                </IconsContainer>
            </Details>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    min-width: 400px;
    height: 50%;
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
    min-width: 300px;
    border-radius: 10px 10px 0 0;
`;

const Details = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    text-align: left;
    padding: 5%;
    font-size: 1em; 
    @media (max-width: 650px) {
        min-height: 300px;
    }
`;

const IconsContainer = styled.div`
    display: flex; 
`

const Title = styled.h1`
    font-size: 100px;
    margin-bottom: 10px;
`;

const Description = styled.h3`
    font-size: 1rem;
    margin-bottom: 10px;
`;

const Technologies = styled.h3`
    font-size: 1rem;
    margin-bottom: 10px;
`;

const Icon = styled.img`
    width: 20%;
    height: 20%;
`;
