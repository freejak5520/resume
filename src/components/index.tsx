import { cn } from "@/lib/utils";

/**
 * 본문 기본 섹션
 *
 * main 하위에서만 사용
 */
export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={cn("mt-8", className)}>{children}</section>;
}

/**
 * 기본 목록
 */
export function List({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul className={cn("[&:not(:first-child)]:mt-6", className)}>{children}</ul>
  );
}

/**
 * 기본 목록 아이템
 */
export function ListItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <li className={cn("mt-1", className)}>{children}</li>;
}

/**
 * 부가 정보
 * 
 * 날짜, 직책 등의 보조 정보
 */
export function SubInfo({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-sm text-gray-700 dark:text-gray-300 leading-5",
        className
      )}
    >
      {children}
    </p>
  );
}

/**
 * 본문 텍스트
 */
export function Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("[&:not(:first-child)]:mt-6", className)}>{children}</p>
  );
}

/**
 * 경력 사항 회사 영역
 */
export function Company({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("[&:not(:first-child)]:mt-8", className)}>
      {children}
    </div>
  );
}
