import { Container } from "react-bootstrap";
import "../Assets/cardblog.css";
import Instalogo from "../images/insta-icon.png";
import Insta1img from "../images/insta01.jpg";
import Insta2img from "../images/insta02.jpg";
import Insta3img from "../images/insta03.jpg";
import Insta4img from "../images/insta04.jpg";

export default function Insta(){
    return(
        <>
        <Container>
        <div className="instamain container">
            <div className="instahead">The Latest</div>
            <div className="instalogobtn">
                <div><img src={Instalogo} alt="instagramlogo" />&nbsp;<span style={{color:"rgb(242,192,95)",fontWeight:550}}>letsfameapp</span></div>
                <div><button>Follow on Instagram</button></div>
            </div>
            <div className="instaimages">   
                <img src={Insta1img} alt="" />
                <img src={Insta2img} alt="" />
                <img src={Insta3img} alt="" />
                <img src={Insta4img} alt="" />
            </div>
        </div>
        </Container>
        </>
    );
}