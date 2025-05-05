import { cn } from "@/lib/utils";

/**
 * 경력 사항 프로젝트 컴포넌트
 */
export function Project({
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

export function ProjectAside({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("min-w-[150px]", className)}>{children}</p>;
}

export function ProjectContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("flex-1", className)}>{children}</p>;
}
