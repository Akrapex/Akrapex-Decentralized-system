import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary pt-36 text-white">
      <div className="w-11/12 lg:w-full mx-auto flex lg:justify-around flex-wrap  lg:flex-nowrap">
        <div className='w-3/6 lg:w-[400px]'> 
          <img src="/Images/footer-logo.png" alt="footer-logo" className='w-[80%]*'/>
          <p className=" font-normal font-inter text-light pt-5 w-[80%] mb-5">
            A decentralized platform where anyone can invest in sustainable
            properties and help decide what gets built.
          </p>
        </div>
        <div  className='w-3/6 lg:w-auto'>
          <h4 className=" text-lg font-medium font-Grotesk pb-6">
            Company
          </h4>
          <ul className=" font-medium space-y-5 text-light">
            <li>Home</li>
            <li>About</li>
            <li>Properties</li>
            <li>How it Works</li>
          </ul>
        </div>
        <div  className='w-3/6 lg:w-auto'>
          <h4 className=" text-lg font-medium font-Grotesk pb-6">Help</h4>
          <ul className=" font-medium space-y-5 text-light">
            <li>Newsletter</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div  className='w-3/6 lg:w-2/6'>
          <h4 className=" text-lg font-medium font-Grotesk pb-6 ]">
            Social media
          </h4>
          <p className=" font-medium space-y-5 text-light">
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
      </div >
      <div className="border-b border-gray-300 py-10 lg:w-auto"></div>
      <div className=" w-full mx-auto text-white flex   py-5 text-base">
        <div className="flex gap-10 justify-end w-full p-5">
          <a href="#">Terms of service</a>
          <a href="#">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
