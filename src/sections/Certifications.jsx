import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

function Certifications({ items }) {
  return (
    <section id="certifications" className="bg-[#f2ecfb] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading title="Certifications" subtitle="Credentials" />
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4 }}
          className="grid gap-4 md:grid-cols-2"
        >
          {items.map((certification) => (
            <li
              key={certification}
              className="rounded-xl border border-violet-200 bg-white p-5 text-slate-700 shadow-md shadow-violet-100/70"
            >
              {certification}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default Certifications;
