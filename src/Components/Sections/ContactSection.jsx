import React from 'react'
import "./contact.css"

const ContactSection = (props) => {
  return (
    <section id="contact" className="overflow-hidden min-h-screen pt-28 md:pt-32 xl:pt-36">
      <>
        <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center">
            <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-6 rounded-full">
              <img src="/icon-title.svg" alt="icon" />
              <span className="hero-subtitle-text">
                {" "}
                {props.title}{" "}
              </span>
            </span>
            <h2 className="text-white mb-4.5 text-2xl font-bold tracking-wide sm:text-4xl xl:text-heading-2">
              Contact Us
            </h2>
            <p className="max-w-[714px] mx-auto mb-5 font-medium text-gray-400/90 mt-2.5">
              Got a question ? We've got answers ! Let's Connect.
            </p>
          </div>
        </div>

        <div className="contact-container">
          <div className="contactform">
            <div className="contact-info">
              <h3 className="contact-title">Let's get in touch</h3>
              <p className="contact-text">
                Please provide your information and any inquiries you may have in the forms ...
              </p>

              <div className="info">
                <div className="information">
                  <p>Our Email<br /><li id='contt'>repxaicontact@gmail.com</li></p>
                </div>
                <div className="information">

                  <p>Our Phone<br /><li id='contt'>+13 22334-55664</li></p>
                </div>
              </div>

              {/*<div className="social-media">
                <p>Connect with us :</p>
                <div className="social-icons">
                  <a href="#" rel='noreferrer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='white' d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                  </a>
                  <a href="#" rel='noreferrer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='white' d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                  </a>
                  <a href="#" rel='noreferrer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
                  </a>
                </div>
              </div>*/}
            </div>

            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>

              <form action="https://api.web3forms.com/submit" method="POST" autoComplete="off">
                <h3 className="contact-title">Contact us</h3>
                <input type="hidden" name="access_key" value="bbee8533-7366-46ef-9df0-951885581974"></input>
                <div className="input-container">
                  <input type="text" name="name" className="contact-input" placeholder='Username' required />
                </div>
                <div className="input-container">
                  <input type="email" name="email" className="contact-input" placeholder='Email - abcd@gmail.com' required />
                </div>
                <div className="input-container">
                  <input type="tel" name="phone" className="contact-input" placeholder='Phone - 2233445566' required />
                </div>
                <div className="input-container textarea">
                  <textarea name="message" className="contact-input" placeholder='Write your message here ...' required></textarea>
                </div>
                <button type="submit" value="Send" className="btn">Send</button>
              </form>
            </div>
          </div>
        </div>
      </>
    </section>
  )
}

export default ContactSection