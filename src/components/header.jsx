import styled from 'styled-components';

export default function Header() {
    return (
      
        <HeaderContainer>
            <Tittle>Portifólio de Projetos</Tittle>
        </HeaderContainer>
       
    )
}

const HeaderContainer = styled.header`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #174F80;
    top: 0;
    left: 0;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5); 
`

const Tittle = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 650px) {
        font-size: 2rem;
} 
`