import { List, ListItem } from "@/components";
import { cn } from "@/lib/utils";

export function MySkillList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <List className={className}>{children}</List>;
}

export function MySkill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <ListItem className={className}>{children}</ListItem>;
}

export function ExperienceSkills({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "[&:not(:first-child)]:mt-6 text-neutral-700 dark:text-neutral-300",
        className
      )}
    >
      {children}
    </p>
  );
}
