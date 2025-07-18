import React from "react";
import logof from "../assets/images/logof.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";

function Footer() {
  return (
    <section className="bg-[#111828] overflow-x-hidden">
      <div>


        <div className="w-[90%] m-auto flex flex-col py-10 lg:flex-row justify-between">
           <div className="flex flex-col gap-3">
          <img className="w-37" src={logof} />
          <h1 className="text-[#9ca2ae] bg-">
            The intelligent workspace that
            <br /> brings together the best AI tools for
            <br /> your profession.
          </h1>
          <div className="flex gap-5">
            <a href="https://x.com/i/flow/login">
              <img className="w-7" src={twitter} />
            </a>

            <a href="inkedin.com/company/login">
              <img className="w-7" src={linkedin} />
            </a>

            <a href='https://github.com/'>
              <img className="w-7" src={github} />
            </a>
          </div>
        </div>

        <div className='flex flex-col gap-3 mt-7 lg:mt-0'>
           <div>
             <h1 className="text-white text-[18px] font-bold">Product</h1>
           </div>

           <div className="text-[#9ca2ae] flex flex-col gap-1 text-[16px]">
             <h1 className="hover:text-white duration-700">Features</h1>
             <h1 className="hover:text-white duration-700">Pricing</h1>
             <h1 className="hover:text-white duration-700">Integrations</h1>
             <h1 className="hover:text-white duration-700">Roadmap</h1>
             <h1 className="hover:text-white duration-700">Changelog</h1>
           </div>
        </div>

        
        <div className='flex flex-col gap-3  mt-7 lg:mt-0'>
           <div>
             <h1 className="text-white text-[18px] font-bold">Resources</h1>
           </div>

           <div className="text-[#9ca2ae] flex flex-col gap-1 text-[16px]">
             <h1 className="hover:text-white duration-700">Blog</h1>
             <h1 className="hover:text-white duration-700">Documentation</h1>
             <h1 className="hover:text-white duration-700">Guides</h1>
             <h1 className="hover:text-white duration-700">Help Center</h1>
             <h1 className="hover:text-white duration-700">API</h1>
           </div>
        </div>

        
        <div className='flex flex-col gap-3 mt-7 lg:mt-0'>
           <div>
             <h1 className="text-white text-[18px] font-bold">Company</h1>
           </div>

           <div className="text-[#9ca2ae] flex flex-col gap-1 text-[16px]">
             <h1 className="hover:text-white duration-700">About Us</h1>
             <h1 className="hover:text-white duration-700">Careers</h1>
             <h1 className="hover:text-white duration-700">Contact</h1>
             <h1 className="hover:text-white duration-700">Privacy Policy</h1>
             <h1 className="hover:text-white duration-700">Terms of Service</h1>
           </div>
        </div>
        </div>


<div className="border-t border-gray-800 py-7 mt-7 lg:mt-0">
   <div className="w-[90%] m-auto flex flex-col lg:flex-row justify-between">
          <div className="gap-3 flex flex-col">
             <h1 className="text-white text-[18px] font-bold">Subscribe to our newsletter</h1>
             <h1 className="text-[#9ca2ae] text-[16px]">Get the latest updates on new features and AI tools.</h1>
          </div>

          <form className="flex  mt-7 lg:mt-0">
  <input
    type="email"
    placeholder="Your email address"
    required
    className="rounded-l-md w-70 px-2 focus:outline-none focus:ring-2 focus:ring-[#2563ea] text-sm bg-[#202938] placeholder-[#9ca2ae] h-11 text-white"
  />
  <button
    type="submit"
    className="rounded-r-md bg-[#2563ea] text-white px-4 text-sm font-semibold hover:bg-[#1D4ED8] duration-700 focus:outline-none h-11 "
  >
    Subscribe
  </button>
</form>
        </div>

</div>

<div className="bg-[#030712] py-4  flex mt-7 lg:mt-0">
  <div className="  flex gap-3 lg:gap-0 flex-col lg:flex-row text-center lg:text-start md:text-start  justify-between w-[90%] m-auto">
    <h1 className="text-[#9ca2ae] text-[15px]">© 2025 Abordi Inc. All rights reserved.</h1>
     <div className=" text-[#9ca2ae] flex gap-3 text-center lg:text-start md:text-start  justify-center md:justify-start text-[15px]"> 
        <h1 className="hover:text-white duration-700">Privacy</h1>
        <h1 className="hover:text-white duration-700">Terms</h1>
        <h1 className="hover:text-white duration-700">Cookies</h1>
     </div>
</div>
</div>

       
      </div>
    </section>
  );
}

export default Footer;
