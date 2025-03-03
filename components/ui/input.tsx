import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-neutral-200 placeholder:text-neutral-400 selection:bg-primary-200 selection:text-primary-800 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-primary-400 focus-visible:ring-primary-100 focus-visible:ring-[3px]",
        "aria-invalid:ring-red-200 aria-invalid:border-red-500",
        className
      )}
      {...props}
    />
  );
}

export { Input };
