import { cn } from "@/lib/utils";

/**
 * 경력 사항 프로젝트 영역
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

/**
 * 경력 사항 프로젝트 영역 왼쪽 영역
 * 
 * 프로젝트 이름과 기간을 작성
 */
export function ProjectAside({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("min-w-[150px]", className)}>{children}</div>;
}

/**
 * 경력 사항 프로젝트 영역 오른쪽 영역
 * 
 * 프로젝트 내용을 작성
 */
export function ProjectContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("flex-1", className)}>{children}</div>;
}
