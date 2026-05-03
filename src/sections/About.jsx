import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { usePortfolio } from "../data/portfolioData";

const About = () => {
  const { personal, editPersonal } = usePortfolio();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(personal.about);

  const handleEdit = () => {
    setFormData(personal.about);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editPersonal({ about: formData });
    setShowModal(false);
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <SectionTitle title="About Me" subtitle="Get to know me better" />
          <button
            onClick={handleEdit}
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Edit
          </button>
        </div>
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

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-2xl">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Edit About Me
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  About Text
                </label>
                <textarea
                  value={formData}
                  onChange={(e) => setFormData(e.target.value)}
                  rows="6"
                  className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div className="flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
