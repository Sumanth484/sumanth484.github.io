import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ExperienceCard from '../components/ExperienceCard';
import portfolioData from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Experience" subtitle="My professional journey" />
        <div className="max-w-3xl mx-auto relative pl-8">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
