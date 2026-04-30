import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/Sumanth484"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <SiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/sumanth-kumar-puvvada-96600b222"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Sumanth Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
