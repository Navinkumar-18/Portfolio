import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa6";
import SectionHeading from "../components/SectionHeading";

function Achievements({ items }) {
  return (
    <section id="achievements" className="bg-[#dff7f8] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading title="Achievements" subtitle="Leadership & Impact" />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="grid gap-4 md:grid-cols-2"
        >
          {items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-violet-200 bg-white p-4 text-slate-700 shadow-md shadow-violet-100/70"
            >
              <FaMedal className="mt-1 text-violet-500" />
              <p>{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;
