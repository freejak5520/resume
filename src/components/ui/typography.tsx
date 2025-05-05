import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function TypographyH1({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight",
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...rest}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...rest}
    >
      {children}
    </h4>
  );
}

export function TypographyH5({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className={cn("text-lg font-semibold tracking-tight", className)}
      {...rest}
    >
      {children}
    </h5>
  );
}

export function TypographyH6({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h6
      className={cn("text-base font-semibold tracking-tight", className)}
      {...rest}
    >
      {children}
    </h6>
  );
}

export function Body({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <div
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function TypographyBlockquote({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...rest}
    >
      {children}
    </blockquote>
  );
}

export function TypographyList({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...rest}>
      {children}
    </ul>
  );
}

export function TypographyInlineCode({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...rest}
    >
      {children}
    </code>
  );
}
