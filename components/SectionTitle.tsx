import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  className,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={cn(center && "text-center", className)}>
      <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[#a3a3a3] text-sm lg:text-base max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
