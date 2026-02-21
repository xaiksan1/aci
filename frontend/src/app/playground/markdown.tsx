import Link from "next/link";
import React, { memo, ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlock } from "./code-block";
import { cn } from "@/lib/utils";

type MarkdownComponentProps = {
  children?: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

const components: Partial<Components> = {
  code: CodeBlock as Components["code"],
  pre: ({ children }: MarkdownComponentProps) => <>{children}</>,
  p: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <p className="whitespace-pre-wrap break-words" {...props}>
        {children}
      </p>
    );
  },
  ol: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <ol className="list-decimal list-outside ml-4" {...props}>
        {children}
      </ol>
    );
  },
  li: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <li className="py-1" {...props}>
        {children}
      </li>
    );
  },
  ul: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <ul className="list-decimal list-outside ml-4" {...props}>
        {children}
      </ul>
    );
  },
  strong: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <span className="font-semibold" {...props}>
        {children}
      </span>
    );
  },
  h1: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <h1 className="text-3xl font-semibold mt-6 mb-2" {...props}>
        {children}
      </h1>
    );
  },
  h2: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <h2 className="text-2xl font-semibold mt-6 mb-2" {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <h3 className="text-xl font-semibold mt-6 mb-2" {...props}>
        {children}
      </h3>
    );
  },
  h4: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <h4 className="text-lg font-semibold mt-6 mb-2" {...props}>
        {children}
      </h4>
    );
  },
  h5: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <h5 className="text-base font-semibold mt-6 mb-2" {...props}>
        {children}
      </h5>
    );
  },
  h6: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <h6 className="text-sm font-semibold mt-6 mb-2" {...props}>
        {children}
      </h6>
    );
  },
  a: ({
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
      // @ts-expect-error - Link component from Next.js has slightly different props than HTMLAnchorElement
      <Link
        className={cn(
          "hover:underline transition-colors font-medium underline-offset-4 text-primary hover:text-primary/80 break-all",
        )}
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {children}
      </Link>
    );
  },
};

const remarkPlugins = [remarkGfm];

const NonMemoizedMarkdown = ({
  children,
}: {
  children: string;
  isUserMessage?: boolean;
}) => {
  const componentsWithUserMessage = {
    ...components,
    a: ({
      children,
      ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      return (
        // @ts-expect-error - Link component from Next.js has slightly different props than HTMLAnchorElement
        <Link
          className={cn(
            "hover:underline transition-colors font-medium underline-offset-4 text-primary hover:text-primary/80",
          )}
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          {children}
        </Link>
      );
    },
  };

  return (
    <ReactMarkdown
      remarkPlugins={remarkPlugins}
      components={componentsWithUserMessage}
    >
      {children}
    </ReactMarkdown>
  );
};

export const Markdown = memo(
  NonMemoizedMarkdown,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.isUserMessage === nextProps.isUserMessage,
);
