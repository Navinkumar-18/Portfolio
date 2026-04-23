import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Achievements",
  "Academics",
  "Contact",
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-violet-200 bg-white/95 shadow-sm backdrop-blur-lg">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#home" className="text-3xl font-extrabold tracking-tight text-violet-700 md:text-4xl">
          Navin
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
                className="text-sm font-medium text-slate-700 transition hover:text-violet-700"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-lg border border-violet-300 p-2 text-violet-700 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-violet-200 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  onClick={closeMenu}
                  className="block text-sm font-medium text-slate-900 transition hover:text-violet-700"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
