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
    desc: "Developed comprehensive Gantt charts and detailed project documentation using Microsoft Project. The solution outlines infrastructure planning for modern smart cities with timelines and resource allocations.",
    images: ["sci-1.JPG", "sci-2.JPG"],
  },
  {
    title: "Tempt. Bakeshop – E-Commerce Website",
    desc: "This is a multi-page e-commerce website featuring product categories, a dynamic search bar, and cart functionality. Built using React.js for the frontend and CSS for styling, the site is responsive and user-friendly. The project is bundled using Vite for fast builds and optimal performance.",
    images: ["tempt-1.JPG", "tempt-2.JPG", "tempt-3.JPG"],
  },
  {
    title: "Dental Assistant – Chatbot",
    desc: "Built an AI chatbot using Python, Tkinter, and JSON with NLP-based intent matching to handle dental queries. Features include a themed GUI, timestamped responses, FAQs, error handling, and structured information delivery.",
    images: ["dental-1.JPG"],
  },
  {
    title: "Globe Lingo – Flutter App",
    desc: "A cross-platform mobile app that supports translation of 100+ languages, currency conversion, and global time zones. Developed using Flutter and Dart, it also includes login and registration functionality using SQLite. REST APIs were integrated for live data retrieval, ensuring real-time utility across its modules.",
    images: ["gl-1.JPG", "gl-2.JPG", "gl-3.JPG", "gl-4.JPG", "gl-5.JPG"],
  },
  {
    title: "E-Commerce Database Optimization",
    desc: "Developed a complete e-commerce solution with secure login, product and order management, and role-specific dashboards. Integrated front-end and back-end functionality using ASP.NET and optimized SQL Server database performance through indexing, stored procedures, and triggers for fast, reliable data handling.",
    images: ["Admin-1.JPG", "cs-1.JPG", "cs-2.JPG", "productmgr-1.JPG", "productmgr-2.JPG", "sales-1.JPG", "sales-2.JPG"],
  },
  {
    title: "API Testing – JMeter",
    desc: "Simulated concurrent API requests, monitored response metrics, and generated HTML reports to evaluate the Cat Facts API's performance.",
    images: ["Jmeter-1.JPG", "Jmeter-2.JPG"],
  },
  {
    title: "Chronic Kidney Disease Prediction",
    desc: "Developed a CKD prediction system using a medical dataset with 25 features by applying data preprocessing and training Random Forest and Logistic Regression models using Python, pandas, scikit-learn, and Tkinter. Achieved up to 98% accuracy, and deployed the Random Forest model in a desktop GUI application for real-time predictions.",
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

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-6 relative">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-center">Aneeza Batool – Portfolio</h1>

      {/* About Me */}
      <section data-aos="fade-up" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
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
              className="rounded-2xl p-6 bg-zinc-100 text-black border border-zinc-300"
            >
              <div className="overflow-x-auto flex space-x-4 pb-4 scrollbar-thin snap-x">
                {project.images.map((img, i) => (
                  <div key={i} className="relative w-80 max-h-[500px] flex-shrink-0 snap-center">
                    <img
                      src={`/assets/${img}`}
                      alt={`${project.title} ${i + 1}`}
                      className="object-contain w-full h-full rounded-xl border border-zinc-300 transition-transform duration-300 hover:scale-105 cursor-pointer"
                      onClick={() => setModalData(project)}
                    />
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.desc}</p>
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
            className="relative w-full max-w-6xl max-h-screen overflow-auto rounded-lg bg-white text-black p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalData(null)}
              className="absolute top-2 right-4 text-black text-3xl font-bold hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">{modalData.title}</h2>
            <p className="mb-4 text-gray-800">{modalData.desc}</p>
            <div className="flex flex-wrap gap-4">
              {modalData.images.map((img, idx) => (
                <img
                  key={idx}
                  src={`/assets/${img}`}
                  alt={`${modalData.title} ${idx + 1}`}
                  className="h-64 rounded border border-zinc-400 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
