import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-10 text-center">Aneeza Batool – Portfolio</h1>
      <div className="flex flex-col space-y-14">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="rounded-2xl p-6 bg-zinc-800 transition-all duration-300 shadow-md hover:shadow-lg border border-zinc-700"
          >
            <div className="overflow-x-auto flex space-x-4 pb-4 scrollbar-thin scroll-smooth snap-x">
              {project.images.map((img, i) => (
                <div key={i} className="relative w-80 max-h-[500px] flex-shrink-0 snap-center">
                  <img
                    src={`/assets/${img}`}
                    alt={`${project.title} ${i + 1}`}
                    className="object-contain w-full h-full rounded-xl border border-zinc-700 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => setModalImage(`/assets/${img}`)}
                  />
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-semibold mt-4 mb-2">{project.title}</h2>
            <p className="text-md text-gray-300">{project.desc}</p>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative w-full max-w-6xl max-h-screen overflow-auto rounded-lg bg-black p-4"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-4 text-white text-3xl font-bold z-10 hover:text-red-400"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Preview"
              className="w-full h-auto object-contain mx-auto"
              style={{ maxHeight: '90vh' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
