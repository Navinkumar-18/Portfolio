import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const academicItems = [
  {
    degree: "BE Computer Science and Engineering",
    institution: "Velalar College of Engineering and Technology",
    details: "CGPA: 8.7 (Current)",
    timeline: "2024 - Present",
  },
  {
    degree: "Higher Secondary Education (HSC)",
    institution: "Govt Boys Higher Secondary School",
    details: "Score: 553/600 | School First | Major Subjects: Mathematics, Physics, Chemistry, Computer Science",
    timeline: "2022 - 2024",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Govt Boys Higher Secondary School",
    details: "Score: 456/500 (School First)",
    timeline: "2021 - 2022",
  },
];

function Academics() {
  return (
    <section id="academics" className="bg-[#eaf0fb] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading title="Academic Background" subtitle="Education" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="space-y-5"
        >
          {academicItems.map((item) => (
            <article
              key={item.degree}
              className="rounded-2xl border border-violet-200 bg-white p-6 shadow-md shadow-violet-100/70 md:p-7"
            >
              <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-800">{item.degree}</h3>
                <span className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-1 text-sm font-semibold text-white">
                  {item.timeline}
                </span>
              </div>
              <p className="text-base font-medium text-cyan-700">{item.institution}</p>
              <p className="mt-2 text-slate-600">{item.details}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Academics;
