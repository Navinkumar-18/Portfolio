import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#eef1f8] px-4 py-16 md:scroll-mt-28 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading title="About Me" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-violet-200 bg-white p-6 text-slate-900 shadow-lg shadow-violet-100/60 md:p-8"
        >
          <p className="mb-4 leading-relaxed">
            I am a Computer Science Engineering student with a CGPA of 8.7, currently pursuing my degree at Velalar
            College of Engineering and Technology.
          </p>
          <p className="mb-4 leading-relaxed">
            I am a Full Stack Enthusiast and an Aspiring App Developer with hands-on experience in building web and
            mobile applications. I also have foundational knowledge in AI concepts such as LLMs and
            Retrieval-Augmented Generation (RAG).
          </p>
          <p className="leading-relaxed">
            I enjoy solving real-world problems through scalable applications and continuously improving my skills. I
            have solved 50+ problems on LeetCode and actively participate in hackathons, research presentations, and
            technical communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
