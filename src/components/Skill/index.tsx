import { List, ListItem } from "@/components";

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
