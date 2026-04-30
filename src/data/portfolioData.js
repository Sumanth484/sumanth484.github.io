const portfolioData = {
  personal: {
    name: "Sumanth Kumar",
    title: "Software Engineer",
    about: "Results-driven Software Engineer with over 2 years of hands-on experience in AWS infrastructure, Azure DevOps, and automation. Proficient in a wide range of DevOps tools including Git, Docker, Jenkins, Kubernetes, Ansible, Terraform, and Linux. Streamlined deployment pipelines, reducing deployment time and minimizing manual intervention through automation. Collaborates in Agile teams to boost productivity and optimizes cloud resources for cost efficiency.",
    resumeUrl: "/SUMANTH_PUVVADA_RESUME.pdf",
    social: {
      github: "https://github.com/Sumanth484",
      linkedin: "https://linkedin.com/in/sumanth-kumar-puvvada-96600b222",
    }
  },
  experience: [
    {
      company: "HCLTech",
      role: "Software Engineer",
      period: "2022 - Present",
      responsibilities: [
        "Automated the build process using Azure Build Pipelines to streamline code management and compilation",
        "Established a strategic branching strategy to support parallel development, minimizing code conflicts",
        "Facilitated effective collaboration, reduced merge conflicts, improved code integration, and accelerated release cycles",
        "Implemented Azure Release Pipelines for automated deployments across multiple environments",
        "Enhanced team collaboration, task tracking, and project visibility using Azure Boards within Agile practices"
      ]
    },
    {
      company: "HCLTech",
      role: "Graduate Engineer Trainee",
      period: "2021 - 2022",
      responsibilities: [
        "Honed web development skills through comprehensive training in HTML, CSS, JS, AngularJS, and ReactJS",
        "Successfully applied knowledge by delivering an internal capstone project showcasing proficiency in these technologies"
      ]
    }
  ],
  education: [
    {
      institution: "Jawaharlal Nehru Technological University, Kakinada",
      degree: "Bachelor of Technology in Electronics and Computers",
      period: "Jun 2018 – Jul 2022",
      description: "Excelled 4 years in the field of ELECTRONICS and COMPUTERS ENGINEERING with practical knowledge, which changed the perception of the world."
    },
    {
      institution: "Board of Intermediate Education",
      degree: "Higher Secondary Education in Mathematics & Sciences",
      period: "Jun 2016 – Mar 2018",
      description: "Excelled in intermediate education with focus on mathematics and sciences, building foundation for engineering studies."
    }
  ],
  projects: [
    {
      title: "Automated CI/CD Pipeline for Web Applications (Python, Django, Node.js, React) using Jenkins",
      description: "Designed and implemented a CI/CD pipeline using Jenkins and GitHub webhook triggers, accelerating deployment by 40% and increasing deployment frequency by 50%, resulting in a 35% enhancement in deployment performance and security.",
      techStack: ["Python", "Django", "Node.js", "React", "Jenkins", "GitHub"],
      link: "https://github.com/Sumanth484/Jenkins.git",
      image: "/images/project1.jpg"
    },
    {
      title: "Infrastructure Provisioning with Terraform (AWS)",
      description: "Automated infrastructure provisioning by creating a complete infrastructure stack for a web application on AWS using Infrastructure as Code (IaC). Structured and organized infrastructure code using Terraform Modules, enhancing code reusability and maintainability, resulting in a 30% boost in deployment effectiveness and security compliance.",
      techStack: ["Terraform", "AWS", "IaC"],
      link: "https://github.com/Sumanth484/Terraform.git",
      image: "/images/project2.jpg"
    },
    {
      title: "Configuration Management with Ansible Playbooks and Roles (Linux)",
      description: "Explored configuration management using Ansible playbooks and roles, enhancing system automation capabilities. Reduced manual configuration time by 50%. Developed an Ansible role to deploy applications on Apache servers, streamlining deployment processes and improving deployment consistency by 40%.",
      techStack: ["Ansible", "Linux", "Apache"],
      link: "https://github.com/Sumanth484/Ansible.git",
      image: "/images/project3.jpg"
    },
    {
      title: "UD TRUCKS",
      description: "Served as a consultant for UD TRUCKS, a Japanese company, developing applications for factory personnel in the manufacturing assembly line of trucks and cabs, resulting in a 25% increase in operational efficiency and a 15% reduction in production errors.",
      techStack: ["ASP.NET", "C#", "SQL"],
      link: "",
      image: "/images/project4.jpg"
    }
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
    ]
  }
};

export default portfolioData;
