
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar  from "./Pages/NavBar";
import HomePage  from "./Pages/HomePage.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import HowItsWorks from "./Pages/HowItsWorks.jsx";
import PlansPage from "./Pages/PlansPage.jsx";
import ReadOurBlog from "./Pages/ReadOurBlog.jsx"; 
import FaqPage from "./Pages/FaqPage.jsx";
import ContactUsPage from "./Pages/ConatctUsPage.jsx";
import Footer from "./Pages/Footer";
import ThankYou from "./ContactUs/Thankyou.jsx";
export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/howitsworks" element={<HowItsWorks/>}/>
          <Route path="/plans" element={<PlansPage/>}/>
          <Route path="/readourblog" element={<ReadOurBlog/>}/>
          <Route path="/faq" element={<FaqPage/>}/>
          <Route path="/contactus" element={<ContactUsPage/>}/>
          <Route path="/thankyou" element={<ThankYou/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </> 
  );
}


