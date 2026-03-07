import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const baseFieldClass =
  "w-full rounded-xl border border-slate-300 bg-white/85 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-tech-blue focus:bg-white focus:shadow-[0_0_0_3px_rgba(30,58,138,0.12)]";

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(baseFieldClass, props.className)} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(baseFieldClass, props.className)} />;
}

export function SelectField(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(baseFieldClass, props.className)} />;
}
