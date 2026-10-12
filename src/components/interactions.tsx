"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { booking } from "@/lib/content";

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={false} whileInView={reduced ? {} : { opacity: [0.55, 1], y: [18, 0] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [{ label: "Услуги", href: "#services" }, { label: "Работы", href: "#works" }, { label: "Отзывы", href: "#reviews" }, { label: "Контакты", href: "#contacts" }];
  return <header className="site-header">
    <a href="#home" className="brand" aria-label="AutoRay12 — на главную" onClick={() => setOpen(false)}>
      <Image src="/images/logo.jpg" alt="" width={48} height={48} className="brand-logo" />
      <span className="brand-type">AUTO RAY<span className="brand-number">12</span><small>DETAILING · AKTAU</small></span>
    </a>
    <nav aria-label="Основная навигация" className="desktop-nav">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
    <a href={booking()} className="header-book" target="_blank" rel="noopener noreferrer">Записаться <ArrowUpRight size={17} aria-hidden="true" /></a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Закрыть меню" : "Открыть меню"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Мобильная навигация">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={22} /></a>)}<a href={booking()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Записаться в WhatsApp <ArrowUpRight size={22} /></a></nav>}
  </header>;
}
