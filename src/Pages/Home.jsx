import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Boards from "../Components/Boards";
import CTA from "../Components/CTA"
import Features from "../Components/Features"
import "../stylesheets/about.css";
import "../stylesheets/Animation.css";
import ContactUs from "../Components/ContactUs";
import Whatsapp from "../Components/Whatsapp";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";

function Home() {
    return(
        <>
        <Header/>
        <Hero/>
        <Whatsapp/>
        <Boards/>
        <AboutUs/>
        <CTA/>
        <Features/>
        <ContactUs/>
        <Footer/>
        </>
    )
}
export default Home