import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';

const SkillBadge = ({ skill, index }) => {
  const IconComponent = SiIcons[skill.icon];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-shadow"
    >
      {IconComponent && <IconComponent className="text-xl text-primary-600 dark:text-primary-400" />}
      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
    </motion.div>
  );
};

export default SkillBadge;
