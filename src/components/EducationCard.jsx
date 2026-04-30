import { motion } from 'framer-motion';

const EducationCard = ({ education }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      <div className="absolute left-0 top-1 w-4 h-4 bg-primary-600 rounded-full"></div>
      <div className="absolute left-2 top-5 w-0.5 h-full bg-gray-200 dark:bg-gray-700 last:hidden"></div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {education.degree}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {education.period}
          </span>
        </div>
        <h4 className="text-lg text-primary-600 dark:text-primary-400 mb-4">
          {education.institution}
        </h4>
        <p className="text-gray-600 dark:text-gray-400">
          {education.description}
        </p>
      </div>
    </motion.div>
  );
};

export default EducationCard;
