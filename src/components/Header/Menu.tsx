// src/components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { useScrolled } from "../../shared/hooks/useScrolled.tsx";

const links = [
  { href: "#about", label: "Sobre" },
  { href: "#articles", label: "Publicações" },
  { href: "#work", label: "Trabalho" },
  { href: "#contact", label: "Contato" },
];

export default function Navbar() {
  const scrolled = useScrolled(8);
  const [open, setOpen] = useState(false);

  // cores dinâmicas
  const textBase = scrolled ? "text-[#311910]" : "text-[#BE9D7C]";
  const textMuted = scrolled
    ? "text-[#311910]/90 hover:text-[#311910]"
    : "text-[#BE9D7C]/90 hover:text-[#BE9D7C]";

  const iconStroke = scrolled ? "#311910" : "#BE9D7C";

  // lock de scroll + fechar com ESC
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        open // quando o menu está aberto, força fundo claro
          ? "bg-white/95 shadow"
          : scrolled
          ? "bg-white/90 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
      )}>
      <nav className="mx-auto flex container items-center justify-between px-4 py-9 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#"
          className={cn(
            "text-lg font-regular tracking-widest no-underline transition-colors uppercase",
            textBase
          )}>
          Home
        </a>

        {/* Links desktop */}
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

        {/* Botão hambúrguer (mobile) */}
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md  "
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}>
          <span className="sr-only">Abrir menu</span>
          {open ? (
            <CloseIcon stroke={iconStroke} />
          ) : (
            <MenuIcon stroke={iconStroke} />
          )}
        </button>
      </nav>

      {/* Painel mobile */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden origin-top transition-all",
          open
            ? "pointer-events-auto opacity-100 scale-y-100 flex"
            : "pointer-events-none opacity-0 scale-y-95 hidden"
        )}>
        <div className="container px-4 pb-6 sm:px-6 lg:px-8">
          <div className="h-[1px] w-full bg-[#BE9D7C]" />
          <ul className="space-y-3 py-2">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-lg uppercase tracking-widest text-[#311910] hover:bg-[#311910]/5">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay para clicar fora e fechar (opcional, fica só no mobile) */}
      {open && (
        <button
          aria-hidden
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 top-[72px] "
        />
      )}
    </header>
  );
}

/* Ícones sem dependências */
function MenuIcon({ stroke = "#000" }: { stroke?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon({ stroke = "#000" }: { stroke?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 6l12 12M18 6l-12 12"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
