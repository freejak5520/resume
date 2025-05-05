import { cn } from "@/lib/utils";

/**
 * 연락처 목록
 */
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

/**
 * 연락처
 */
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
