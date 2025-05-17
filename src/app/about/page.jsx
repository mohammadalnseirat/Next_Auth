import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiClerk } from "react-icons/si";

const AboutPage = () => {
  return (
    <div className="min-h-screen px-4  md:px-4 lg:px-6 xl:px-8 py-12 max-w-5xl mx-auto">
      <h1 className="gradient-text text-3xl sm:text-4xl font-extrabold text-center mb-8 animate-shadow-loop">
        About Us
      </h1>
      <div className="bg-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 animate-shadow-loop">
        <div>
          <p className="text-gray-700 mb-4">
            This is a Next.js application using Clerk for authentication and
            Mongoose for MongoDB.
          </p>
          <p className="text-gray-700 mb-4">
            The front-end of the application is built with Next.js and uses
            Clerk for user authentication. The back-end is connected to MongoDB
            using Mongoose.
          </p>
          <p className="text-gray-700 mb-4">
            This application is intended as a starting point for building
            full-stack web applications with authentication using Next.js,
            Clerk, and Mongoose. Feel free to use it as a template for your own
            projects!
          </p>
          <p className="text-gray-700 mb-4">
            For more information on Next.js, Clerk, and Mongoose, check out the
            official documentation:
          </p>
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <li>
              <a
                href="https://github.com/mohammadalnseirat/Next_Auth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg bg-blue-100 ring-2 ring-blue-500 text-blue-500 hover:bg-blue-200 transition-colors duration-200"
              >
                <FaGithub className="w-6 h-6 mr-2" />
                GitHub Repository
              </a>
            </li>
            <li>
              <a
                href="https://go.clerk.com/O9JPZR5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg bg-purple-100 ring-2 ring-purple-500 text-purple-500 hover:bg-purple-200 transition-colors duration-200"
              >
                <SiClerk className="w-6 h-6 mr-2" />
                Clerk Documentation
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/auth-two.jpg"
            // src="https://www.loginradius.com/blog/static/6d170d83a7074847494831a6df861d3c/d3746/cover-auth.jpg"
            alt="Description of image"
            className="rounded-lg h-96 w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
