{/* <BodyContainer>
<Title>Track-It </Title>
<Subtitle>Aplicativo Web de acompanhamento de hábitos</Subtitle>
<Gif src={TrackIt}/>
<a href="https://projeto-11-track-it-pi.vercel.app/">Clique aqui para testar!</a>
</BodyContainer>
<BodyContainer>
<Title>Track-It </Title>
<Subtitle>Aplicativo de acompanhamento de hábitos</Subtitle>
<a href="https://projeto-11-track-it-pi.vercel.app/">Clique aqui para testar!</a>
</BodyContainer>
<BodyContainer>
<Title>Track-It </Title>
<Subtitle>Aplicativo de acompanhamento de hábitos</Subtitle>
<a href="https://projeto-11-track-it-pi.vercel.app/">Clique aqui para testar!</a>
</BodyContainer>
</HomepageContainer> */}

// create an object array that contains title, image, technologies, icon and description
import TrackIt from "../assets/trackit.gif"
import Cineflex from "../assets/cineflex.gif"
import Html from "../assets/html.png"
import Css from "../assets/css.png"
import ReactIcon from "../assets/react.png"
import JavaScript from "../assets/javascript.png"

export const projectsObject = [
    {
        title: "Track-It",
        image: TrackIt,
        technologies: "React, JavaScript, HTML, CSS",
        icon: [
            "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
            "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
            "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
        ],
        description: "Aplicativo Web de acompanhamento de hábitos"
    },
    {
        title: "Cineflex",
        image: Cineflex,
        technologies: "React, JavaScript, HTML, CSS",
        icon: [
            "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
            "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
            "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
        ], 
        description: "Aplicativo Web para reservas de assento de cinema"
    },

]