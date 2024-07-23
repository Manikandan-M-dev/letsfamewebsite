import "../Assets/CreativeSkillimgandneverbeen.css";
import mobilescol1 from "../images/sec-2img.webp";
import mobilescol2 from "../images/sec-2img2.webp";
import cutlogo from "../images/cutlogo.svg";
import connectlogo from "../images/connectlogo.svg";
import bulblogo from "../images/bulblogo.svg";
import marketlogo from "../images/marketlogo.svg";
import greylogoletsfame from "../images/greylogoletsfame.svg"

export default function CreativeSkillimg() {
  return (
    <>
      <div className="skillimg">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <img src={mobilescol1} alt=""/> 
        </div>
        <div className="contentsec2">
          <h1>All your creative skills &<br />experience in one place</h1>
        </div>
        <div data-aos="fade-up"
          data-aos-duration="2000">
          <img src={mobilescol2} alt="" />
        </div>
      </div>
      <div className="connecttalent">
        <div className="contentTalent">
          <p className="contentTalentHead">Connecting Talents, Influencers, Film Makers & Media Houses globally.</p>
          <div className="subcontent-main">
            <div className="subcontent-talent">
              <img src={cutlogo} alt="cutlogo" style={{ width: "30px", height: "30px" }} />&nbsp;&nbsp;Discover Top Talents
            </div>
            <div className="subcontent-talent">
              <img src={connectlogo} alt="cutlogo" style={{ width: "30px", height: "30px" }} />&nbsp;&nbsp;Collaborate with Creators
            </div>
            <div className="subcontent-talent">
              <img src={bulblogo} alt="cutlogo" style={{ width: "30px", height: "30px" }} />&nbsp;&nbsp;Apply for Media & Film Industry Jobs
            </div>
            <div className="subcontent-talent">
              <img src={marketlogo} alt="cutlogo" style={{ width: "30px", height: "30px" }} />&nbsp;&nbsp;Network with Industry Professionals
            </div>
                <button>Join LetsFAME</button>
          </div>
        </div>
        <div className="connectTalentlogo">
          <div><div data-aos="zoom-in-left" data-aos-duration="2000"><img src={greylogoletsfame} alt="" /></div>  </div>
        </div>
      </div>
    </>
  );
}