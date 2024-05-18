import React from 'react'
import s1 from './Dashboard/SSs/s1.png'
import s2 from './Dashboard/SSs/s2.png'
import s3 from './Dashboard/SSs/s3.png'
import s4 from './Dashboard/SSs/s4.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

export default function Studoc() {
  return (
<div className="w-full flex flex-col">
      <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent">
          {" "}Student Documentation{" "}
      </h1>
      <p className="mb-3 mt-2 text-lg font-normal text-purple-300 lg:text-xl text-left">
          Empowering students through educational resources online.
      </p>
      <hr className="h-px my-8 mt-1 bg-gray-700 border-0" />
      <ul data-aos="fade-in" data-aos-duration="700" data-aos-offset="2">
          <li className="list-disc mb-3 mt-2 text-lg font-normal text-white lg:text-l text-left ml-3">
            <p className='m-3 text-purple-300 text-xl'>Step 1</p>
            After creating your account and joining our vibrant community, you'll be whisked away to your personalized dashboard. Here, everything you need to excel in your student journey is conveniently organized at your fingertips.
          </li>  
          <li className="list-disc mb-3 mt-2 text-lg font-normal text-white lg:text-l text-left ml-3">
            <p className='m-3 text-purple-300 text-xl'>Step 2</p>
            Within the sidebar, students will discover the 'Join Assignment' section. This intuitive feature allows them to seamlessly participate in assignments tailored to their individual learning preferences and requirements.
            <img src={s1} alt='s1' className='m-auto mt-3'/>
          </li>  
          <li className="list-disc mb-3 mt-2 text-lg font-normal text-white lg:text-l text-left ml-3">
            <p className='m-3 text-purple-300 text-xl'>Step 3</p>
            In the 'Join Assignment' section, students are prompted to enter a unique code provided by their class teacher. This code serves as an access key, allowing students to seamlessly join specific assignments designated for their class by specific class teachers. 
            <img src={s2} alt='s2' className='m-auto mt-3'/>
          </li>  
          <li className="list-disc mb-3 mt-2 text-lg font-normal text-white lg:text-l text-left ml-3">
            <p className='m-3 text-purple-300 text-xl'>Step 4</p>
            After successfully joining specific assignments, students can proceed to the 'Upload Assignment' section, where they can upload their completed assignments within due date. Once uploaded, they simply need to press 'Submit' to deliver their assignment to the AI for evaluation and feedback.
            <img src={s3} alt='s3' className='m-auto mt-3'/>
          </li>  
          <li className="list-disc mb-3 mt-2 text-lg font-normal text-white lg:text-l text-left ml-3">
            <p className='m-3 text-purple-300 text-xl'>Step 5</p>
            After uploading and submitting an assignment, it is important to note that modifications cannot be made thereafter, emphasizing the need for careful consideration before submission. Additionally, upon the expiration of the due date, students can view their grades for specific classes on their dashboard, providing valuable feedback and insight into their academic progress.
            <img src={s4} alt='s4' className='m-auto mt-3'/>
          </li>  
        </ul>  
      </div>
  )
}