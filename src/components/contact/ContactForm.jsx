import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';
import Button from '../../Button';
function ContactForm() {
    const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };
  return (
    <form ref={form}  className="bg-white shadow-lg rounded-lg p-8 text-black ">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
      <input type="text" name="user_name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input type="email" name="user_email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
      <textarea name="message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" rows="4"></textarea>
    </div>
    <Button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-700 transition duration-300">
      Send Message
    </Button>
  </form>
  );
}

export default ContactForm;
