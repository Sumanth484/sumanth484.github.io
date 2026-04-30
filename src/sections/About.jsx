import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import portfolioData from '../data/portfolioData';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          <p>{personal.about}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
