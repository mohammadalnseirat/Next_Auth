import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import { GoAlert } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { SiClerk } from "react-icons/si";
export default function HomePage() {
  return (
    <div className="min-h-screen px-2 sm:px-4 py-12 max-w-5xl mx-auto">
      <h1 className="gradient-text text-3xl sm:text-4xl font-extrabold text-center mb-8">
        Welcome to Our Next Auth Application
      </h1>
      <div className="flex flex-col items-center p-6 space-y-6">
        <img
          src={"/auth-one.jpg"}
          // src="https://kivuto.com/wp-content/uploads/2021/06/User_Authentication_Best_Practices_Image.jpg"
          alt="auth-one"
          className="rounded-lg h-96 w-full object-cover mb-6"
        />
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-100/50">
            <RiNumber1 className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-red-500 mt-1 flex-shrink-0" />
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              This application is built using Next.js, a powerful React
              framework for building server-side rendered and statically
              generated web applications.
            </p>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-100/50">
            <RiNumber2 className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-red-500 mt-1 flex-shrink-0" />
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              We have integrated Clerk for seamless user authentication,
              providing a secure and user-friendly login experience.
            </p>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-100/50">
            <RiNumber3 className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-red-500 mt-1 flex-shrink-0" />
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              Our backend is powered by MongoDB, a NoSQL database, and we use
              Mongoose for elegant MongoDB object modeling in Node.js.
            </p>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-100/50">
            <RiNumber4 className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-red-500 mt-1 flex-shrink-0" />
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              This project serves as a comprehensive template for building
              full-stack web applications with authentication. Feel free to
              customize it to suit your needs!
            </p>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-lg">
            <GoAlert className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9  text-yellow-500  flex-shrink-0" />
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              For more information, please refer to the official documentation
              of the technologies used:
            </p>
          </div>
        </div>
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
    </div>
  );
}
