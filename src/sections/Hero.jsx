import { motion } from "framer-motion";
import profileImage from "../assets/myphoto.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-r from-[#2a2ca8] via-[#343cae] to-[#4a3bb2] px-4 pb-16 pt-24 md:px-6 md:pb-24 md:pt-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 rounded-full border border-violet-300/40 bg-white/10 px-4 py-1 text-sm font-medium text-violet-100"
          >
            Full Stack Enthusiast | Aspiring App Developer | AI Explorer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mb-5 max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">{"Navinkumar\u00A0M"}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="max-w-3xl text-base leading-relaxed text-violet-100 md:text-lg"
          >
            I build scalable web and mobile applications using modern technologies like React, Node.js, and Flutter,
            with a growing focus on AI-driven systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="rounded-lg bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-violet-200/60 bg-white/10 px-6 py-3 text-sm font-semibold text-violet-50 transition hover:bg-white/20"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="rounded-lg border border-violet-200/60 bg-white/10 px-6 py-3 text-sm font-semibold text-violet-50 transition hover:bg-white/20"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto w-fit rounded-full border-4 border-violet-300/70 p-2 shadow-2xl shadow-violet-900/30"
        >
          <img
            src={profileImage}
            alt="Navinkumar profile"
            className="h-64 w-64 rounded-full object-cover object-[50%_26%] md:h-80 md:w-80"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
