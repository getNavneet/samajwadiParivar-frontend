import React from 'react';
import { NavLink} from 'react-router-dom';
import ContactForm from '../contact/ContactForm';
import SocialLinks from '../social/Social';
function Footer() {
  return (
    
        <footer className='w-full bg-cyan-900 text-white mt-14'
        style={{ backgroundColor: '#B22222' }}
        >
        <div className="w-10/12 mx-auto my-4 p-4 mt-6">
        <h4 className='m-4 text-2xl'>Get in Touch</h4>
        <ContactForm/>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start py-8 px-4 lg:px-16   ">
  {/* Important Links */}
  <div className=" lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Important Links</h2>
    <ul className="space-y-4">
      <li>
        <NavLink to="/" className="text-lg text-yellow-200 hover:text-yellow-800 transition duration-300">&rarr; Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" className="text-lg text-yellow-300 hover:text-yellow-800 transition duration-300">&rarr; About</NavLink>
      </li>
      <li>
        <NavLink to="/latest" className="text-lg text-yellow-300 hover:text-yellow-800 transition duration-300">&rarr; Latest</NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="text-lg text-yellow-300 hover:text-yellow-800 transition duration-300">&rarr; Contact</NavLink>
      </li>
    </ul>
  </div>

  {/* Contact Details */}
  <div className="w-full lg:w-1/2 text-center lg:text-left">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Details</h3>
    <p className="mb-4 text-lg"><strong>Email:</strong> <a href="mailto:info@samajwadiparty.in" className="text-yellow400 hover:text-yellow-800 transition duration-300">info@samajwadiparty.in</a></p>
    <p className="mb-4 text-lg"><strong>Phone:</strong> <a href="tel:+911234567890" className="text-yellow-400 hover:text-yellow-800 transition duration-300">+91 731 115 5740</a></p>
    <p className="text-lg"><strong>Location:</strong> 19, Vikramaditya Marg, Lucknow</p>
  </div>
</div>


<div className='p-4 border-2 m-2 border-white'>
  <h2 className='text-center'>
    Follow Us on
  </h2>
            <SocialLinks/>
          </div>

          <div class="w-full flex justify-center items-center">
  <div class="w-screen ">
    <h1 class="text-center font-bold text-5xl md:text-9xl  leading-tight">
      Samajwadi Party
    </h1>
  </div>
</div>

    <div className='min-h-12  flex flex-col bg-red-900 inset-0  justify-center items-center'>
    <p className='p-3'>&copy; 2024 samajwadiparty.in</p>
        <h1 className="text-center pb-3">
            made with ❤ by <a href='https://navneet.website/'><span className=''>Navneet</span></a>
        </h1>
    </div>
</footer>
  );
}

export default Footer;
