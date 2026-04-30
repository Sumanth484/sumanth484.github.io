import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import SkillBadge from '../components/SkillBadge';
import portfolioData from '../data/portfolioData';

const skillCategories = [
  { name: 'Cloud Platforms', key: 'cloud' },
  { name: 'DevOps & CI/CD', key: 'devops' },
  { name: 'Frontend', key: 'frontend' },
  { name: 'Backend', key: 'backend' },
  { name: 'Tools', key: 'tools' },
];

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Skills" subtitle="Technologies I work with" />
        <div className="space-y-12 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills[category.key].map((skill, index) => (
                  <SkillBadge key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
