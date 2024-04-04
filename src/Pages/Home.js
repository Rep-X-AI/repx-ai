import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import Footer from "../Components/Footer";
import TeamSection from "../Components/Sections/TeamSection";
import HeroSection from "../Components/Sections/HeroSection";
import AboutSection from "../Components/Sections/AboutSection";
import FeaturesSection from "../Components/Sections/FeaturesSection";
import Navbar from "../Components/Navbar";
import ContactSection from "../Components/Sections/ContactSection";

const Home = () => {
  const { currentUser } = useAuth();
  const page = currentUser ? "/dashboard" : "/signup";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [activeLink, setActiveLink] = useState("home");

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <Navbar
        activeLink={activeLink}
        isMenuOpen={isMenuOpen}
        handleActiveLink={handleActiveLink}
        handleMenuToggle={handleMenuToggle}
        page={page}
      />

      <HeroSection page={page} />

      <AboutSection />

      <FeaturesSection />

      <TeamSection />

      <ContactSection title="Let's chat - Hit us up !" />

      <Footer />
    </>
  );
};

export default Home;
