import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import portfolioData from '../data/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-32 h-32 rounded-full bg-gray-300 dark:bg-gray-700 mx-auto mb-8 flex items-center justify-center text-4xl text-gray-600 dark:text-gray-400">
            {personal.name.charAt(0)}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {personal.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-6">
            {personal.title}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8">
            {personal.about}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={personal.resumeUrl}
              download
              className="px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
            >
              Download Resume
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-6 py-3 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-12"
          >
            <Link to="about" smooth={true} duration={500} className="cursor-pointer">
              <svg className="w-6 h-6 mx-auto text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
