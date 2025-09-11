// src/components/Navbar.tsx
"use client";

import { useScrolled } from "../../shared/hooks/useScrolled.tsx";

const links = [
  { href: "#about", label: "Sobre" },
  { href: "#articles", label: "Publicações" },
  { href: "#work", label: "Trabalho" },
  { href: "#contact", label: "Contato" },
];

export default function Navbar() {
  const scrolled = useScrolled(8);

  const textBase = scrolled ? "text-[#311910]" : "text-[#BE9D7C]";
  const textMuted = scrolled
    ? "text-[#311910]/90 hover:text-[#311910]"
    : "text-[#BE9D7C]/90 hover:text-[#BE9D7C]";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        //"backdrop-blur-sm", // nice subtle blur when bg is translucent
        scrolled
          ? "bg-white/90 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
      )}>
      <nav className="mx-auto flex container items-center justify-between px-4 py-9 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#"
          className={cn(
            "text-lg font-regular tracking-widest no-underline transition-colors uppercase ",
            textBase
          )}>
          Home
        </a>

        {/* Links */}
        <ul className="hidden gap-6 md:flex">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "transition-colors uppercase font-regular tracking-widest",
                  textMuted
                )}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {/* <a
          href="#contact"
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            "ring-1 ring-white/20 text-white hover:bg-white/10"
          )}>
          Contact
        </a> */}
      </nav>
    </header>
  );
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
