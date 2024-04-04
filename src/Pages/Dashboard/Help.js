import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../Components/Sections/ContactSection' ;

export default function Help() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionTitles = ["How can I signup for RepxAI ?", "How does the AI evaluation process work ?", "I'm experiencing issues with uploading reports. What should I do ?"];
  const accordionContent = ["To join RepxAI, visit our homepage and hit 'Get Started'. You'll be taken to a 'sign-up' page where you fill in your name, email, password, and role (like student, teacher). After hitting Sign Up, you'll land on your customized dashboard tailored to your role. From there, you can dive into everything RepxAI offers, whether it is submitting reports, evaluating submissions, or managing accounts.", "As students upload their answers, our AI system assesses their handwriting and compares the content with the model answer provided by the teacher. It evaluates the alignment of key points and keywords, rewarding higher marks for answers that closely resemble the teacher's model. This approach ensures a fair and accurate evaluation process, reflecting students' understanding and adherence to expected standards.", "As a student, once you log in with your student role, you can access your assignments by joining a class using the provided class code. Within your dashboard, you'll find an 'Upload Assignment' section where you can easily submit your work. Simply click on the 'Upload Assignment' button, select the file from your device, and upload it directly to your dashboard. This streamlined process ensures that your assignments are promptly submitted and accessible to your teacher for evaluation."];

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent">
        {" "}Help{" "}
      </h1>
      <p className="mb-3 mt-2 text-lg font-normal text-purple-300 lg:text-xl text-left">
      Browse our comprehensive Help section for quick answers to your website-related queries and concerns.
      </p>
      <hr className="h-px my-8 mt-1 bg-gray-700 border-0" />

      <section className="bg-transparent dark:bg-transparent">
        <div className="py-8 px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Welcome to RepxAI Support.</h2>
            <p className='text-3xl mb-1 mt-10 text-left font-bold leading-none md:text-2xl lg:text-3xl pb-2 bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent'>How Can We Help You ?</p>
            <li className='m-4 list-disc text-lg tracking-tight font-semibold text-gray-900 dark:text-white text-left marker:text-violet-500'>
              At RepxAI, we're dedicated to providing you with seamless and efficient support for all your online report evaluation needs. Below, you'll find helpful resources to guide you through using our platform effectively. If you can't find the answer you're looking for, don't hesitate to reach out to our support team for personalized assistance.
            </li>
            <p className='text-3xl mb-5 mt-10 text-left font-bold leading-none md:text-2xl lg:text-3xl pb-2 bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent'>Frequently Asked Questions</p>

            <li className='m-4 list-disc text-lg tracking-tight font-semibold text-gray-900 dark:text-white text-left marker:text-violet-500'>
            <div id="accordion-collapse" data-accordion="collapse">
              {[1, 2, 3].map((accordionIndex) => (
                <div key={accordionIndex}>
                  <h2 id={`accordion-collapse-heading-${accordionIndex}`}>
                    <button
                      type="button"
                      className="border-double flex items-center justify-between w-full p-5 font-medium outline-none rtl:text-right text-gray-200 border border-gray-200 rounded-t-xl focus:ring-0 focus:ring-violet-100 dark:focus:ring-violet-100 dark:border-violet-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                      data-accordion-target={`#accordion-collapse-body-${accordionIndex}`}
                      aria-expanded={activeAccordion === accordionIndex}
                      aria-controls={`accordion-collapse-body-${accordionIndex}`}
                      onClick={() => toggleAccordion(accordionIndex)}
                    >
                      <span>{accordionTitles[accordionIndex - 1]}</span>
                      <svg
                        data-accordion-icon
                        className={`w-3 h-3 rotate-${activeAccordion === accordionIndex ? '0' : '180'} shrink-0`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                      </svg>
                    </button>
                  </h2>
                  <div id={`accordion-collapse-body-${accordionIndex}`} className={`p-5 border  border-violet-600 ${activeAccordion === accordionIndex ? '' : 'hidden'}`} aria-labelledby={`accordion-collapse-heading-${accordionIndex}`}>
                    <p className="border-double mb-2 text-gray-300 dark:text-gray-300 font-semibold text-left">{accordionContent[accordionIndex - 1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </li>
          <Contact title='Any Other Doubts ?'/>
          </div>
        </div>
      </section>
    </div>
  );
}
