import styled from "styled-components";
import Header from "../components/header";
import Card from "../components/card";
import {projectsObject} from "../components/projects-obj.jsx"

export default function Homepage() {
    return (
      <HomepageContainer>
        <Header />
        {projectsObject.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            icon={project.icon}
          />
        ))}
      </HomepageContainer>
    );
}

const HomepageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
`
