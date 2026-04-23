import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";

function Projects({ projects }) {
  return (
    <section id="projects" className="scroll-mt-24 bg-[#f7f2df] px-4 py-16 md:scroll-mt-28 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading title="Projects" subtitle="Selected Work" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
