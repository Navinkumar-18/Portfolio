import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import SectionHeading from "../components/SectionHeading";

function Contact() {
  const contactLinks = [
    {
      label: "Gmail",
      detail: "akinavin404@gmail.com",
      href: "mailto:akinavin404@gmail.com",
      icon: SiGmail,
      iconClass: "text-rose-600",
      iconBg: "bg-rose-100",
    },
    {
      label: "GitHub",
      detail: "github.com/Navinkumar-18",
      href: "https://github.com/Navinkumar-18",
      icon: FaGithub,
      iconClass: "text-slate-900",
      iconBg: "bg-slate-200",
    },
    {
      label: "LinkedIn",
      detail: "linkedin.com/in/navinkumar-m-310177332",
      href: "https://www.linkedin.com/in/navinkumar-m-310177332",
      icon: FaLinkedin,
      iconClass: "text-blue-700",
      iconBg: "bg-blue-100",
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 bg-[#fceff5] px-4 py-16 md:scroll-mt-28 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading title="Contact" subtitle="Let Us Connect" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-violet-200 bg-white p-6 shadow-lg shadow-violet-100/70 md:p-8"
        >
          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              const isExternal = item.href.startsWith("http");

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-violet-200 bg-violet-50/50 p-5 text-center shadow-md shadow-violet-100/70"
                >
                  <a
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    aria-label={item.label}
                    className={`mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full ${item.iconBg} text-2xl transition hover:scale-105`}
                  >
                    <Icon className={item.iconClass} />
                  </a>
                  <p className="mt-4 text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 break-words text-sm text-slate-700">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
