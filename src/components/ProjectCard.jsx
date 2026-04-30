import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500 dark:text-gray-400">Project Image</span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
          >
            <SiGithub className="mr-2" />
            View Project
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
