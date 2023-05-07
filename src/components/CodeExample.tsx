"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
      className="code-example-div"
      language="python"
      showLineNumbers={showLines}
      style={dracula}
    >
      {code}
    </SyntaxHighlighter>
  );
}
