import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-500">
          About Our Platform
        </h1>

        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Welcome to our platform! This innovative tool is designed to help you
          create personalized **New Year wishing cards** in a unique{" "}
          <span className="font-bold text-green-500">Samajwadi style</span>. Whether you
          want to celebrate with your followers, wish your loved ones, or
          showcase your connection to the **Samajwadi Party**, this platform
          makes it simple, creative, and impactful.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          🌟 Purpose
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Our goal is to provide a platform that celebrates individuality while
          promoting a connection to the ideals of the **Samajwadi Party**. This
          tool is perfect for party members, supporters, or anyone looking to
          send personalized greetings in a distinct style.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          💡 Use Cases
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>Create personalized New Year wishes for your friends and family.</li>
          <li>Send thoughtful greetings to your supporters or followers.</li>
          <li>Use it as a creative medium to connect with the ideals of the party.</li>
          <li>Promote your identity and values through a beautifully designed card.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          📋 How to Use
        </h2>
        <ol className="list-decimal list-inside text-lg text-gray-700 mb-4">
          <li>Browse through the list of available card designs.</li>
          <li>
            Select your favorite card and click the "Generate Card" button.
          </li>
          <li>
            Fill in your details (full name, state, city, and phone number) in
            the provided form.
          </li>
          <li>
            Submit the form, and in just a few seconds, your personalized card
            will be generated.
          </li>
          <li>Preview your card and download it to share with others!</li>
        </ol>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          ❤️ Why Choose Us?
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          We blend **creativity** and **purpose**, making it easy for you to
          stand out and make an impression. Whether you're wishing your
          followers or expressing gratitude, our platform ensures your message
          is impactful and memorable.
        </p>

        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-red-500 to-green-500 text-white py-2 px-6 rounded-full font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
