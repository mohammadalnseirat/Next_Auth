import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t-8 border-indigo-200 bg-gradient-to-r from-indigo-300 to-violet-400 shadow-lg">
      <div className="max-w-6xl mx-auto p-4 flex flex-col">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
          <Link
            href={"/"}
            className="text-xl sm:text-2xl font-extrabold group cursor-pointer"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700 drop-shadow-md group-hover:from-indigo-400 group-hover:to-indigo-600 transition-all duration-300">
              Auth
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-violet-700 drop-shadow-md group-hover:from-violet-400 group-hover:to-violet-600 transition-all duration-300">
              App
            </span>
          </Link>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-700 text-center text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Next Auth App. All rights
            reserved.
          </p>
        </div>
        <div className="mt-4 p-4 border-t border-gray-500 flex justify-center">
          <p className="text-gray-700 transition-colors duration-300 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base">
            Created By @{" "}
            <a
              href="https://github.com/mohammadalnseirat/Next_Auth"
              target="_blank"
              className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 flex items-center gap-1 group"
            >
              Mohammad Alnseirat
              <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 group-hover:text-indigo-500 transition-colors duration-300" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
