import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "purple" | "rose";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  const baseStyles = "inline-flex items-center font-medium rounded-full";

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3 py-1 text-xs",
  };

  const variantStyles = {
    default: "bg-slate-100 text-slate-700 border border-slate-200/80",
    primary: "bg-blue-50 text-blue-700 border border-blue-200/80",
    secondary: "bg-indigo-50 text-indigo-700 border border-indigo-200/80",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200/80",
    warning: "bg-amber-50 text-amber-800 border border-amber-200/80",
    danger: "bg-rose-50 text-rose-700 border border-rose-200/80",
    purple: "bg-purple-50 text-purple-700 border border-purple-200/80",
    rose: "bg-rose-100 text-rose-800 border border-rose-200",
  };

  return (
    <span
      className={twMerge(
        clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)
      )}
    >
      {children}
    </span>
  );
}
