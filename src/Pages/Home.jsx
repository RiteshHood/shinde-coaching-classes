import React from "react";
import Hero from "../Components/Hero";
import Boards from "../Components/Boards";
import CTA from "../Components/CTA"
import Features from "../Components/Features"
import "../stylesheets/about.css";
import "../stylesheets/Animation.css";
import ContactUs from "../Components/ContactUs";
import Whatsapp from "../Components/Whatsapp";
import AboutUs from "../Components/AboutUs";

function Home() {
    return(
        <>
        <Hero/>
        <Whatsapp/>
        <Boards/>
        <AboutUs/>
        <CTA/>
        <Features/>
        <ContactUs/>
        </>
    )
}
export default Home