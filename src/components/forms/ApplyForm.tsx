"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { applyPage, individualSubjects } from "@/lib/content";

type FormState = {
  name: string;
  school: string;
  grade: string;
  email: string;
  subject: string;
  level: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink focus:border-brand-500 focus:outline-none ${
    hasError ? "border-red-400" : "border-gray-200"
  }`;
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-bold text-ink">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-bold text-red-500">{error}</span>}
    </label>
  );
}

export function ApplyForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    school: "",
    grade: "",
    email: "",
    subject: defaultSubject,
    level: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "お名前を入力してください";
    if (!form.school.trim()) next.school = "学校名を入力してください";
    if (!form.grade) next.grade = "学年を選択してください";
    if (!form.email.trim()) next.email = "メールアドレスを入力してください";
    else if (!emailPattern.test(form.email)) next.email = "メールアドレスの形式が正しくありません";
    if (!form.subject) next.subject = "ご希望の科目を選択してください";
    if (!form.level) next.level = "ご希望の級を選択してください";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border-2 border-brand-100 bg-white p-6 text-center">
        <p className="text-sm leading-relaxed font-bold text-ink-muted">{applyPage.pendingNotice}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field label={applyPage.nameLabel} error={errors.name}>
        <input
          type="text"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder={applyPage.namePlaceholder}
          className={inputClass(!!errors.name)}
        />
      </Field>

      <Field label={applyPage.schoolLabel} error={errors.school}>
        <input
          type="text"
          value={form.school}
          onChange={(e) => update("school", e.target.value)}
          placeholder={applyPage.schoolPlaceholder}
          className={inputClass(!!errors.school)}
        />
      </Field>

      <Field label={applyPage.gradeLabel} error={errors.grade}>
        <select
          value={form.grade}
          onChange={(e) => update("grade", e.target.value)}
          className={inputClass(!!errors.grade)}
        >
          <option value="">選択してください</option>
          {applyPage.gradeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label={applyPage.emailLabel} error={errors.email}>
        <input
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder={applyPage.emailPlaceholder}
          className={inputClass(!!errors.email)}
        />
      </Field>

      <Field label={applyPage.subjectLabel} error={errors.subject}>
        <select
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          className={inputClass(!!errors.subject)}
        >
          <option value="">選択してください</option>
          {individualSubjects.map((subject) => (
            <option key={subject.slug} value={subject.slug}>
              {subject.name}
            </option>
          ))}
        </select>
      </Field>

      <Field label={applyPage.levelLabel} error={errors.level}>
        <select
          value={form.level}
          onChange={(e) => update("level", e.target.value)}
          className={inputClass(!!errors.level)}
        >
          <option value="">選択してください</option>
          {applyPage.levelOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label={applyPage.messageLabel}>
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder={applyPage.messagePlaceholder}
          rows={4}
          className={inputClass(false)}
        />
      </Field>

      <button
        type="submit"
        className="w-full rounded-full bg-accent-400 px-6 py-4 text-base font-bold text-white shadow-[0_4px_0_0_var(--color-accent-700)] transition-transform active:translate-y-[3px] active:shadow-[0_1px_0_0_var(--color-accent-700)]"
      >
        {applyPage.submitLabel}
      </button>
    </form>
  );
}
