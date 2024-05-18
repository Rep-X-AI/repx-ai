import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const AboutSection = () => {
  return (
    <section id="about" className="overflow-hidden pt-28 md:pt-32 xl:pt-36" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="50">
      <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center">
          <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-6 rounded-full">
            <img src="/icon-title.svg" alt="icon" />
            <span className="hero-subtitle-text">
              {" "}
              Know more about our website{" "}
            </span>
          </span>
          <h2 className="text-white mb-4.5 text-2xl font-bold tracking-wide sm:text-4xl xl:text-heading-2">
            About Us
          </h2>
          <p className="max-w-[714px] mx-auto mb-5 font-medium text-gray-400/90 mt-2.5">
            Swamped with complex reports and tight deadlines ? Unleash the
            power of AI. Our platform streamlines report evaluation empowering
            one to make data-driven decisions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="relative rounded-lg group overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
              <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
              <h4 className="text-xl font-bold tracking-wide mb-4" id="txtab">
                Using as a teacher ?
              </h4>
              <ul id="ul" className="font-medium text-gray-300/80 text-left">
                <li>
                  Upon registering as a teacher, you'll be greeted by your
                  dedicated teacher dashboard.
                </li>
                <li>
                  From your teacher dashboard, you can effortlessly create
                  classes and assign report assignments.
                </li>
                <li>
                  Share your class with students using a unique class code.
                </li>
                <li>
                  AI-powered grading assists you in assigning accurate marks
                  to student reports.
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="group rounded-lg relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
              <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
              <h4
                className="text-xl font-bold tracking-wide mb-4 text-center"
                id="txtab"
              >
                Using as a student ?
              </h4>
              <ul id="ul" className="font-medium text-gray-300/80 text-left">
                <li>
                  Upon registering as a student, you'll be greeted by your
                  dedicated student dashboard.
                </li>
                <li>
                  Join the class using the class code your teacher provided.
                  You'll find it on your dashboard.
                </li>
                <li>
                  Upon joining the class, you can conveniently submit
                  assignments by the deadline.
                </li>
                <li>
                  Your marks will be available on your dashboard after
                  evaluation.
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="group rounded-lg relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
              <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
              <h4 className="text-xl font-bold tracking-wide mb-4" id="txtab">
                More about us
              </h4>
              <ul id="ul" className="font-medium text-gray-300/80 text-left">
                <li>
                  AI-based report evaluation can free up valuable teacher
                  time, allowing them to focus on personalized feedback and
                  deeper student interaction.
                </li>
                <li>
                  Students will receive insightful feedback alongside their
                  accurate marks, empowering them to identify areas for
                  improvement and ultimately upscale their learning.
                </li>
                <li>
                  Our webiste stores the previous assignments that can be
                  reviewed by either student or teacher later.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection