export function ExternalLink({
  children,
  ...attrs
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a {...attrs} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
