import { motion } from "framer-motion";
import SkillCategoryCard from "../components/SkillCategoryCard";
import SectionHeading from "../components/SectionHeading";

function Skills({ categories }) {
  return (
    <section id="skills" className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading title="Skills" subtitle="Tech Stack" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {categories.map((category) => (
            <SkillCategoryCard key={category.title} title={category.title} skills={category.skills} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
