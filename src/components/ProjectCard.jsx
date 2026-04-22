import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-violet-200 bg-white p-6 shadow-lg shadow-violet-100/70"
    >
      <h3 className="mb-3 text-xl font-semibold text-slate-800">{project.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-slate-600">{project.description}</p>

      {project.features?.length ? (
        <ul className="mb-4 list-inside list-disc space-y-1 text-sm text-slate-600">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      ) : null}

      {project.stack?.length ? (
        <div className="mb-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}

      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-violet-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-violet-500 hover:text-violet-700"
        >
          <FaGithub /> Click Here
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
