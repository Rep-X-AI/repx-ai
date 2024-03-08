import React from "react";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { currentUser } = useAuth();
  const page = currentUser ? "/dashboard" : "/signup";
  return (
    <>
      {/*<div classNameName="relative" id="home">
        <div
          aria-hidden="true"
          classNameName="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-55"
        >
          <div classNameName="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
          <div classNameName="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
  </div>*/}
      <section
        id="home"
        className="relative overflow-hidden z-10 pt-35 md:pt-40 xl:pt-45"
      >
        <div className="max-w-7xl mx-auto">
          <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28">
            <div className="absolute -z-1 -top-[128%] sm:-top-[107%] xl:-top-[73%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1282px] rounded-full max-w-[1282px]"></div>
            <div className="absolute -z-1 -top-[112%] sm:-top-[93%] xl:-top-[62%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1046px] rounded-full max-w-[1046px]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10">
              <img src="/blur-02.svg" alt="blur" className="max-w-none" />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10">
              <img src="/blur-01.svg" alt="blur" className="max-w-none" />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
          <div className="text-center">
            <a
              href="/#"
              className="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 font-medium text-sm inline-flex items-center gap-2 py-2 px-5 rounded-full"
            >
              <img src="/icon-title.svg" alt="icon" />
              <span className="hero-subtitle-text">
                Your Ultimate Report Evaluator!
              </span>
            </a>
            <h1 className="text-white mb-6 text-3xl font-bold sm:text-5xl xl:text-5xl">
            Revolutionizing Education: AI Insights for Exceptional Student Reports
            </h1>
            <p className="max-w-[500px] mx-auto mb-9 font-medium md:text-lg text-gray-400">
            Experience education redefined. Our AI analyzes reports with precision, offering personalized insights. Elevate learning outcomes effortlessly with cutting-edge image processing and NLP technologies.
            </p>
            <Link
              to={page}
              className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="pt-10">
          <img className="mx-auto" src="hero.svg" alt="hero" />
        </div>
      </section>
    </>
  );
};

export default Home;
