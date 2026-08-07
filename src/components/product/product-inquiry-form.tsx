"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Copy, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  company: z.string().trim().min(2, "Enter your company name"),
  email: z.email("Enter a valid business email"),
  quantity: z.string().trim().min(1, "Add an estimated quantity or perimeter length"),
  message: z.string().trim().min(20, "Add at least 20 characters about the project"),
});
type InquiryValues = z.infer<typeof inquirySchema>;

export function ProductInquiryForm({ productName }: { productName: string }) {
  const [draft, setDraft] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<InquiryValues>({ resolver: zodResolver(inquirySchema) });

  async function onSubmit(values: InquiryValues) {
    await Promise.resolve();
    setDraft([`Product: ${productName}`, `Name: ${values.name}`, `Company: ${values.company}`, `Email: ${values.email}`, `Estimated requirement: ${values.quantity}`, `Project notes: ${values.message}`].join("\n"));
  }

  async function copyDraft() {
    if (!draft) return;
    await navigator.clipboard.writeText(draft);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  if (draft) return (
    <div className="rounded-2xl border border-success-600/25 bg-white p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success-600 text-white"><Check aria-hidden="true" size={22} /></div>
      <h3 className="mt-5 text-2xl font-semibold">Your enquiry brief is ready.</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">Review and copy the validated brief. Direct submission will be connected when the verified Corvex sales endpoint is supplied.</p>
      <pre className="mt-5 max-h-52 overflow-auto whitespace-pre-wrap rounded-xl bg-mist-100 p-4 font-sans text-xs leading-5 text-slate-700">{draft}</pre>
      <div className="mt-5 flex flex-wrap gap-3"><button type="button" onClick={copyDraft} className="button button-primary">{copied ? <Check aria-hidden="true" size={17} /> : <Copy aria-hidden="true" size={17} />}{copied ? "Copied" : "Copy brief"}</button><button type="button" onClick={() => setDraft(null)} className="button border border-ink-950/15 bg-white">Edit details</button></div>
    </div>
  );

  return (
    <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-5 sm:grid-cols-2"><Field label="Your name" error={errors.name?.message}><input {...register("name")} className="form-input" autoComplete="name" /></Field><Field label="Company" error={errors.company?.message}><input {...register("company")} className="form-input" autoComplete="organization" /></Field></div>
      <Field label="Business email" error={errors.email?.message}><input {...register("email")} className="form-input" type="email" autoComplete="email" /></Field>
      <Field label="Estimated quantity / perimeter" error={errors.quantity?.message}><input {...register("quantity")} className="form-input" placeholder="e.g. perimeter length, rolls, or units" /></Field>
      <Field label="Project context" error={errors.message?.message}><textarea {...register("message")} className="form-input min-h-32 resize-y py-3" placeholder="Site type, location, environment, timeline, and required standards" /></Field>
      <button className="button button-primary mt-1" disabled={isSubmitting} type="submit">{isSubmitting && <LoaderCircle aria-hidden="true" className="animate-spin" size={17} />}Prepare enquiry brief</button>
      <p className="text-xs leading-5 text-slate-500">This step validates and prepares the brief locally; it does not transmit personal data.</p>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-sm font-semibold">{label}</span>{children}{error && <span className="mt-1.5 block text-xs text-danger-600">{error}</span>}</label>;
}
