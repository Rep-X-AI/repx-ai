import React from 'react'

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="overflow-hidden pt-28 md:pt-32 xl:pt-36"
    >
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
              <div className="relative rounded-lg lg:rounded-none group overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="/icon-01.svg" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-white mb-4">
                  Online Exams and Assignments
                </h4>
                <p className="font-medium text-gray-400/80">
                  Functionality to create assignments where multiple students
                  can post their Reports
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group rounded-lg lg:rounded-none relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="/icon-02.svg" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-white mb-4">
                  Approapriate Marking
                </h4>
                <p className="font-medium text-gray-400/80">
                  Enables the Teacher to calculate marks of each Student and
                  generate result for them.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group rounded-lg lg:rounded-none relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="/icon-03.svg" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-white mb-4">
                  Browse History
                </h4>
                <p className="font-medium text-gray-400/80">
                  Students and teachers can view their attended and authored
                  exam histories, respectively.
                </p>
              </div>
            </div>
          </div>
          <div className="features-row-border w-full h-[1px]"></div>

          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group rounded-lg lg:rounded-none relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="/icon-04.svg" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-white mb-4">
                  Diagram Analyser
                </h4>
                <p className="font-medium text-gray-400/80">
                  Analyzes reports using teacher-inputted keywords, diagrams,
                  and equations, then assesses them.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group rounded-lg lg:rounded-none relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="/icon-05.svg" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-white mb-4">
                  Sentimental Extra Grading
                </h4>
                <p className="font-medium text-gray-400/80">
                  Also grades the reports based on the sentiment of the
                  content and the teacher&apos;s feedback.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group rounded-lg lg:rounded-none relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
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
  )
}

export default FeaturesSection