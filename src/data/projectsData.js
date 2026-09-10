const projects = [
  {
    id: 1,
    title: "Vaulta",
    category: "React App",
    description:
      "A responsive fintech personal finance dashboard featuring transaction filtering, savings goal tracking, spending charts, and simulated fund transfers.",
    techStack: ["React", "Vite", "Recharts", "React Router", "CSS"],
    liveUrl: "https://vaulta-smoky.vercel.app/",
    githubUrl: "https://github.com/Obehi123-beep/vaulta",
    featured: true,
  },
  {
    id: 2,
    title: "MindFlow",
    category: "React App",
    description:
      "Personal productivity dashboard built with React and Vite featuring task management, note-taking, workspace organization, and a local deterministic AI assistant handler.",
    techStack: ["React", "Vite", "JavaScript", "CSS", "LocalStorage"],
    liveUrl: "https://mindflow-app-olive.vercel.app/",
    githubUrl: "https://github.com/Obehi123-beep/mindflow",
    featured: true,
  },
  {
    id: 3,
    title: "LogiTrack",
    category: "React App",
    description:
      "A React-based logistics management system for tracking shipments, managing delivery statuses, viewing customer activity, and monitoring shipment performance with persistent data.",
    techStack: ["React", "Vite", "React Router", "CSS", "LocalStorage"],
    liveUrl: "https://logistics-management-dashboard.vercel.app/",
    githubUrl: "https://github.com/Obehi123-beep/logistics-management-dashboard",
    featured: true,
  },
  {
    id: 4,
    title: "NB Intelligence Dashboard",
    category: "React Dashboard",
    description:
      "Interactive inventory and distribution dashboard for monitoring product stock, recording sales and restocks, filtering inventory, and viewing business insights.",
    techStack: ["React", "JavaScript", "CSS3", "Recharts", "Vite"],
    liveUrl: "https://nb-intelligence-dashboard.vercel.app/",
    githubUrl: "https://github.com/Obehi123-beep/nb-intelligence-dashboard",
    featured: true,
  },
  {
    id: 5,
    title: "HomeFinder",
    category: "React App",
    description:
      "Modern real estate application featuring dynamic property search, interactive filters, and responsive property listing views.",
    techStack: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://home-finder-murex.vercel.app/",
    githubUrl: "https://github.com/Obehi123-beep/HomeFinder",
    featured: true,
  },
  {
    id: 6,
    title: "Su's Laundry",
    category: "React App",
    description:
      "Responsive laundry service platform featuring service listings, pricing information, interactive components, and a mobile-friendly interface.",
    techStack: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://su-s-laundry.vercel.app/",
    githubUrl: "https://github.com/Obehi123-beep/su-s-laundry",
    featured: true,
  },
  {
    id: 7,
    title: "Customer Support Dashboard",
    category: "React App",
    description:
      "Interactive customer support dashboard designed to manage user tickets, response metrics, and query logs efficiently.",
    techStack: ["React", "Vite", "JavaScript", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Obehi123-beep/mindflow",
    featured: true,
  },
  {
    id: 8,
    title: "JobTrack",
    category: "React App",
    description:
      "Responsive React job application tracker featuring modular components, full CRUD operations, real-time filtering, analytics, and persistent state via browser localStorage.",
    techStack: ["React", "Vite", "CSS Modules", "LocalStorage"],
    liveUrl: "https://job-application-tracker-green-eight.vercel.app/",
    githubUrl: "https://github.com/Obehi123-beep/job-application-tracker",
    featured: true,
  },
  {
    id: 9,
    title: "Currency & Crypto Converter",
    category: "React App",
    description:
      "Multi-currency and cryptocurrency conversion application built with React, Vite, and external API data fetching.",
    techStack: ["React", "JavaScript", "Vite", "CSS"],
    liveUrl: "https://crypto-currency-converter-theta.vercel.app/",
    githubUrl: "https://github.com/Obehi123-beep/crypto-currency-converter",
    featured: true,
  },
  {
    id: 10,
    title: "BuildForge",
    category: "Web Application",
    description:
      "Multi-page construction and architecture website showcasing company services, project portfolios, responsive layouts, and project galleries.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://buildforgeproject.vercel.app/",
    githubUrl: "https://github.com/Obehi123-beep/Buildforgeproject",
    featured: false,
  },
  {
    id: 11,
    title: "Meme's Small Chops",
    category: "Web Application",
    description:
      "Interactive catering website featuring menu sections, service information, order inquiries, contact forms, and responsive layouts.",
    techStack: ["HTML5", "CSS3", "Bootstrap"],
    liveUrl: "https://memesmallchops.vercel.app/",
    githubUrl: "https://github.com/Obehi123-beep/memesmall_chops",
    featured: false,
  },
  {
    id: 12,
    title: "Pinnacle Estates",
    category: "Web Application",
    description:
      "Real estate agency website featuring property listings, agent information, property detail pages, navigation, and responsive layouts.",
    techStack: ["Bootstrap", "JavaScript", "HTML5"],
    liveUrl: "#",
    githubUrl: "https://github.com/Obehi123-beep/Pinacle_estate",
    featured: false,
  },
  {
    id: 13,
    title: "Travel Ease",
    category: "Web Application",
    description:
      "Visa and travel services platform designed to present application information, travel services, requirements, and client support resources.",
    techStack: ["HTML5", "CSS3", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "https://github.com/Obehi123-beep/Travel_ease",
    featured: false,
  },
  {
    id: 14,
    title: "Obehii Energy",
    category: "Web Application",
    description:
      "Responsive corporate website for an energy company showcasing service offerings, industry solutions, company information, and statistics.",
    techStack: ["HTML5", "CSS3", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "https://github.com/Obehi123-beep/Obehi_energy",
    featured: false,
  },
  {
    id: 15,
    title: "Angel Mira Consult",
    category: "Web Application",
    description:
      "Responsive logistics website featuring shipment-related services, company information, service sections, and responsive layouts.",
    techStack: ["Bootstrap", "HTML5", "CSS3"],
    liveUrl: "https://angelmira.vercel.app/",
    githubUrl: "https://github.com/Obehi123-beep/angel_mira",
    featured: false,
  },
  {
    id: 16,
    title: "Piano Project",
    category: "Interactive App",
    description:
      "Interactive browser-based piano application that responds to keyboard and click events to produce musical notes.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://pianoproject-pi.vercel.app/",
    githubUrl: "https://github.com/Obehi123-beep/Piano_project",
    featured: false,
  },
  {
    id: 17,
    title: "Digital Clock",
    category: "JavaScript App",
    description:
      "Real-time digital clock application displaying the current local time and date using JavaScript.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://digitalclock-sandy.vercel.app/",
    githubUrl: "https://github.com/Obehi123-beep/Digital_clock",
    featured: false,
  },
];

export default projects;