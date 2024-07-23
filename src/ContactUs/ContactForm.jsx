import { useState } from "react";
import "../Assets/contactus.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
    const Messeage = useNavigate();
    const [user, setUser] = useState({
        email: "",
        userComment: ""
    })
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const formSubmisson = (e) => {
        e.preventDefault();
        if (user.email !== "" && user.userComment !== "") {
            axios.post('https://667011c30900b5f872494ed9.mockapi.io/comments', user)
                .then(response => {
                    console.log('Data posted successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error posting data', error);
                });
                Messeage('/thankyou');
            setUser({
                email: "",
                userComment: ""
            });
        }
    };
    return (
        <>
            <div className="contactmain container py-5">
                <div className="contacthead">
                    <h2>We are always here to help you</h2>
                    <p>Let us know how we're doing and what you need help with</p>
                </div>
                <div className="contactform">
                    <form action="" className="contactmainform" onSubmit={formSubmisson}>
                        <label style={{ fontSize: "20px" }}><i className="bi bi-envelope maillogocontact"></i>&nbsp;&nbsp;Mail ID*</label>
                        <input type="email" name="email" required placeholder="enter your e-mail Id"
                            value={user.email} onChange={handleChange} /><br />
                        <label style={{ fontSize: "20px" }}>Comments/Feedback :</label>
                        <textarea cols={20} rows={5} name="userComment" required placeholder="Type Message...."
                            value={user.userComment} onChange={handleChange}></textarea><br />
                        <div><button type="submit">SUBMIT</button></div>
                    </form>
                </div>
            </div>
        </>
    );
}