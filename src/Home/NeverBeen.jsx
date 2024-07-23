import { Container } from "react-bootstrap";
import "../Assets/CreativeSkillimgandneverbeen.css";
import phone1 from "../images/phone1.webp";
import phone2 from "../images/phone2.webp";
import phone3 from "../images/phone3.webp";
import phone4 from "../images/phone4.webp";
import phone5 from "../images/phone5.webp";
import phone6 from "../images/phone6.webp";
import planimg from "../images/plans@2x.webp";
import tickicon from "../images/ticklogo.svg";
import premiumlogoLF from "../images/premiumlogoLF.svg";
import premiumprologo from "../images/premiumprologo.svg";

export default function NeverBeen() {
    return (
        <>
            <Container>
                <h1 className="neverbeenContent">It's never been this easy before</h1>
                <div className="phoneimgs">
                    <div className="phonesec1">
                        <div data-aos="flip-up" data-aos-duration="1000">
                            <img src={phone1} alt="mobileimage" className="phoneimgall" />
                        </div>
                        <p>Search & find anyone globally in Media & Entertainment</p>

                    </div>
                    <div className="phonesec2">
                        <div data-aos="flip-up" data-aos-duration="1000">
                            <img src={phone2} alt="mobileimage" className="phoneimgall" />
                        </div>
                        <p>Check out which director, artist, technician viewed your profile</p>
                    </div>
                </div>
                <div className="phoneimgs">
                    <div className="phonesec1">
                        <div data-aos="flip-up" data-aos-duration="1000">
                            <img src={phone3} alt="" className="phoneimgall" />
                        </div>
                        <p>Get personalised analytics for your profile</p>
                    </div>
                    <div className="phonesec2">
                        <div data-aos="flip-up" data-aos-duration="1000">
                            <img src={phone4} alt="" className="phoneimgall" />
                        </div>
                        <p>Get a personalised dashboard for all your<br />casting calls</p>
                    </div>
                </div>
                <div className="phoneimgs">
                    <div className="phonesec1">
                        <div data-aos="flip-up" data-aos-duration="1000">
                            <img src={phone5} alt="" className="phoneimgall" />
                        </div>
                        <p>Hire talents directly by posting your<br />casting calls</p>
                    </div>
                    <div className="phonesec2">
                        <div data-aos="flip-up" data-aos-duration="1000">
                            <img src={phone6} alt="" className="phoneimgall" />
                        </div>
                        <p>Apply for film & media opportunities directly</p>
                    </div>
                </div>
            </Container>
            <div className="choose-plan">
                <div className="profile-plan">
                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <img src={planimg} alt="planimgs" className="plansimagehome" />
                    </div>
                    <div className="profile-plan-content">
                        <h1>Choose your plan.</h1>
                        <h3>Unlimited Access.</h3>
                        <h3>For a whole year.</h3>
                        <button>GET STARTED NOW</button>
                        <p>Plan auto renews for ₹999/ year until cancelled.</p>
                    </div>
                </div>
                <div className="plandetails">
                    <ul className="ulOne">
                        <li><div className="ulOne-head"></div></li>
                        <div className="ulOne-subcontent">
                            <li>Search for Anyone</li>
                            <li>Setup Your Online LetsFame Profile</li>
                            <li>Share Your Profile with Anyone</li>
                            <li>Post Job Calls</li>
                            <li>Get displayed first</li>
                            <li>Get blue tick verification</li>
                            <li>Get displayed on top</li>
                            <li>Access to connect with everyone</li>
                            <li>Apply for job Calls</li>
                            <li>Personalized Analytics Dashboard for your profile and posts</li>
                            <li>See who viewed your profile</li>
                            <li>Profile Reachability</li>
                            <li>Suggestions only from verified profiles</li>
                            <li>Personalized Analytics<br />Dashboard for your Job Calls</li>
                            <li>Ads free experience</li>
                        </div>
                    </ul>
                    <ul className="ulTwo">
                        <li><div className="ulTwo-head">Free</div></li>
                        <div className="ulTwo-subcontent">
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li>2x</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li><button className="plansBtnHome">Get Started</button></li>
                        </div>
                    </ul>
                    <ul className="ulTwo">
                        <li><div className="ulTwo-head">
                            <div><img src={premiumlogoLF} alt="" />&nbsp;Premium</div>
                            <p className="text-secondary text-decoration-line-through mb-0 mt-1">₹2499 / year</p>
                            <h6 className="mt-0 mb-1">₹999 / year</h6>
                            <p className="ribrecommend">Recommended</p>
                        </div></li>
                        <div className="ulTwo-subcontent">
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li></li>
                            <li></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li>4x</li>
                            <li></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li></li>
                            <li><button className="plansBtnHome">Get Started</button></li>
                        </div>
                    </ul>
                    <ul className="ulTwo">
                        <li><div className="ulTwo-head">   
                            <div><img src={premiumprologo} alt="" />&nbsp;Premium Pro</div>
                            <p className="text-secondary text-decoration-line-through mb-0 mt-1">₹6299 / year</p>
                            <h6 className="mt-0 mb-4">₹2499 / year</h6>
                        </div></li>
                        <div className="ulTwo-subcontent">
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li>upto 10x</li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><img src={tickicon} alt="" /></li>
                            <li><button className="plansBtnHome">Get Started</button></li>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
}