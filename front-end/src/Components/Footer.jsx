import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary pt-36 text-white">
      <div className=" max-w-[1440px] w-full mx-auto flex justify-between">
        <div>
          <img src="/Images/footer-logo.png" alt="footer-logo" />
          <p className="text-xl font-normal font-inter text-light w-[377px] pt-5">
            A decentralized platform where anyone can invest in sustainable
            properties and help decide what gets built.
          </p>
        </div>
        <div>
          <h4 className=" text-[2rem] font-medium font-Grotesk pb-6">
            Company
          </h4>
          <ul className="text-[1.25rem] font-medium space-y-5 text-light">
            <li>Home</li>
            <li>About</li>
            <li>Properties</li>
            <li>How it Works</li>
          </ul>
        </div>
        <div>
          <h4 className=" text-[2rem] font-medium font-Grotesk pb-6">Help</h4>
          <ul className="text-[1.25rem] font-medium space-y-5 text-light">
            <li>Newsletter</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h4 className=" text-[2rem] font-medium font-Grotesk pb-6 w-[210px]">
            Social media
          </h4>
          <p className="text-[1.25rem] font-medium space-y-5 text-light w-[319px]">
            Stay ahead in real estate, follow our socials for more updates
          </p>
          <div className="flex items-center gap-4 pt-6">
            <img
              src="/Images/linkedin.svg"
              alt="facebook"
              className="bg-white p-2 rounded-full"
            />
            <img
              src="/Images/instagram.svg"
              alt="facebook"
              className="bg-white p-2 rounded-full"
            />
            <img
              src="/Images/Facebook.svg"
              alt="facebook"
              className="bg-white p-2 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 py-10"></div>
      <div className="max-w-[1440px] w-full mx-auto text-white flex pl-[59%]  py-10 text-base">
        <div className="flex gap-10">
          <a href="#">Terms of service</a>
          <a href="#">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
