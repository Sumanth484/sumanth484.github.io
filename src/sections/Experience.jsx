import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ExperienceCard from "../components/ExperienceCard";
import { usePortfolio } from "../data/portfolioData";

const Experience = () => {
  const { experience, addExperience, editExperience, deleteExperience } =
    usePortfolio();
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    period: "",
    responsibilities: "",
  });

  const handleAdd = () => {
    setEditingIndex(null);
    setFormData({ company: "", role: "", period: "", responsibilities: "" });
    setShowModal(true);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData({
      company: experience[index].company,
      role: experience[index].role,
      period: experience[index].period,
      responsibilities: experience[index].responsibilities.join("\n"),
    });
    setShowModal(true);
  };

  const handleDelete = (index) => {
    if (window.confirm("Delete this experience?")) {
      deleteExperience(index);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expData = {
      company: formData.company,
      role: formData.role,
      period: formData.period,
      responsibilities: formData.responsibilities
        .split("\n")
        .filter((r) => r.trim() !== ""),
    };
    if (editingIndex !== null) {
      editExperience(editingIndex, expData);
    } else {
      addExperience(expData);
    }
    setShowModal(false);
    setFormData({ company: "", role: "", period: "", responsibilities: "" });
    setEditingIndex(null);
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <SectionTitle
            title="Experience"
            subtitle="My professional journey"
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
          >
            Add Experience
          </button>
        </div>
        <div className="max-w-3xl mx-auto relative pl-8">
          {experience.map((exp, index) => (
            <div key={index} className="relative group">
              <ExperienceCard experience={exp} index={index} />
              <div className="absolute -left-2 top-4 hidden group-hover:flex gap-1 z-10">
                <button
                  onClick={() => handleEdit(index)}
                  className="p-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="p-1 bg-red-600 text-white rounded text-xs hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {editingIndex !== null ? "Edit Experience" : "Add Experience"}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Role
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Period
                </label>
                <input
                  type="text"
                  value={formData.period}
                  onChange={(e) =>
                    setFormData({ ...formData, period: e.target.value })
                  }
                  placeholder="e.g. 2020 - 2023"
                  className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Responsibilities (one per line)
                </label>
                <textarea
                  value={formData.responsibilities}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      responsibilities: e.target.value,
                    })
                  }
                  rows="5"
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
                  {editingIndex !== null ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
