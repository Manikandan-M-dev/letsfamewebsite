import "../Assets/videohomestyle.css";
import vidlets from "../images/LetsFAME Video-per.mp4";
import vidletsres from "../images/LetsFAME video-mbl.mp4"
import imageforbes from "../slideimages/1-forbes.png";
import imagetimesnow from "../slideimages/2-times now.png";
import imagebusiness from "../slideimages/3-business today.png";
import imagemint from "../slideimages/4-mint.png";
import imageindiatoday from "../slideimages/5-india today.png";
import imagecnbc from "../slideimages/6-cnbc.png";
import imagebollywoodcom from "../slideimages/7-bollywoodcom.png";
import imagefilmi from "../slideimages/8-filmi.png";
export default function VideoHome() {
    return (
        <>
            <div className="videoback">
                <video muted loop autoPlay className="vidletsmain">
                    <source src={vidlets} />
                </video>
                <video muted loop autoPlay className="vidletsresmain">
                    <source src={vidletsres} />
                </video>
                <div className="textHead">
                    <div className="textWrapper">
                        <div className="textSlide">
                            <h2>Create visuals with the<br /> finest!</h2>
                            <p className="subtext">Find talented camera professionals,connect with industry experts, and explore filmmaking opportunities.</p>
                        </div>
                        <div className="textSlide">
                            <h2>Craft magic with the<br />masters!</h2>
                            <p className="subtext">Discover exceptional editing talents,network with industry vaterans,and access remarkable opportunities.</p>
                        </div>
                        <div className="textSlide">
                            <h2>Direct dreams with the visionaries!</h2>
                            <p className="subtext">Join the elite ranks,connect with industry experts,and unearth a world os possibilities in the film and media realm.</p>
                        </div>
                        <div className="textSlide">
                            <h2>All the Creative Minds in One Place!</h2>
                            <p className="subtext">Hire Talents,Connect with Industry Proffessionals,Discover Film & Media Opportunities</p>
                        </div>
                        <div className="textSlide">
                            <h2 className="Find-text">Find Your Next Break! Step into the limelight!</h2>
                            <p className="subtext">Direct access to a treasure trove of talents,industry proffessionals,and countries film and media oppotunities.</p>
                        </div>
                        <div className="textSlide">
                            <h2>Create visuals with the<br /> finest!</h2>
                            <p className="subtext">Find talented camera professionals,connect with industry experts, and explore filmmaking opportunities.</p>
                        </div>
                    </div>
                    <button className="btnjoinourcom">JOIN OUR COMMUNITY NOW</button>
                    <div className="textWrap2">
                        <div className="textSlide2">
                            <h2>4.9</h2>
                            <span className="subtext">App Rating</span>
                        </div>
                    </div>
                    <div className="featured-slide-main">
                        <div>Featured in&nbsp;</div>
                        <div className="f-slide">
                            <div className="slidelogo">
                                <img src={imageforbes} alt="" />
                                <img src={imagetimesnow} alt="" />
                                <img src={imagebusiness} alt="" />
                                <img src={imagemint} alt="" />
                                <img src={imageindiatoday} alt="" />
                                <img src={imagecnbc} alt="" />
                                <img src={imagebollywoodcom} alt="" />
                                <img src={imagefilmi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}