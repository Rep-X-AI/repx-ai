import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import Footer from "../Components/Footer";
import TeamSection from "../Components/TeamSection";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import FeaturesSection from "../Components/FeaturesSection";
import Navbar from "../Components/Navbar";

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

      <Footer />
    </>
  );
};

export default Home;
