import TrackIt from "../assets/trackit.gif";
import Cineflex from "../assets/cineflex.gif";
import MyWallet from "../assets/mywallet.gif";
import Html from "../assets/html.png"
import Css from "../assets/css.png"
import ReactIcon from "../assets/react.png"
import JavaScript from "../assets/javascript.png"
import MongoDB from "../assets/mongodb.png"
import Postgres from "../assets/postgres.webp" 
import MeCansei from "../assets/mecansei.gif"
import TESTE from "../assets/TESTE.png"

export const projectsObject = [
    {
        title: "MyWallet",
        imageMobile: MyWallet,
        imageDesktop: TESTE,
        technologies: "React, MongoDB, JavaScript, HTML, CSS",
        icon: [
            ReactIcon, MongoDB, JavaScript, Html, Css          
        ], 
        description: "Aplicativo Web para controle de finanças"
    },
    {
        title: "Me Cansei",
        imageMobile: MeCansei,
        imageDesktop: TESTE,
        technologies: "React, PostgresSQL, JavaScript, HTML, CSS ",
        icon: [
            ReactIcon, Postgres, JavaScript, Html, Css          
        ], 
        description: "Aplicativo Web que simula um site de venda de produtos usados"
    },
    {
        title: "Track-It",
        imageMobile: TrackIt,
        imageDesktop: TESTE,
        technologies: "React, JavaScript, HTML, CSS",
        icon: [
            ReactIcon, JavaScript, Html, Css,          
        ], 
        description: "Aplicativo Web de acompanhamento de hábitos"
    },
    {
        title: "Cineflex",
        imageMobile: Cineflex,
        imageDesktop: TESTE,
        technologies: "React, JavaScript, HTML, CSS",
        icon: [
            ReactIcon, JavaScript, Html, Css,          
        ], 
        description: "Aplicativo Web para reservas de ingresso e assento de cinema"
    },

]