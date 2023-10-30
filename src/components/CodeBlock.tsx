"use client";
import hljs from "highlight.js";
import { useEffect } from "react";
import "highlight.js/styles/atom-one-dark.min.css";

export default function CodeBlock({ code }: { code: string }) {
  useEffect(() => {
    hljs.configure({ ignoreUnescapedHTML: true });
    hljs.highlightAll();
  });
  return (
    <pre>
      <code>{code}</code>
    </pre>
  );
}
