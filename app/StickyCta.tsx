"use client";

import { useEffect, useState } from "react";

// スマホだけ画面下に出る相談ボタン。ファーストビューと問い合わせセクションが見えている間は隠す。
export default function StickyCta({ href, external, label }: { href: string; external: boolean; label: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    let pastHero = false;
    let contactVisible = false;
    const update = () => setShow(pastHero && !contactVisible);

    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.8;
      update();
    };
    const observer = new IntersectionObserver(([entry]) => {
      contactVisible = entry.isIntersecting;
      update();
    });
    if (contact) observer.observe(contact);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-50 transition duration-200 md:hidden ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        tabIndex={show ? 0 : -1}
        className="flex h-12 items-center justify-center rounded-xl bg-accent text-sm font-bold text-white shadow-lg"
      >
        {label}
      </a>
    </div>
  );
}
