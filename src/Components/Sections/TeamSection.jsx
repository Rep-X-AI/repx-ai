import React from 'react'
import TeamPic from './TeamPic'

const TeamSection = () => {
  return (
    <section
      id="team"
      className="overflow-hidden min-h-screen pt-28 md:pt-32 xl:pt-36"
    >
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
            Our team is made up of talented and passionate individuals who are
            dedicated to making a difference in the world of education.
          </p>
        </div>
      </div>

      <div className="teams-cards-container">
        <TeamPic
          name="Rishi Bhattasali"
          designation="Machine Learning"
          photo="rishi"
          link="https://github.com/Rishi2403"
        />
        <TeamPic
          name="Priyanshu Dutta"
          designation="Machine Learning"
          photo="priyangshu"
          link="https://github.com/priyanshudutta04"
        />
        <TeamPic
          name="Satyaki Dey"
          designation="Backend Dev"
          photo="satyaki"
          link="https://github.com/SatyakiDey75"
        />
        <TeamPic
          name="Subhadeep Roy"
          designation="Frontend Dev"
          photo="subha"
          link="https://github.com/subhadeeproy3902"
        />
        <TeamPic
          name="Arunava Dutta"
          designation="Frontend Dev"
          photo="arunava"
          link="https://github.com/ArunavaCoderEm"
        />
        <TeamPic
          name="Pretisha Sahoo"
          designation="Backend Dev"
          photo="pretisha"
          link="https://github.com/PretishaSahoo"
        />
      </div>
    </section>
  )
}

export default TeamSection