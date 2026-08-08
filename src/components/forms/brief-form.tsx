"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Copy, LoaderCircle, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  company: z.string().trim().min(2, "Enter your organisation"),
  email: z.email("Enter a valid email address"),
  phone: z.string().trim().max(24, "Use no more than 24 characters").optional(),
  topic: z.string().trim().min(1, "Select an enquiry type"),
  location: z.string().trim().min(2, "Add the project or work location"),
  message: z.string().trim().min(30, "Please provide at least 30 characters"),
  consent: z.literal(true, { error: "Confirm that Corvex may use these details to respond" }),
});

type Values = z.infer<typeof schema>;
type BriefFormProps = { mode: "contact" | "quote" | "career" };

const configurations = {
  contact: { title: "Send an enquiry", submit: "Prepare message", topics: ["Product question", "Technical documentation", "Order and delivery", "Quality and inspection", "General enquiry"] },
  quote: { title: "Build your project brief", submit: "Prepare quote brief", topics: ["New perimeter project", "Replacement or retrofit", "Product supply", "Consultant specification support", "Budget enquiry"] },
  career: { title: "Register your interest", submit: "Prepare career note", topics: ["Manufacturing and operations", "Quality and testing", "Engineering and design", "Supply chain and planning", "Sales and project support"] },
} as const;

export function BriefForm({ mode }: BriefFormProps) {
  const config = configurations[mode];
  const [draft, setDraft] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { consent: undefined } });

  async function onSubmit(values: Values) {
    await Promise.resolve();
    setDraft([
      `${mode === "career" ? "Career interest" : mode === "quote" ? "Quote request" : "Website enquiry"}: ${values.topic}`,
      `Name: ${values.name}`,
      `Organisation: ${values.company}`,
      `Email: ${values.email}`,
      values.phone ? `Phone: ${values.phone}` : null,
      `${mode === "career" ? "Preferred location" : "Project location"}: ${values.location}`,
      `Context: ${values.message}`,
    ].filter(Boolean).join("\n"));
  }

  async function copyDraft() {
    if (!draft) return;
    await navigator.clipboard.writeText(draft);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  if (draft) return (
    <div className="rounded-2xl border border-success-600/25 bg-white p-7 md:p-9" aria-live="polite">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success-600 text-white"><Check aria-hidden="true" size={22} /></div>
      <h2 className="mt-5 text-2xl font-semibold">Your brief is ready.</h2>
      <p className="mt-3 text-sm leading-6 text-slate-700">Review and copy the validated summary. No personal data has been transmitted because a verified Corvex receiving endpoint has not yet been configured.</p>
      <pre className="mt-6 max-h-64 overflow-auto whitespace-pre-wrap rounded-xl bg-mist-100 p-5 font-sans text-xs leading-6 text-slate-700">{draft}</pre>
      <div className="mt-6 flex flex-wrap gap-3"><button type="button" onClick={copyDraft} className="button button-primary">{copied ? <Check aria-hidden="true" size={17} /> : <Copy aria-hidden="true" size={17} />}{copied ? "Copied" : "Copy brief"}</button><button type="button" onClick={() => setDraft(null)} className="button border border-ink-950/15 bg-white"><RotateCcw aria-hidden="true" size={16} /> Edit</button></div>
    </div>
  );

  return (
    <form className="rounded-2xl border border-ink-950/10 bg-white p-6 shadow-[0_24px_80px_rgba(8,17,28,.08)] md:p-9" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 className="text-2xl font-semibold">{config.title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-700">Fields marked required help route the request accurately.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}><input {...register("name")} className="form-input" autoComplete="name" /></Field>
        <Field label="Organisation" error={errors.company?.message}><input {...register("company")} className="form-input" autoComplete="organization" /></Field>
        <Field label="Email" error={errors.email?.message}><input {...register("email")} className="form-input" type="email" autoComplete="email" /></Field>
        <Field label="Phone (optional)" error={errors.phone?.message}><input {...register("phone")} className="form-input" type="tel" autoComplete="tel" /></Field>
        <Field label={mode === "career" ? "Area of interest" : "Enquiry type"} error={errors.topic?.message}><select {...register("topic")} className="form-input"><option value="">Select one</option>{config.topics.map((topic) => <option key={topic}>{topic}</option>)}</select></Field>
        <Field label={mode === "career" ? "Preferred work location" : "Project location"} error={errors.location?.message}><input {...register("location")} className="form-input" placeholder="City, state, or country" /></Field>
      </div>
      <div className="mt-5"><Field label={mode === "career" ? "Experience and role interests" : "Project context"} error={errors.message?.message}><textarea {...register("message")} className="form-input min-h-36 resize-y py-3" placeholder={mode === "career" ? "Relevant experience, capabilities, and the work you want to do" : "Site, quantities, product, environment, programme, and required standards"} /></Field></div>
      <label className="mt-5 flex gap-3 text-xs leading-5 text-slate-700"><input {...register("consent")} className="mt-1 h-4 w-4 accent-signal-600" type="checkbox" /><span>I agree that Corvex may use these details to respond to this request. See the <a className="font-semibold text-signal-600 underline" href="/privacy">privacy policy</a>.</span></label>
      {errors.consent && <p className="mt-2 text-xs text-danger-600">{errors.consent.message}</p>}
      <div className="mt-7 flex flex-wrap items-center gap-4"><button className="button button-primary" disabled={isSubmitting} type="submit">{isSubmitting && <LoaderCircle aria-hidden="true" className="animate-spin" size={17} />}{config.submit}</button><button className="text-sm font-semibold text-slate-500 hover:text-ink-950" type="button" onClick={() => reset()}>Clear form</button></div>
      <p className="mt-5 border-t border-ink-950/10 pt-5 text-xs leading-5 text-slate-500">This form validates and prepares a brief locally. It does not upload files or transmit information until an authorised receiving service is connected.</p>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-sm font-semibold">{label}</span>{children}{error && <span className="mt-1.5 block text-xs text-danger-600">{error}</span>}</label>;
}
