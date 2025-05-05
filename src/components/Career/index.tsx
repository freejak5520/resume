import { cn } from "@/lib/utils";

export function Career({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4 mt-6 md:flex-row print:flex-row", className)}>
      {children}
    </div>
  );
}

export function CareerSide({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("min-w-[150px]", className)}>{children}</p>;
}

export function CareerContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("flex-1", className)}>{children}</p>;
}
