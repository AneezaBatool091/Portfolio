import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  "React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Node.js",
  "Python", "SQL", "ASP.NET", "Flutter", "MS Project", "JMeter",
  "Git & GitHub", "Postman", "Microsoft Excel"
];

const projects = [
  {
    title: "Smart City Infrastructure Development",
    desc: "Created detailed project documentation and Gantt charts using MS Project for a complete Smart City planning solution.",
    images: ["sci-1.JPG", "sci-2.JPG"],
  },
  {
    title: "Tempt. Bakeshop – E-Commerce Website",
    desc: "React-based frontend site with 5 pages, including category filtering, search bar, and cart functionality.",
    images: ["tempt-1.JPG", "tempt-2.JPG", "tempt-3.JPG"],
  },
  {
    title: "Dental Assistant – Chatbot",
    desc: "Built with Python and Tkinter using an intent-based system with JSON; includes error handling and GUI customization.",
    images: ["dental-1.JPG"],
  },
  {
    title: "Globe Lingo – Flutter App",
    desc: "Supports translation of 100+ languages, currency conversion, and global time zones with login/registration via SQLite.",
    images: ["gl-1.JPG", "gl-2.JPG", "gl-3.JPG", "gl-4.JPG", "gl-5.JPG"],
  },
  {
    title: "E-Commerce Database Optimization",
    desc: "Used MSSQL Server with normalization, indexing, stored procedures, and triggers. Frontend built in ASP.NET Web Forms.",
    images: ["Admin-1.JPG", "cs-1.JPG", "cs-2.JPG", "productmgr-1.JPG", "productmgr-2.JPG", "sales-1.JPG", "sales-2.JPG"],
  },
  {
    title: "API Testing – JMeter",
    desc: "Tested Cat Facts API, captured performance metrics, and generated HTML reports simulating multiple user requests.",
    images: ["Jmeter-1.JPG", "Jmeter-2.JPG"],
  },
  {
    title: "Chronic Kidney Disease Prediction",
    desc: "Trained Random Forest and Logistic Regression models with >98% accuracy on a CKD dataset using Python and sklearn.",
    images: ["ckd-1.JPG", "ckd-2.JPG", "ckd-3.JPG"],
  },
  {
    title: "Nessus Vulnerability Assessment",
    desc: "Conducted host discovery and basic network scans on public websites, analyzed vulnerabilities with remediation suggestions.",
    images: ["sna-1.JPG", "sna-2.JPG"],
  },
];

export default function Portfolio() {
  const [modalData, setModalData] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white p-6 relative">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 text-sm bg-zinc-700 hover:bg-zinc-600 text-white px-3 py-1 rounded"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-center">Aneeza Batool – Portfolio</h1>

      {/* About Me */}
      <section data-aos="fade-up" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed">
          I’m a passionate and detail-oriented BSIT student with hands-on experience in web and mobile development, 
          database optimization, and machine learning. I strive to create impactful digital solutions and constantly 
          seek new learning opportunities. I'm especially enthusiastic about blending creativity with logic in projects that matter.
        </p>
      </section>

      {/* Skills */}
      <section data-aos="fade-up" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-teal-600 text-white text-sm px-4 py-2 rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Resume Download */}
      <section data-aos="fade-up" className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <a
          href="/Aneeza-Batool-Resume.pdf"
          download
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          Download Resume
        </a>
      </section>

      {/* Projects */}
      <section data-aos="fade-up" className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Projects</h2>
        <div className="flex flex-col space-y-14">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 bg-zinc-100 text-black dark:bg-zinc-800 dark:text-white border border-zinc-300 dark:border-zinc-700"
            >
              <div className="overflow-x-auto flex space-x-4 pb-4 scrollbar-thin snap-x">
                {project.images.map((img, i) => (
                  <div key={i} className="relative w-80 max-h-[500px] flex-shrink-0 snap-center">
                    <img
                      src={`/assets/${img}`}
                      alt={`${project.title} ${i + 1}`}
                      className="object-contain w-full h-full rounded-xl border border-zinc-300 dark:border-zinc-700 transition-transform duration-300 hover:scale-105 cursor-pointer"
                      onClick={() => setModalData(project)}
                    />
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalData && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setModalData(null)}
        >
          <div
            className="relative w-full max-w-6xl max-h-screen overflow-auto rounded-lg bg-zinc-900 text-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalData(null)}
              className="absolute top-2 right-4 text-white text-3xl font-bold hover:text-red-400"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">{modalData.title}</h2>
            <p className="mb-4 text-gray-300">{modalData.desc}</p>
            <div className="flex flex-wrap gap-4">
              {modalData.images.map((img, idx) => (
                <img
                  key={idx}
                  src={`/assets/${img}`}
                  alt={`${modalData.title} ${idx + 1}`}
                  className="h-64 rounded border border-zinc-600 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
