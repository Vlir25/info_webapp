import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // Importa los estilos de KaTeX

const MarkdownRenderer = ({ content }) => {
  //console.log("Mensaje recibido:", content);

  // Reemplazar \[ ... \] por $$ ... $$ (bloque)
  // Reemplazar \( ... \) por $ ... $ (en línea)
  const formattedContent = content
    .replace(/\\\[|\\]/g, "$")
    .replace(/\\\[(.*?)\\\]/gs, "\n$$\n$1\n$$\n") // Bloques: \[ ... \] → $$ ... $$
    .replace(/\n\\\[\n([\s\S]*?)\n\\\]\n/g, "\n$$\n$1\n$$\n")
    .replace(/\n?\\\[\n?([\s\S]*?)\n?\\\]\n?/g, "\n$$ $1 $$\n")
    .replace(/\\\((.*?)\\\)/gs, "$$$1$"); // En línea: \( ... \) → $ ... $
  // console.log("Mensaje formateado:", formattedContent); // Ver si se reemplazó bien

  return (
    <div className="markdown-container">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {formattedContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;

