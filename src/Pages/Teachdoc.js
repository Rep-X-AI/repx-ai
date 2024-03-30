import React from 'react'
import a1 from './Dashboard/SSs/a1.png'
import a2 from './Dashboard/SSs/a2.png'
import a3 from './Dashboard/SSs/a3.png'
import a4 from './Dashboard/SSs/a4.png'

export default function Teachdoc() {
  return (
      <div className="w-full flex flex-col">
        <h1 className="text-3xl mb-1 text-left font-bold leading-none md:text-4xl lg:text-5xl pb-2 bg-gradient-to-bl from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent">
            {" "}Teacher Documentation{" "}
        </h1>
        <p className="mb-3 mt-2 text-lg font-normal text-purple-300 lg:text-xl text-left">
          Empowering Educators : Your One-Stop Website guide.
        </p>
        <hr className="h-px my-8 mt-1 bg-gray-700 border-0" />
        <ul>
          <li className="list-disc mb-3 mt-2 text-lg font-normal text-white lg:text-l text-left ml-3">
            <p className='m-3 text-purple-300 text-xl'>Step 1</p>
            After creating your account and joining our vibrant community, you'll be whisked away to your personalized dashboard. Here, everything you need to excel in your teaching journey is conveniently organized at your fingertips.
          </li>  
          <li className="list-disc mb-3 mt-2 text-lg font-normal text-white lg:text-l text-left ml-3">
            <p className='m-3 text-purple-300 text-xl'>Step 2</p>
            Within the sidebar, you'll find the "Create Assignments" section. This powerful tool empowers you to effortlessly design assignments that cater to your students' unique needs and learning styles.
            <img src={a1} alt='a1' className='m-auto mt-3'/>
          </li>  
          <li className="list-disc mb-3 mt-2 text-lg font-normal text-white lg:text-l text-left ml-3">
            <p className='m-3 text-purple-300 text-xl'>Step 3</p>
            Upon entering the "Create Assignment" section, you'll encounter the essential details area. Here, craft a captivating title, set a clear due date, define the total marks, and optionally provide a detailed description to guide your students. 
            <img src={a2} alt='a2' className='m-auto mt-3'/>
          </li>  
          <li className="list-disc mb-3 mt-2 text-lg font-normal text-white lg:text-l text-left ml-3">
            <p className='m-3 text-purple-300 text-xl'>Step 4</p>
            Once you've filled in the key assignment details, enhance the AI's evaluation prowess by uploading a sample question and a corresponding model answer. This duo acts as a roadmap, guiding the AI to accurately assess your students' work. 
            <img src={a3} alt='a3' className='m-auto mt-3'/>
          </li>  
          <li className="list-disc mb-3 mt-2 text-lg font-normal text-white lg:text-l text-left ml-3">
            <p className='m-3 text-purple-300 text-xl'>Step 5</p>
            Hit "Create Assignment" to unleash your masterpiece! This generates a unique class code for your students to access the assignment and showcase their brilliance. You may share the class code with the required students. 
            <img src={a4} alt='a4' className='m-auto mt-3'/>
          </li>  
        </ul>  
      </div>
  )
}
