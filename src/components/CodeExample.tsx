"use client";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import py from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("python", py);

export default function CodeExmaple({
  language,
  code,
  showLines,
}: {
  language: string;
  code: string | string[];
  showLines: boolean;
}) {
  return (
    <SyntaxHighlighter
      language={language}
      customStyle={{
        backgroundColor: "#002c4f",
        border: "10px solid #011e36",
      }}
      showLineNumbers={showLines}
      style={dracula}
    >
      {code}
    </SyntaxHighlighter>
  );
}
