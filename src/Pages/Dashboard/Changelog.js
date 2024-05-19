import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const ChangelogPage = () => {
  return (
    <>
      <div className="px-4 pt-10 pb-16 sm:px-6 md:px-8">
      <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Changelog{" "}
          </h1>
          <p className="mb-3 mt-2 text-lg font-normal text-purple-300 lg:text-xl text-left">
            See what we're working on !
          </p>
          <hr className="h-px my-8 mt-1 bg-gray-700 border-0" />

        <section className="text-gray-600 " data-aos="slide-up" data-aos-duration="700" data-aos-offset="2">
          <div className="container mx-auto py-12">
            <div className="flex flex-col items-start rounded-xl  sm:items-center">
              <ol className="relative w-full border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-violet-300 ring-8 ring-violet-200 dark:bg-violet-700 dark:ring-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3 fill-current text-violet-600 dark:text-violet-300"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    Repx AI v1.8.0
                    <span className="font-semibold mr-2 ml-5 jff mb-1 rounded bg-blue-100 px-2.5 py-0.5 text-sm text-blue-800 dark:bg-blue-200 dark:text-violet-800">
                      Latest
                    </span>
                  </h3>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on 18 May , 2024
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Major bugs fixed and a reliable AI evaluation model has been integrated into the website.
                  </p>
                </li>
              </ol>
              <ol className="relative w-full border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-violet-300 ring-8 ring-violet-200 dark:bg-violet-700 dark:ring-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3 fill-current text-violet-600 dark:text-violet-300"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    Repx AI v1.7.0
                  </h3>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on 6 April , 2024
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                   Minor Fixes. Some bugs resolved.
                  </p>
                </li>
              </ol>
              <ol className="relative w-full border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-violet-300 ring-8 ring-violet-200 dark:bg-violet-700 dark:ring-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3 fill-current text-violet-600 dark:text-violet-300"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    Repx AI v1.6.0
                  </h3>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on 1 April, 2024
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Packed with even more powerful features. Now, our smart classroom goes beyond text-based assignments with cutting-edge image processing capabilities. Equipped with advanced algorithms, it can analyze and process diagrams and equations, providing students and teachers with enhanced tools for visual learning and assessment.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-violet-300 ring-8 ring-violet-200 dark:bg-violet-700 dark:ring-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3 fill-current text-violet-600 dark:text-violet-300"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                  Repx AI  v1.5.0
                  </h3>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on 21 March ,2024
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Updated with advanced AI features. Now, our smart classroom utilizes cutting-edge Natural Language Processing (NLP) technology to automatically grade student reports. This innovative feature significantly reduces teachers' workload by efficiently grading assignments, allowing them to focus more on personalized instruction and student development.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-violet-300 ring-8 ring-violet-200 dark:bg-violet-700 dark:ring-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3 fill-current text-violet-600 dark:text-violet-300"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                  Repx AI  v1.4.0
                  </h3>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on 8 March, 2024
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Security and Privacy Updates . With enhanced security measures, including robust encryption and advanced cookie management, our smart classroom ensures the utmost protection of your data.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-violet-300 ring-8 ring-violet-200 dark:bg-violet-700 dark:ring-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3 fill-current text-violet-600 dark:text-violet-300"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    Repx AI V1.0.0
                  </h3>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on 1 March ,2024
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    A smart i Classroom  easing out the workload of both Students and Teachers . Interactive dashboard , clean UI ,Eficient Handling of Assignments,and seemless navigation . Experience a transformative learning environment with Repx AI.
                  </p>
                </li>
                <li className="ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-violet-300 ring-8 ring-violet-200 dark:bg-violet-700 dark:ring-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3 fill-current text-violet-600 dark:text-violet-300"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChangelogPage;
