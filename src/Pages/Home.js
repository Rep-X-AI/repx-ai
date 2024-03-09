import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { currentUser } = useAuth();
  const page = currentUser ? "/dashboard" : "/signup";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="fixed z-50 mb-5 w-full px-4 lg:px-6 py-2.5 bg-transparent backdrop-blur-xl">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <img
                src="/repx-logo.webp"
                className="mr-0 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center sm:pt-2 text-xl font-bold tracking-wide whitespace-nowrap text-white">
                epx AI
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <Link
                to={page}
                className="button-border-gradient relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-5 mx-3 shadow-button hover:button-gradient-hover"
              >
                Get started
              </Link>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden  text-gray-400 outline-none border-none"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={handleMenuToggle}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {isMenuOpen && (
              <div
                className="justify-between lg:hidden items-center w-full mt-2 pb-4 px-2.5 rounded-lg border-b-2"
                id="mobile-menu-2"
                style={{ backgroundColor: "rgb(3 0 23)" }}
              >
                <ul className="flex flex-col mt-4 font-medium space-y-3">
                  <li>
                    <a
                      href="#home"
                      className="block py-2 pr-4 pl-3 text-white rounded text-center hover:nav-gradient nav-gradient"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="block py-2 pr-4 pl-3 text-white rounded text-center"
                      aria-current="page"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="block py-2 pr-4 pl-3 text-white rounded text-center"
                      aria-current="page"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#team"
                      className="block py-2 pr-4 pl-3 text-white rounded text-center"
                      aria-current="page"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block py-2 pr-4 pl-3 text-white rounded text-center"
                      aria-current="page"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#home"
                    className="block px-3 rounded hover:nav-gradient nav-gradient text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="block px-3 rounded text-gray-400">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="block px-3 rounded text-gray-400"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a href="#team" className="block px-3 rounded text-gray-400">
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block px-3 rounded text-gray-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden z-10 pt-28  md:pt-32 xl:pt-40"
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
              Revolutionizing Education: AI Insights for Exceptional Student
              Reports
            </h1>
            <p className="max-w-[500px] mx-auto mb-9 font-medium md:text-lg text-gray-400">
              Experience education redefined. Our AI analyzes reports with
              precision, offering personalized insights. Elevate learning
              outcomes effortlessly with cutting-edge image processing and NLP
              technologies.
            </p>
            <Link
              to={page}
              className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="pt-10 opacity-80">
          <img className="mx-auto" src="hero.svg" alt="hero" />
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="overflow-hidden pt-16 md:pt-24 xl:pt-32">
        <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center">
            <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-6 rounded-full">
              <img src="/icon-title.svg" alt="icon" />
              <span className="hero-subtitle-text">
                {" "}
                Some of Main Features{" "}
              </span>
            </span>
            <h2 className="text-white mb-4.5 text-2xl font-bold tracking-wide sm:text-4xl xl:text-heading-2">
              Key Features of Our Tool
            </h2>
            <p className="max-w-[714px] mx-auto mb-5 font-medium text-gray-400/90 mt-2.5">
              Our AI writing tool is designed to empower you with exceptional
              writing capabilities, making the writing process more efficient,
              accurate, and enjoyable.
            </p>
          </div>
          <div className="relative">
            <div className="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 lg:-translate-x-1/3 lg:left-1/4 hidden lg:block"></div>
            <div className="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 right-1/2 -translate-y-1/2 lg:right-[8.3%] hidden lg:block"></div>

            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <div className="relative rounded-lg group overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                  <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                  <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                    <img src="/icon-01.svg" alt="icon" />
                  </span>
                  <h4 className="font-semibold text-lg text-white mb-4">
                    Intelligent Writing Assistance
                  </h4>
                  <p className="font-medium text-gray-400/80">
                    Our AI writing tool analyzes your content, suggests
                    improvements,
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/3">
                <div className="group rounded-lg relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                  <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                  <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                    <img src="/icon-02.svg" alt="icon" />
                  </span>
                  <h4 className="font-semibold text-lg text-white mb-4">
                    Grammar and Spell Check
                  </h4>
                  <p className="font-medium text-gray-400/80">
                    Say goodbye to embarrassing typos and grammar mistakes
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/3">
                <div className="group rounded-lg relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                  <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                  <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                    <img src="/icon-03.svg" alt="icon" />
                  </span>
                  <h4 className="font-semibold text-lg text-white mb-4">
                    Plagiarism Detection
                  </h4>
                  <p className="font-medium text-gray-400/80">
                    Originality is key, and our AI writing tool helps you
                    maintain it
                  </p>
                </div>
              </div>
            </div>
            <div className="features-row-border w-full h-[1px]"></div>

            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <div className="group rounded-lg relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                  <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                  <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                    <img src="/icon-04.svg" alt="icon" />
                  </span>
                  <h4 className="font-semibold text-lg text-white mb-4">
                    Voice to Text Conversion
                  </h4>
                  <p className="font-medium text-gray-400/80">
                    Transform your spoken words into written text easily &amp;
                    effortlessly
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/3">
                <div className="group rounded-lg relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                  <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                  <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                    <img src="/icon-05.svg" alt="icon" />
                  </span>
                  <h4 className="font-semibold text-lg text-white mb-4">
                    Style and Tone Adaptation
                  </h4>
                  <p className="font-medium text-gray-400/80">
                    Whether you need a professional, or positive tone it has
                    everyone
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/3">
                <div className="group rounded-lg relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                  <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                  <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                    <img src="/icon-06.svg" alt="icon" />
                  </span>
                  <h4 className="font-semibold text-lg text-white mb-4">
                    Content Generation
                  </h4>
                  <p className="font-medium text-gray-400/80">
                    Need inspiration or assistance with generating content?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="overflow-hidden min-h-screen pt-16 md:pt-24 xl:pt-32">
        <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center">
            <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-6 rounded-full">
              <img src="/icon-title.svg" alt="icon" />
              <span className="hero-subtitle-text">
                {" "}
                Here are the geniuses{" "}
              </span>
            </span>
            <h2 className="text-white mb-4.5 text-2xl font-bold tracking-wide sm:text-4xl xl:text-heading-2">
              Meet Our Team
            </h2>
            <p className="max-w-[714px] mx-auto mb-5 font-medium text-gray-400/90 mt-2.5">
              Our team is made up of talented and passionate individuals who are dedicated to making a difference in the world of education.
            </p>
          </div>
        </div>

        <div className="mx-auto mb-10 mt-4 flex flex-wrap sm:m-4">
          <div className="mx-auto mb-6 w-full p-4 sm:mb-0 sm:w-1/4 sm:p-10">
            <a href="https://github.com/Rishi2403" rel="noreferrer">
              <div className="mx-auto aspect-square h-48 w-48 overflow-hidden rounded-full border border-zinc-200 shadow-md transition-all duration-150 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 dark:border-zinc-800">
                <img src="/rishi.webp" alt="team1" className="h-48 w-48 rounded-full object-cover object-center" />
              </div>
            </a>
            <h2 className="mt-5 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Rishi Bhattachali
            </h2>
            <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
              Machine Learning
            </p>
          </div>

          <div className="mx-auto mb-6 w-full p-4 sm:mb-0 sm:w-1/4 sm:p-10">
            <a href="https://github.com/priyanshudutta04" rel="noreferrer">
              <div className="mx-auto aspect-square h-48 w-48 overflow-hidden rounded-full border border-zinc-200 shadow-md transition-all duration-150 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 dark:border-zinc-800">
                <img src="/priyangshu.webp" alt="team1" className="h-48 w-48 rounded-full object-cover object-center" />
              </div>
            </a>
            <h2 className="mt-5 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Priyanshu Dutta
            </h2>
            <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
              App Development
            </p>
          </div>

          <div className="mx-auto mb-6 w-full p-4 sm:mb-0 sm:w-1/4 sm:p-10">
            <a href="https://github.com/SatyakiDey75" rel="noreferrer">
              <div className="mx-auto aspect-square h-48 w-48 overflow-hidden rounded-full border border-zinc-200 shadow-md transition-all duration-150 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 dark:border-zinc-800">
                <img src="/satyaki.webp" alt="team1" className="h-48 w-48 rounded-full object-cover object-center" />
              </div>
            </a>
            <h2 className="mt-5 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Satyaki Dey
            </h2>
            <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
              Backend Dev
            </p>
          </div>

          <div className="mx-auto mb-6 w-full p-4 sm:mb-0 sm:w-1/4 sm:p-10">
            <a href="https://github.com/subhadeeproy3902" rel="noreferrer">
              <div className="mx-auto aspect-square h-48 w-48 overflow-hidden rounded-full border border-zinc-200 shadow-md transition-all duration-150 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 dark:border-zinc-800">
                <img src="/subha.webp" alt="team1" className="h-48 w-48 rounded-full object-cover object-center" />
              </div>
            </a>
            <h2 className="mt-5 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Subhadeep Roy
            </h2>
            <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
              Frontend Dev
            </p>
          </div>

          <div className="mx-auto mb-6 w-full p-4 sm:mb-0 sm:w-1/4 sm:p-10">
            <a href="https://github.com/ArunavaCoderEm" rel="noreferrer">
              <div className="mx-auto aspect-square h-48 w-48 overflow-hidden rounded-full border border-zinc-200 shadow-md transition-all duration-150 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 dark:border-zinc-800">
                <img src="/team-01.jpg" alt="team1" className="h-48 w-48 rounded-full object-cover object-center" />
              </div>
            </a>
            <h2 className="mt-5 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Arunava Dutta
            </h2>
            <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
              Backend Dev
            </p>
          </div>

          <div className="mx-auto mb-6 w-full p-4 sm:mb-0 sm:w-1/4 sm:p-10">
            <a href="https://github.com/PretishaSahoo" rel="noreferrer">
              <div className="mx-auto aspect-square h-48 w-48 overflow-hidden rounded-full border border-zinc-200 shadow-md transition-all duration-150 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 dark:border-zinc-800">
                <img src="/pretisha.webp" alt="team1" className="h-48 w-48 rounded-full object-cover object-center" />
              </div>
            </a>
            <h2 className="mt-5 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Pretisha Sahoo
            </h2>
            <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
              Frontend Dev
            </p>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
