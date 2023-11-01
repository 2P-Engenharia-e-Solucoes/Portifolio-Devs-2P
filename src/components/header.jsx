import styled from 'styled-components';

export default function Header() {
    return (
      
        <HeaderContainer>
            <h1>Portifólio de Projetos</h1>
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
    background-color: white;
    top: 0;
    left: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
`







