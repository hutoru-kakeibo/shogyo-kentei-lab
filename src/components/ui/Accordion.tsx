"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const themes = {
  light: {
    wrapper: "bg-canvas",
    question: "text-ink",
    icon: "text-ink-muted",
    answer: "text-ink-muted",
  },
  dark: {
    wrapper: "bg-white/10",
    question: "text-white",
    icon: "text-white/70",
    answer: "text-white/80",
  },
} as const;

export function AccordionItem({
  question,
  answer,
  variant = "light",
}: {
  question: string;
  answer: string;
  variant?: keyof typeof themes;
}) {
  const [open, setOpen] = useState(false);
  const theme = themes[variant];

  return (
    <div className={`overflow-hidden rounded-2xl ${theme.wrapper}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-3 px-4 py-3.5 text-left"
      >
        <span className={`text-sm font-bold ${theme.question}`}>{question}</span>
        <ChevronDown
          size={18}
          className={`mt-0.5 shrink-0 transition-transform duration-200 ${theme.icon} ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <p className={`px-4 pb-4 text-sm leading-relaxed ${theme.answer}`}>{answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
