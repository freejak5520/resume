import { cn } from "@/lib/utils";

/**
 * 본문 기본 섹션 컴포넌트
 *
 * main 태그 내에서 사용
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

export function ContactList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul className={cn("[&:not(:first-child)]:mt-6 list-none pl-0", className)}>
      {children}
    </ul>
  );
}

export function Contact({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title: string;
}) {
  return (
    <li className={cn("mt-1", className)}>
      <b className="mr-2">{title}:</b>
      {children}
    </li>
  );
}

/**
 * 본문 기본 목록 컴포넌트
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

export function ListItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <li className={cn("mt-1", className)}>{children}</li>;
}

export function SubInfo({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-sm text-gray-700 dark:text-gray-300 leading-5", className)}>
      {children}
    </p>
  );
}

export function Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("[&:not(:first-child)]:mt-6", className)}>{children}</p>;
}

export function Company({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("[&:not(:first-child)]:mt-8", className)}>{children}</div>;
}

export function ExperienceSkills({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("[&:not(:first-child)]:mt-6 text-gray-700 dark:text-gray-300", className)}>{children}</p>;
}
