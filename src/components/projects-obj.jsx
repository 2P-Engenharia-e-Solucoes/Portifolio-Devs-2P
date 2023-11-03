import TrackIt from "../assets/trackit.gif";
import Cineflex from "../assets/cineflex.gif";
import MyWallet from "../assets/mywallet.gif";
import Html from "../assets/html.png"
import Css from "../assets/css.png"
import ReactIcon from "../assets/react.png"
import JavaScript from "../assets/javascript.png"
import MongoDB from "../assets/mongodb.png"
import Axios from "../assets/axios.png"

export const projectsObject = [
    {
        title: "MyWallet",
        image: MyWallet,
        technologies: "React, MongoDB, JavaScript, HTML, CSS",
        icon: [
            ReactIcon, MongoDB, JavaScript, Html, Css          
        ], 
        description: "Aplicativo Web para controle de finanças"
    },
    {
        title: "Track-It",
        image: TrackIt,
        technologies: "React, JavaScript, HTML, CSS",
        icon: [
            ReactIcon, JavaScript, Html, Css, Axios          
        ], 
        description: "Aplicativo Web de acompanhamento de hábitos"
    },
    {
        title: "Cineflex",
        image: Cineflex,
        technologies: "React, JavaScript, HTML, CSS",
        icon: [
            ReactIcon, JavaScript, Html, Css, Axios          
        ], 
        description: "Aplicativo Web para reservas de ingresso e assento de cinema"
    },

]