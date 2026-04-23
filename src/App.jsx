import { useMemo } from "react";
import { FaBrain, FaChartBar, FaCode, FaDatabase, FaJava, FaNodeJs, FaPython, FaReact, FaTools } from "react-icons/fa";
import { SiC, SiCss, SiFigma, SiFlutter, SiHtml5, SiJavascript, SiSupabase, SiZapier } from "react-icons/si";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Academics from "./sections/Academics";
import Achievements from "./sections/Achievements";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  const skillCategories = useMemo(
    () => [
      {
        title: "Programming",
        skills: [
          { name: "C", icon: SiC },
          { name: "Java", icon: FaJava },
          { name: "Python", icon: FaPython },
          { name: "JavaScript", icon: SiJavascript },
        ],
      },
      {
        title: "Full Stack",
        skills: [
          { name: "HTML", icon: SiHtml5 },
          { name: "CSS", icon: SiCss },
          { name: "React", icon: FaReact },
          { name: "Node.js", icon: FaNodeJs },
        ],
      },
      {
        title: "App Development",
        skills: [
          { name: "Flutter", icon: SiFlutter },
          { name: "Supabase", icon: SiSupabase },
        ],
      },
      {
        title: "AI & Data",
        skills: [
          { name: "LLM Basics", icon: FaBrain },
          { name: "RAG", icon: FaCode },
          { name: "SQL", icon: FaDatabase },
          { name: "Power BI", icon: FaChartBar },
        ],
      },
      {
        title: "Tools",
        skills: [
          { name: "MySQL", icon: FaDatabase },
          { name: "Power BI", icon: FaChartBar },
          { name: "MongoDB", icon: FaDatabase },
          { name: "Figma", icon: SiFigma },
          { name: "Coding Agent Tools", icon: FaTools },
          { name: "Zapier", icon: SiZapier },
        ],
      },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        title: "Nostra - Fashion E-Commerce Website",
        description:
          "A modern fashion e-commerce platform designed to deliver a seamless and responsive shopping experience.",
        stack: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        features: [
          "Product listing with category filtering",
          "Responsive UI",
          "Add to cart functionality",
          "Dynamic product rendering",
        ],
        github: "https://nostra-coral.vercel.app/",
        demo: "https://nostra-demo.netlify.app",
      },
      {
        title: "VCET Connect App",
        description:
          "A campus companion app built to help students navigate academics, events, and essential college resources in one place.",
        stack: ["Flutter", "Supabase", "Dart"],
        features: [
          "Student-friendly dashboard for quick access to key updates",
          "Department and event information in a single mobile app",
          "Clean and responsive UI optimized for daily campus use",
        ],
        github: "https://github.com/Navinkumar-18/VCET-Connect-App",
        demo: "https://github.com/Navinkumar-18",
      },
      {
        title: "Self-Evolving RAG",
        description: "Hackathon project implementing adaptive and evolving retrieval mechanisms.",
        stack: ["Python", "Vector DB", "RAG", "LLM"],
        github: "https://github.com/Navinkumar-18/Self-RAG-System",
        demo: "https://self-evolving-rag-demo.vercel.app",
      },
    ],
    []
  );

  const achievements = useMemo(
    () => [
      "Class Representative",
      "Executive Member - DataPirates Club",
      "Team Leader - Hackathon conducted by IIT Bombay",
      "Team leader of My SIH-2025 team",
      "Team leader of Hacknova conducted by PSG College of Technology",
      "Solved 50+ LeetCode problems",
    ],
    []
  );

  const certifications = useMemo(
    () => [
      "NPTEL - Introduction to IoT (88%)",
      "Infosys Springboard - HTML, CSS, JavaScript",
      "NVIDIA - Getting Started with AI on Jetson Nano",
      "Participated in Tamil Nadu level hackathon held by PSG College of Technology, Coimbatore",
      "Presented a paper on Adaptive RAG at PSG College of Technology, Coimbatore",
      "Attended a workshop about \"JavaScript and React in Action\" at PSG College of Technology, Coimbatore",
    ],
    []
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills categories={skillCategories} />
        <Projects projects={projects} />
        <Achievements items={achievements} />
        <Certifications items={certifications} />
        <Academics />
        <Contact />
      </main>
      <footer className="border-t border-violet-200 bg-slate-900 px-4 py-8 text-center text-sm text-slate-200">
        <p>© {new Date().getFullYear()} Navinkumar M</p>
      </footer>
    </div>
  );
}

export default App;
