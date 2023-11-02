import styled from "styled-components";
import Header from "../components/header";
import Card from "../components/card";
import {projectsObject} from "../components/projects-obj.jsx";
import 'swiper/css';
import 'swiper/css/navigation';
import '../components/swiper.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



export default function Homepage() {
    return (
      <HomepageContainer>
        <Header />
        {/* <CardsContainer>
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
        </CardsContainer> */}
        <Swiper 
          slidesPerView={1}
          navigation={true} 
          modules={[Navigation, Pagination] }
          className="swiper"
        >
          {projectsObject.map((project, index) => (
            <SwiperSlide>
              <Card
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                icon={project.icon}
              />
            </SwiperSlide>
          ))}


        </Swiper>
      </HomepageContainer>
    );
}

const CardsContainer = styled.div`
  display: flex;

`

const HomepageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
`
