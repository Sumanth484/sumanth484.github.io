import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import EducationCard from '../components/EducationCard';
import portfolioData from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Education" subtitle="My academic background" />
        <div className="max-w-3xl mx-auto relative pl-8">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
