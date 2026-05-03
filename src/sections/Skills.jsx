import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import SkillBadge from "../components/SkillBadge";
import { usePortfolio } from "../data/portfolioData";

const skillCategories = [
  { name: "Cloud Platforms", key: "cloud" },
  { name: "DevOps & CI/CD", key: "devops" },
  { name: "Agentic AI", key: "ai" },
  { name: "Frontend", key: "frontend" },
  { name: "Backend", key: "backend" },
  { name: "Tools", key: "tools" },
];

const Skills = () => {
  const { skills, addSkill, editSkill, deleteSkill } = usePortfolio();
  const [showModal, setShowModal] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("cloud");
  const [formData, setFormData] = useState({ name: "", icon: "" });

  const handleAdd = (category) => {
    setSelectedCategory(category);
    setEditingSkill(null);
    setFormData({ name: "", icon: "" });
    setShowModal(true);
  };

  const handleEdit = (category, index) => {
    setSelectedCategory(category);
    setEditingSkill({ category, index });
    setFormData({ ...skills[category][index] });
    setShowModal(true);
  };

  const handleDelete = (category, index) => {
    if (window.confirm("Delete this skill?")) {
      deleteSkill(category, index);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingSkill !== null) {
      editSkill(selectedCategory, editingSkill.index, formData);
    } else {
      addSkill(selectedCategory, formData);
    }
    setShowModal(false);
    setFormData({ name: "", icon: "" });
    setEditingSkill(null);
  };

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
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
                <button
                  onClick={() => handleAdd(category.key)}
                  className="px-3 py-1 text-sm bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
                >
                  Add Skill
                </button>
              </div>
              <div className="flex flex-wrap gap-4">
                {skills[category.key].map((skill, index) => (
                  <div key={skill.name} className="relative group">
                    <SkillBadge skill={skill} index={index} />
                    <div className="absolute -top-2 -right-2 hidden group-hover:flex gap-1">
                      <button
                        onClick={() => handleEdit(category.key, index)}
                        className="p-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(category.key, index)}
                        className="p-1 bg-red-600 text-white rounded text-xs hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {editingSkill ? "Edit Skill" : "Add Skill"} -{" "}
              {skillCategories.find((c) => c.key === selectedCategory)?.name}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Skill Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Icon Name
                </label>
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) =>
                    setFormData({ ...formData, icon: e.target.value })
                  }
                  placeholder="e.g. SiReact"
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
                  {editingSkill ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
