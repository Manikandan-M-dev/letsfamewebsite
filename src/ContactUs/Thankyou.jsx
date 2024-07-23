import Thanksmsg from "../images/thankyouimg.jpg"
import "../Assets/contactus.css"
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
    const homepage=useNavigate();
    const handleClick=()=>{
       homepage('/');
    }
    return (
        <>
            <div className="thanksmsg container py-5">
                <div className="messeagecard fluid-container">
                    <div className="thanksimg">
                    <img src={Thanksmsg} alt="" style={{ width: "75%",height:"auto"}} />
                    </div>
                    <p>Thanks for Contacting Us. We will Get Back to You Soon!</p>
                    <div><button onClick={handleClick}>Go Back to Home Page</button></div>
                </div>
            </div>
        </>
    );
}