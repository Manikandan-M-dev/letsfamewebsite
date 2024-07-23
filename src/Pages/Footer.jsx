import "../Assets/Footer.css";
import PremiumProLogo from "../images/premiumprologo.svg";
import Iosfooterimg from "../images/iosfooterimg.svg";
import Andriodfooter from "../images/androidfooterimg.svg";
import Fbfooterlogo  from "../images/fbfooterlogo.svg";
import linkedinfooterlogo from "../images/linkedinfooterlogo.png";
import instafootericon   from "../images/insta-icon.png";
import twitterfootericon from "../images/twitterfooterlogo.svg";
import Youtubefootericon from "../images/youtubefooterlogo.svg";

export default function Footer(){
    return(
        <>
        <footer>
            <div className="footermain container">
                <div className="footercontent1"data-aos="zoom-in"data-aos-duration="1000">
                    <ul>
                        <li>Plans</li>
                        <li>Contact Us</li>
                        <li>User Agreement</li>
                        <li>Privacy Policy</li>
                        <li>Refund Policy</li>
                        <li>Cancellation Policy</li>
                        <li>Cookie Policy</li>
                        <li>Advertise on LetsFAME</li>
                    </ul>
                </div>
                <div className="footercontent2"data-aos="zoom-in"data-aos-duration="1000">
                    <ul>                   
                        <li><img src={PremiumProLogo} alt="PremiumProLogo"  style={{width:"40px",height:"40px"}} className="footerioslogo"/>&nbsp;<span className="footerconcrehead" style={{fontSize:"35px",fontWeight:"550",color:"white"}}>Connecting Creative Minds</span></li>
                    <li><button className="footerbtn">GET STARTED NOW</button></li>
                   <li><p>Available on the App Store and Google Play</p></li>
                   <li className="followfooter"><img src={Iosfooterimg} alt="Ioslogo" className="footerioslogo" />    <img src={Andriodfooter} alt="Androidlogo"className="footerioslogo" /></li><br/>
                   <li className="followfooter"style={{color:"white"}}>Follow us on: <img src={Fbfooterlogo} alt="facebooklogo" style={{width:"25px",height:"25px"}}/> <img src={linkedinfooterlogo} alt="linkedinlogo" style={{width:"25px",height:"25px"}}/> <img src={instafootericon} alt="instagramlogo"style={{width:"25px",height:"25px"}}/> <img src={twitterfootericon} alt="twitterlogo" style={{width:"25px",height:"25px"}}/> <img src={Youtubefootericon} alt="youtubelogo" style={{width:"25px",height:"25px"}}/></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="copyrightfooter">
            Copyright &copy; 2024 LetsFAME. All Rights Reserved.
            </div>
        </footer>
        </>
    );
}