import React from "react"; // Removed unused useState
import {
  Cpu,
  Code,
  Mail,
  Phone,
  Linkedin,
  Download,
  ChevronRight,
  Layers,
  Terminal,
  BookOpen,
  Award,
  // Removed Database and ExternalLink imports
} from "lucide-react";

export default function Portfolio() {
  // Removed unused activeSection state

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Removed setActiveSection call
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              KG
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Training", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="md:hidden p-2 text-slate-600"
            >
              <Mail className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              Open to Opportunities
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Hi, I’m <span className="text-blue-700">Kushal Gowda</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 font-medium">
              Aspiring Design Verification Engineer
            </h2>
            <p className="text-lg text-slate-600 max-w-xl">
              Specializing in SystemVerilog, UVM, and RTL Verification.
              Transitioning from data engineering to build the next generation
              of silicon.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-700/20 flex items-center gap-2"
              >
                Contact Me <ChevronRight className="h-4 w-4" />
              </button>
              {/* Changed button to anchor tag for download functionality */}
              <a
                href="https://github.com/kushalpm/Resume/raw/main/VLSI_Kushal_Gowda_P_M.pdf"
                download="Kushal_Gowda_Resume.pdf"
                className="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg font-medium transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </div>

          {/* Visual Element for VLSI/Chip */}
          <div className="flex-1 w-full flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl shadow-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="absolute inset-1 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-700">
                <div className="grid grid-cols-6 grid-rows-6 gap-2 w-full h-full p-4 opacity-30">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className="bg-blue-500/20 rounded-sm"></div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cpu className="h-24 w-24 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Layers className="h-8 w-8 text-blue-600" /> About Me
          </h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-6">
              I’m an Electronics & Communication Engineering graduate, currently
              undergoing intensive training at{" "}
              <span className="font-semibold text-blue-700">Maven Silicon</span>{" "}
              to become a Design Verification Engineer.
            </p>
            <p className="mb-6">
              My current focus is mastering{" "}
              <span className="font-semibold text-slate-800">
                SystemVerilog, Verilog, and UVM methodology
              </span>{" "}
              to build robust verification environments, develop layered
              testbenches, and analyze RTL behavior through simulation and
              debugging.
            </p>
            <p>
              Previously, I explored Azure-based data engineering, which proved
              invaluable in developing solid problem-solving skills, coding
              habits, and structured thinking. Now, I am channeling those
              analytical skills fully into the domain of VLSI and functional
              verification.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
            <Code className="h-8 w-8 text-blue-600" /> Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* VLSI & Verification */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-700">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Verification & VLSI
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "SystemVerilog (Verification)",
                  "Verilog HDL (RTL Basics)",
                  "UVM Methodology (In Training)",
                  "Functional Verification",
                  "Testbench Development",
                  "Functional Coverage & Constraints",
                  "Assertions (SVA Basics)",
                  "RTL Simulation & Debugging",
                ].map((skill, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shrink-0"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Programming & Tools */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-100 rounded-lg text-cyan-700">
                  <Terminal className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Tools & Programming
                </h3>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">
                  Programming
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "C (Basics)",
                    "SQL",
                    "Shell Scripting Basics",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">
                  EDA Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["QuestaSim", "GTKWave", "Vivado (Exposure)"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">
                  Previous Domain (Data)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Azure Data Factory",
                    "Azure Data Lake",
                    "Databricks",
                    "Power BI",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-blue-600" /> Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="flex flex-col bg-slate-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 border border-slate-100">
              <div className="h-2 bg-blue-600"></div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Maven Silicon DV Projects
                </h3>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-4">
                  Ongoing Training
                </span>
                <p className="text-slate-600 text-sm flex-1 mb-4">
                  Developing SystemVerilog testbenches for basic digital designs
                  including Counters, FIFOs, and ALUs. Practicing constrained
                  random verification, assertion-based verification, and
                  analyzing coverage reports.
                </p>
                <div className="flex gap-2 text-xs font-medium text-slate-500">
                  <span className="bg-white px-2 py-1 rounded border">
                    SystemVerilog
                  </span>
                  <span className="bg-white px-2 py-1 rounded border">UVM</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col bg-slate-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 border border-slate-100">
              <div className="h-2 bg-cyan-600"></div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Voice Guided Navigation System
                </h3>
                <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wide mb-4">
                  Academic Project
                </span>
                <p className="text-slate-600 text-sm flex-1 mb-4">
                  Designed a Raspberry Pi–based assistive system using CNNs
                  (COCO dataset) for object detection and OCR for
                  text-to-speech. Included emergency alert mechanisms.
                  Demonstrated embedded systems and system-level debugging
                  skills.
                </p>
                <div className="flex gap-2 text-xs font-medium text-slate-500">
                  <span className="bg-white px-2 py-1 rounded border">
                    Raspberry Pi
                  </span>
                  <span className="bg-white px-2 py-1 rounded border">
                    Python
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col bg-slate-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 border border-slate-100">
              <div className="h-2 bg-indigo-500"></div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Azure Data Lake Pipeline
                </h3>
                <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-4">
                  Data Engineering
                </span>
                <p className="text-slate-600 text-sm flex-1 mb-4">
                  Built an end-to-end pipeline copying CSV data to Azure Data
                  Lake using ADF. Implemented logging via SQL stored procedures.
                  Highlights ability to build structured, automated data
                  workflows.
                </p>
                <div className="flex gap-2 text-xs font-medium text-slate-500">
                  <span className="bg-white px-2 py-1 rounded border">
                    Azure
                  </span>
                  <span className="bg-white px-2 py-1 rounded border">SQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Timeline */}
      <section id="training" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
            <Award className="h-8 w-8 text-blue-600" /> Education & Training
          </h2>

          <div className="space-y-8 pl-4 border-l-2 border-slate-200 ml-4">
            {/* Item 1 */}
            <div className="relative pl-8">
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow-sm"></div>
              <span className="text-sm font-semibold text-blue-600">
                2025 – Present
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Design Verification Trainee
              </h3>
              <p className="text-slate-700 font-medium">Maven Silicon</p>
              <p className="text-slate-600 mt-2 text-sm">
                Specialized training in VLSI Verification using SystemVerilog
                and UVM.
              </p>
            </div>

            {/* Item 2 */}
            <div className="relative pl-8">
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-slate-400 shadow-sm"></div>
              <span className="text-sm font-semibold text-slate-500">
                2021 – 2025
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                B.E. Electronics & Communication
              </h3>
              <p className="text-slate-700 font-medium">
                P.E.S. College of Engineering, Mandya (VTU)
              </p>
              <p className="text-slate-600 mt-2 text-sm">
                CGPA: 7.8 | Built strong fundamentals in Digital Electronics and
                Embedded Systems.
              </p>
            </div>

            {/* Item 3 */}
            <div className="relative pl-8">
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-slate-300 shadow-sm"></div>
              <span className="text-sm font-semibold text-slate-500">
                Certifications
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">
                Additional Learning
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-white border rounded-full text-xs font-medium text-slate-600">
                  Microsoft Azure Fundamentals (AZ-900)
                </span>
                <span className="px-3 py-1 bg-white border rounded-full text-xs font-medium text-slate-600">
                  HackerRank SQL
                </span>
                <span className="px-3 py-1 bg-white border rounded-full text-xs font-medium text-slate-600">
                  Java Basics
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            I am currently looking for entry-level opportunities in Design
            Verification. Feel free to reach out to discuss how I can contribute
            to your team.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <a
              href="mailto:kushalpm26@gmail.com"
              className="flex flex-col items-center p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md mb-4 text-blue-600">
                <Mail className="h-6 w-6" />
              </div>
              <span className="text-slate-900 font-medium">Email Me</span>
              <span className="text-slate-500 text-sm mt-1">
                kushalpm26@gmail.com
              </span>
            </a>

            <a
              href="tel:+918088268769"
              className="flex flex-col items-center p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md mb-4 text-blue-600">
                <Phone className="h-6 w-6" />
              </div>
              <span className="text-slate-900 font-medium">Call Me</span>
              <span className="text-slate-500 text-sm mt-1">
                +91-8088268769
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/kushalgowdapm/"
              className="flex flex-col items-center p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md mb-4 text-blue-600">
                <Linkedin className="h-6 w-6" />
              </div>
              <span className="text-slate-900 font-medium">LinkedIn</span>
              <span className="text-slate-500 text-sm mt-1">View Profile</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Kushal Gowda P M. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
