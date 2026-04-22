function SkillCategoryCard({ title, skills }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-violet-200/70 bg-gradient-to-br from-white via-violet-50/40 to-fuchsia-50/50 p-6 shadow-lg shadow-violet-200/60 transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-200/80">
      <div className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-violet-200/30 blur-2xl" />
      <h3 className="mb-5 text-2xl font-bold text-slate-800">{title}</h3>
      <div className="relative flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span
            key={typeof skill === "string" ? skill : skill.name}
            className="inline-flex items-center gap-2 rounded-xl border border-violet-200/90 bg-white/95 px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm shadow-violet-100 transition hover:-translate-y-0.5 hover:border-violet-400 hover:bg-violet-50"
          >
            {typeof skill === "string" ? null : skill.icon ? <skill.icon className="text-base text-violet-600" /> : null}
            {typeof skill === "string" ? skill : skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCategoryCard;
