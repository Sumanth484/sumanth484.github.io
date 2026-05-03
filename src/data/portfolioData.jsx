import { createContext, useContext, useState, useCallback } from "react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import resume from "../assets/Resume.pdf";

const portfolioData = {
  personal: {
    name: "Sumanth Kumar",
    title:
      "Devops Engineer | AI Enthusiast | Transforming Devops & SRE with AI",
    about:
      "I’m a DevOps and AIOps Engineer with 4+ years of experience building scalable, secure, and high-performing infrastructure in enterprise environments. Currently a Senior Technical Consultant at EY, and previously with HCLTech, I’ve supported critical systems in the financial sector, including large-scale environments for Bank of America. I focus on bridging traditional DevOps with AIOps by designing efficient CI/CD pipelines, automating infrastructure using Terraform and Ansible, and improving system reliability through monitoring and observability. My experience spans AWS Cloud Services, Kubernetes, Jenkins, and AI-driven frameworks like LangChain, LangGraph, and RAG systems. I’m particularly interested in AI-driven infrastructure, including agentic AI, RAG pipelines, and AI observability. I enjoy building systems that are scalable, adaptive, and moving toward self-healing capabilities.",
    resumeUrl: resume,
    social: {
      github: "https://github.com/Sumanth484",
      linkedin: "https://linkedin.com/in/sumanth-kumar-puvvada-96600b222",
    },
  },
  experience: [
    {
      company: "EY",
      role: "Senior Devops Engineer",
      period: "2025 - Present",
      responsibilities: [
        "Supported 70+ applications as a DevOps & SRE Consultant for Bank of America across diverse tech stacks and environments",
        "Optimized CI/CD pipelines using Jenkins, Ansible Tower, and XLR, accelerating deployments and releases by 80%",
        "Implemented AIOps solutions to automate incident detection and remediation, reducing MTTR in production environments",
        "Developed RAG-based solutions to streamline debugging of build and deployment issues using internal knowledge bases",
        "Streamlined patch management for 100+ servers using BMC BladeLogic, reducing patching time and operational errors",
        "Remediated vulnerabilities across multiple technology stacks, strengthening overall security posture",
        "Managed and renewed server certificates across environments to ensure secure and compliant operations",
      ],
    },

    {
      company: "HCLTech",
      role: "Devops Engineer",
      period: "2022 - 2025",
      responsibilities: [
        "Automated the build process using Azure Build Pipelines to streamline code management and compilation",
        "Established a strategic branching strategy to support parallel development, minimizing code conflicts",
        "Facilitated effective collaboration, reduced merge conflicts, improved code integration, and accelerated release cycles",
        "Implemented Azure Release Pipelines for automated deployments across multiple environments",
        "Enhanced team collaboration, task tracking, and project visibility using Azure Boards within Agile practices",
      ],
    },
    {
      company: "HCLTech",
      role: "Graduate Engineer Trainee",
      period: "2021 - 2022",
      responsibilities: [
        "Honed web development skills through comprehensive training in HTML, CSS, JS, AngularJS, and ReactJS",
        "Successfully applied knowledge by delivering an internal capstone project showcasing proficiency in these technologies",
      ],
    },
  ],
  education: [
    {
      institution: "Jawaharlal Nehru Technological University, Kakinada",
      degree: "Bachelor of Technology in Electronics and Computers",
      period: "Jun 2018 – Jul 2022",
      description:
        "Excelled 4 years in the field of ELECTRONICS and COMPUTERS ENGINEERING with practical knowledge, which changed the perception of the world.",
    },
    {
      institution: "Board of Intermediate Education",
      degree: "Higher Secondary Education in Mathematics & Sciences",
      period: "Jun 2016 – Mar 2018",
      description:
        "Excelled in intermediate education with focus on mathematics and sciences, building foundation for engineering studies.",
    },
  ],
  projects: [
    {
      title: "Senior Devops Engineer at EY",
      description:
        "Senior DevOps Engineer (Bank of America): Led monitoring onboarding, Jenkins, Ansible & XLR onboarding; managed patching, software upgrades, vulnerability remediation, Vault operations, SSO setup & certificate management, ensuring secure, compliant.",
      techStack: [
        "Linux",
        "Git",
        "Jenkins",
        "Ansible Tower",
        "Docker",
        "Kubernetes",
        "AIOps",
        "RAG",
        "MCP",
        "Agentic AI",
      ],
      link: "https://github.com/Sumanth484/Jenkins.git",
      image: project1,
    },
    {
      title:
        "Automated CI/CD Pipeline for Web Applications (Python, Django, Node.js, React) using Jenkins",
      description:
        "Designed and implemented a CI/CD pipeline using Jenkins and GitHub webhook triggers, accelerating deployment by 40% and increasing deployment frequency by 50%, resulting in a 35% enhancement in deployment performance and security.",
      techStack: ["Python", "Django", "Node.js", "React", "Jenkins", "GitHub"],
      link: "https://github.com/Sumanth484/Jenkins.git",
      image: project2,
    },
    {
      title: "Infrastructure Provisioning with Terraform (AWS)",
      description:
        "Automated infrastructure provisioning by creating a complete infrastructure stack for a web application on AWS using Infrastructure as Code (IaC). Structured and organized infrastructure code using Terraform Modules, enhancing code reusability and maintainability, resulting in a 30% boost in deployment effectiveness and security compliance.",
      techStack: ["Terraform", "AWS", "IaC"],
      link: "https://github.com/Sumanth484/Terraform.git",
      image: project3,
    },
    {
      title:
        "Configuration Management with Ansible Playbooks and Roles (Linux)",
      description:
        "Explored configuration management using Ansible playbooks and roles, enhancing system automation capabilities. Reduced manual configuration time by 50%. Developed an Ansible role to deploy applications on Apache servers, streamlining deployment processes and improving deployment consistency by 40%.",
      techStack: ["Ansible", "Linux", "Apache"],
      link: "https://github.com/Sumanth484/Ansible.git",
      image: project4,
    },
    {
      title: "UD TRUCKS",
      description:
        "Served as a consultant for UD TRUCKS, a Japanese company, developing applications for factory personnel in the manufacturing assembly line of trucks and cabs, resulting in a 25% increase in operational efficiency and a 15% reduction in production errors.",
      techStack: ["ASP.NET", "C#", "SQL"],
      link: "",
      image: project5,
    },
  ],
  skills: {
    cloud: [
      { name: "AWS EC2", icon: "SiAmazonaws" },
      { name: "AWS IAM", icon: "SiAmazonaws" },
      { name: "AWS S3", icon: "SiAmazonaws" },
      { name: "AWS VPC", icon: "SiAmazonaws" },
      { name: "AWS Codepipeline", icon: "SiAmazonaws" },
      { name: "AWS ECS", icon: "SiAmazonaws" },
      { name: "AWS EKS", icon: "SiAmazonaws" },
      { name: "Azure DevOps Services", icon: "SiAzuredevops" },
      { name: "Azure Repo", icon: "SiAzuredevops" },
      { name: "Azure Build & Release Pipelines", icon: "SiAzuredevops" },
    ],
    devops: [
      { name: "Linux - Shell Scripting", icon: "SiLinux" },
      { name: "Git", icon: "SiGit" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Jenkins", icon: "SiJenkins" },
      { name: "Terraform", icon: "SiTerraform" },
      { name: "Ansible", icon: "SiAnsible" },
      { name: "Kubernetes", icon: "SiKubernetes" },
    ],
    ai: [
      { name: "AIOPS", icon: "SiAgent" },
      { name: "Dynatrace", icon: "SiAgent" },
      { name: "MCP", icon: "SiAgent" },
      { name: "RAG", icon: "SiAgent" },
      { name: "Agentic AI", icon: "SiAgent" },
      { name: "Langgraph", icon: "SiAgent" },
      { name: "CrewAI", icon: "SiAgent" },
      { name: "Prompt Engineering", icon: "SiAgent" },
    ],
    frontend: [
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss3" },
      { name: "JavaScript", icon: "SiJavascript" },
    ],
    backend: [
      { name: "C#", icon: "SiCsharp" },
      { name: "ASP.NET", icon: "SiDotnet" },
      { name: "ADO.NET", icon: "SiDotnet" },
      { name: "ASP.NET MVC", icon: "SiDotnet" },
      { name: "SQL", icon: "SiMysql" },
    ],
    tools: [
      { name: "WebSphere MQ", icon: "SiApache" },
      { name: "Visual Studio", icon: "SiApache" },
      { name: "Visual Studio Code", icon: "SiApache" },
      { name: "Service Now", icon: "SiApache" },
    ],
  },
};

// Portfolio Context for state management
const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [skills, setSkills] = useState(portfolioData.skills);
  const [experience, setExperience] = useState(portfolioData.experience);
  const [projects, setProjects] = useState(portfolioData.projects);
  const [personal, setPersonal] = useState(portfolioData.personal);

  // Skills management
  const addSkill = useCallback((category, skill) => {
    setSkills((prev) => ({
      ...prev,
      [category]: [...prev[category], skill],
    }));
  }, []);

  const editSkill = useCallback((category, index, updatedSkill) => {
    setSkills((prev) => ({
      ...prev,
      [category]: prev[category].map((skill, i) =>
        i === index ? updatedSkill : skill
      ),
    }));
  }, []);

  const deleteSkill = useCallback((category, index) => {
    setSkills((prev) => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index),
    }));
  }, []);

  // Experience management
  const addExperience = useCallback((exp) => {
    setExperience((prev) => [exp, ...prev]);
  }, []);

  const editExperience = useCallback((index, updatedExp) => {
    setExperience((prev) =>
      prev.map((exp, i) => (i === index ? updatedExp : exp))
    );
  }, []);

  const deleteExperience = useCallback((index) => {
    setExperience((prev) => prev.filter((_, i) => i !== index));
  }, []);

  // Projects management
  const addProject = useCallback((project) => {
    setProjects((prev) => [project, ...prev]);
  }, []);

  const editProject = useCallback((index, updatedProject) => {
    setProjects((prev) =>
      prev.map((proj, i) => (i === index ? updatedProject : proj))
    );
  }, []);

  const deleteProject = useCallback((index) => {
    setProjects((prev) => prev.filter((_, i) => i !== index));
  }, []);

  // Personal data management
  const editPersonal = useCallback((updatedPersonal) => {
    setPersonal((prev) => ({ ...prev, ...updatedPersonal }));
  }, []);

  const value = {
    skills,
    experience,
    projects,
    personal,
    addSkill,
    editSkill,
    deleteSkill,
    addExperience,
    editExperience,
    deleteExperience,
    addProject,
    editProject,
    deleteProject,
    editPersonal,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}

export default portfolioData;
