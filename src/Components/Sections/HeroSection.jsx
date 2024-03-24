import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = ({ page }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden z-10 pt-28 md:pt-32 xl:pt-36"
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
            Revolutionizing Education
            <br />
            <div className="neww mt-5">
              <span className="head-p text-center">
                {" "}
                AI Insights for Exceptional Student Report
              </span>
            </div>
          </h1>
          <p
            className="max-w-[500px] mx-auto mt-12 mb-9 font-medium md:text-lg text-gray-400 relative "
            id="lild"
          >
            Experience education redefined. Our AI analyzes reports with
            precision, offering personalized insights. Elevate learning
            outcomes effortlessly with cutting-edge image processing and NLP
            technologies.
          </p>
          {/*<div className="flex flex-wrap justify-center items-center gap-8">*/}
          <Link
            to={page}
            className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
            disabled={true}
          >
            Get Started
          </Link>
          {/*<InstallButton />*/}
          {/*</div>*/}
        </div>
      </div>
      <div className="pt-10 opacity-80">
        <img className="mx-auto" src="hero.svg" alt="hero" />
      </div>
    </section>
  )
}

export default HeroSection