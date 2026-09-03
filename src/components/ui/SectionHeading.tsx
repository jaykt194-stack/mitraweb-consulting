import React from "react";
import Badge from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "purple" | "rose";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  badgeVariant = "primary",
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}>
      {badge && (
        <div className={`mb-3 ${isCenter ? "flex justify-center" : ""}`}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
