function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10 text-center md:mb-14">
      {subtitle ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-600">
          {subtitle}
        </p>
      ) : null}
      <h2 className="text-3xl font-extrabold text-slate-900 md:text-5xl">{title}</h2>
      <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-violet-500" />
    </div>
  );
}

export default SectionHeading;
